import {asyncHandler} from "../../utils/AsyncHandler.js"
import {Apierror} from "../../utils/ApiError.js"
import {LabourInfo} from "./../../models/Labour/LabourInfo.js"
import { Apiresponse } from "../../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import {upload} from "../../middlewares/Multer.js"

//registeration
const registerLabour = asyncHandler(async (req, res) => {
            const {
                firstName,
                lastName,
                email,
                password,
                phone,
                aadharNo,
                gender,
                age,
                maxEducation,
                experience,
                location,
                category,
                customCategory
            } = req.body;

            if (
                [firstName, lastName, email, password, phone, aadharNo,
                    gender, age, maxEducation, experience, location,
                    category
                ].some((field) =>
                    field?.trim() === "")
            ) {
                throw new Apierror(400, "All fields are required")
            }
            const existedUser = await LabourInfo.findOne({
                $or: [{ aadharNo }, { email }]
            })
            if (existedUser) {
                throw new Apierror(409, "User already exists")
            }

            const profileImagePath = req.files?.profileImage[0]?.path
            if(!profileImagePath) {
                throw new Apierror(400,"profile picture is required")
            }
            const profileImage = await uploadOnCloudinary(profileImagePath)
            if(!profileImage) {
                throw new Apierror(400,"avatar is required")
            }


            const certificatePath = req.files?.certificate[0]?.path
            const certificate = await uploadOnCloudinary(certificatePath)

            let labourData = {
                firstName,
                lastName,
                email,
                password,
                phone,
                aadharNo,
                gender,
                age,
                maxEducation,
                experience,
                location,
                category,
                profileImage: profileImage.url,
                certificate:certificate.url
            };

            // const cloudinaryResponse = await uploadOnCloudinary(profileImagePath);
            // if (cloudinaryResponse && cloudinaryResponse.url) {
            //     labourData.profileImageUrl = cloudinaryResponse.url;
            // } else {
            //     throw new Error("Failed to upload image to Cloudinary");
            // }

            // If category is "Other", include the additional field
            if (category === "Other") {
                labourData.otherCategory = otherCategory;
            }

            const labour = await LabourInfo.create(labourData);
            console.log(labour);

            const createdLabour = await LabourInfo.findById(labour._id).select(
                "-password -refreshToken"
            )
            if (!createdLabour) {
                throw new Apierror(500, "something went wrong while registertion")
            }
            // const cloudinaryResponse = await uploadOnCloudinary(imagePath);
            return res.status(201).json(
                new Apiresponse(200, createdLabour, "Registration successful")
            )
        } 
);


// const localFileUpload = async (req, res) => {
//     try {
//       const file = req.files.file;
//       console.log("File is her", file);
//       let path =
//         __dirname + "/Files/" + Date.now() + "." + `${file.name.split(".")[1]}`;
//       console.log("Uploading to" + path);
//       file.mv(path, (err) => {
//         console.log(err);
//       });
//       res.json({
//         success: true,
//         message: "File uploaded successfully",
//       });
//     } catch (err) {
//       console.log("Error uploading file");
//       console.log(err);
//     }
//   };

//login
const loginLabour = asyncHandler ( async (req,res)=>{
    const {email,password} = req.body

    if(!email){
        throw new Apierror(400,"email is required")
    }

    const labour = await LabourInfo.findOne({email})
    console.log(labour);

    if(!labour){
        throw new Apierror(400,"User not found");
    }

    const passCheck = await labour.isPasswordcorrect(password)
    if(!passCheck){
        throw new Apierror(401,"Password does not match")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(labour._id)

    const loggedInlabour = await LabourInfo.findById(labour._id).select("-password -refreshToken")
    console.log("hii",loggedInlabour);
    
    const { pswd, ...userInfo} = loggedInlabour;
    // const userInfo = loggedInClient;
    //cookies
    
    userInfo._doc["role"]="labour";
    userInfo._doc["token"] = jwt.sign({data:userInfo._doc},"secretkey")
    //  console.log(userInfo)
    //  console.log(token)

    return res
    .status(200)
    .cookie("accessToken",userInfo._doc.token)
    .json(
        userInfo._doc
    )
    // .cookie("accessToken",token)
})

//logout
const logoutLabour = asyncHandler(async (req, res) => {
    try {
        await LabourInfo.findByIdAndUpdate(
            req.labour._id,
            {
                $set: {
                    refreshToken: undefined
                }
            }
        );

        const options = {
            httpOnly: true,
            secure: true
        };

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(
                new Apiresponse(200, {}, "User logged Out Successfully")
            );
    } catch (error) {
        throw new Apierror(500, "Error occurred while logging out");
    }
})

//ageToken
const generateAccessAndRefreshTokens = async (labourId) => {
    try {
        const labour = await LabourInfo.findById(labourId);
        if (!labour) {
            throw new Apierror(404, "User not found");
        }
        const accessToken = labour.generateAccessToken();
        const refreshToken = labour.generateRefreshToken();

        labour.refreshToken = refreshToken;
        await labour.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        // Ensure to import Apierror properly and handle the error
        throw new Apierror(500, "Something went wrong while generating refresh and access token");
    }
}

//refreshAccessToken
const refreshAccessToken = asyncHandler(async (req,res) => {
    const incomingRefreshToken = await req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new Apierror(401,"Unauthorized request")
    }
    
   try {
     const decodedToken = jwt.verify(
         incomingRefreshToken,
         process.env.REFRESH_TOKEN_SECRET
     )
     const labour = await LabourInfo.findById(decodedToken?._id)
 
     if(!labour) {
         throw new Apierror(401,"Invalid Refresh Token") 
     }
 
     if(!incomingRefreshToken !== labour?.refreshToken){
         throw new Apierror(401,"Refresh Token is expired") 
     }
 
     const {accessToken,newRefreshToken} = await generateAccessAndRefreshTokens(labour._id)
 
     const options = {
         httpOnly:true,
         secure:true
     }
 
     return res
     .status(200)
     .cookie("accessToken",accessToken,options)
     .cookie("refreshToken",newRefreshToken,options)
     .json(
         new Apiresponse (
             200,
             {accessToken,refreshToken:newRefreshToken},
             "Acesss token refreshed"
         )
     )
   } catch (error) {
        throw new Apierror(401,error?.message || "Invalid refresh token")
   }
})

export const fetchLabourInfo = asyncHandler(async (req, res) => {
    const labour = await LabourInfo.findById(req.params.labourId).select("-password -refreshToken");
    if (!labour) {
        throw new Apierror(404, "Laborer not found");
    }
    res.status(200).json(new Apiresponse(200, labour, "Laborer information fetched successfully"));
});

export const getAllLaborers = async (req, res) => {
    try {
        const laborers = await LabourInfo.find();
        res.status(200).json(laborers);
      } catch (error) {
        console.error('Error fetching laborers:', error);
        res.status(500).json({ error: 'Internal Server Error' });   
      }}
const updateLabour = asyncHandler ( async (req,res)=>{

    const token = req.cookies.accessToken;
    if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
        
      
      if(err) return res.status(400).json("Error While Updating Client Profile");

      if(userInfo.data.role=="customer") return res.status(401).json({
        "message":"You are Not authorised !!"
      })
  
      try {
        const updatingLab = await LabourInfo
        .updateMany(
          {
            _id:userInfo.data._id
          },
          {$set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            aadharNo:req.body.aadharNo,
            gender:req.body.gender,
            age:req.body.age,
            maxEducation:req.body.maxEducation,
            experience:req.body.experience,
            location:req.body.location,
            category:req.body.category,
          }}
        );
        console.log(updatingLab);

        return res.status(200).json({
            message:"Profile Updated",
            name:`${req.body.firstName} ${req.body.lastName}`,
            category:`${req.body.category}`
        });
        
      } catch (error) {

        return res
        .status(500)
        .json({ 
          message: 'An error occurred .', 
          error: error.message 
        });
      }
    });
})

const getOneLabourByID = asyncHandler ( async (req,res)=>{

    const token = req.cookies.accessToken;
    // console.log(token);
    if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
      
      if(err) return res.status(400).json("Error While Getting Client Profile");

      if(userInfo.data.role!="labour") return res.status(401).json({
        "message":"You are Not authorised !!"
      })
  
      try {
        const clientData = await LabourInfo.find({_id:userInfo.data._id});
        
        const { password, createdAt, updatedAt, ...others } = clientData[0]._doc;

        return res.status(200).json({data:others});
        
      } catch (error) {

        return res
        .status(500)
        .json({ 
          message: 'An error occurred .', 
          error: error.message 
        });
      }
    });
})



  

export {registerLabour,uploadOnCloudinary}
export{refreshAccessToken,logoutLabour,loginLabour,updateLabour,getOneLabourByID}
// export {localFileUpload}

