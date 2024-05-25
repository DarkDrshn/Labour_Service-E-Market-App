import {asyncHandler} from "../../utils/AsyncHandler.js"
import {Apierror} from "../../utils/ApiError.js"
import {ClientInfo} from "./../../models/Client/ClientInfo.js"
import { Apiresponse } from "../../utils/ApiResponse.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { upload } from "../../middlewares/Multer.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
//Registration

const registerClient = asyncHandler ( async (req,res) => {
    
    const {firstName,lastName,email,password,phone,address,age,zipcode,city} = req.body

    console.log("Received request body:", req.body);

    if(
        [firstName,lastName,email,password,phone,address,age,zipcode,city].
        some(field => !field || !field.trim())
    ){
        throw new Apierror(400,"All fields are required")
    }
    const existedUser = await ClientInfo.findOne({
        $or:[{email}]
    })
    if (existedUser) {
        throw new Apierror(409,"User already exists")
    }

    // let imageUrl = null;

    // if (req.file) {
    //     const uploadedImage = await uploadOnCloudinary(req.file.path);
    //     fs.unlinkSync(req.file.path);
    //     imageUrl = uploadedImage ? uploadedImage.url : null;
    // }

    const client = await ClientInfo.create({
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        age,
        zipcode,
        city,
        // imageUrl
    })
    
    const createdClient = await ClientInfo.findById(client._id).select(
        "-password -refreshToken"
    )
    if(!createdClient){
        throw new Apierror(500,"something went wrong while registertion")
    }
    return res.status(201).json(
        new Apiresponse(200,createdClient,"Registertion succesfull")
    )
})

//login
const loginClient = asyncHandler ( async (req,res)=>{

    const t = req.cookies.accessToken;


    const {email,password} = req.body

    if(!email){
        throw new Apierror(400,"email is required")
        // return res.status(400).message("Email is Required");
    }

    var client = await ClientInfo.findOne({email:email});
    // console.log(client);

    if(!client){
         throw new Apierror(400,"User not found");
        // return res.status(400).message("User Not Found");
    }

    const passCheck = await client.isPasswordcorrect(password)
    if(!passCheck){
        throw new Apierror(401,"Password does not match")
    //     return res.status(401).message("Password does not Match");
    }

    // const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(client._id)
    const loggedInClient = await ClientInfo.findById(client._id).select("-password -refreshToken")
    
    const { pswd, ...userInfo} = loggedInClient;
    // const userInfo = loggedInClient;
    //cookies
    const options = {
        httpOnly : false,    //this makes the cookies unmodifiable which will be visible on frontend as well only modifiable at server
        secure : true
    }
    
    userInfo._doc["role"]="customer";

    userInfo._doc["token"] = jwt.sign({data:userInfo._doc},"secretkey")
    //  console.log(userInfo)
    //  console.log(userInfo._doc.token)

    return res
    .status(200)
    .cookie("accessToken",userInfo._doc.token)
    .json(
        userInfo._doc
    )
    
    // .cookie("refreshToken",refreshToken,options)
})

const updateClient = asyncHandler ( async (req,res)=>{

    const token = req.cookies.accessToken;
    if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
        
      
      if(err) return res.status(400).json("Error While Updating Client Profile");

      if(userInfo.data.role=="labour") return res.status(401).json({
        "message":"You are Not authorised !!"
      })
  
      try {
        const updatingCl = await ClientInfo
        .updateMany(
          {
            _id:userInfo.data._id
          },
          {$set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            age:req.body.age,
            zipcode:req.body.zipcode,
            city:req.body.city,
          }}
        );
        console.log(updatingCl);

        return res.status(200).json({
            message:"Profile Updated",
            name:`${req.body.firstName} ${req.body.lastName}`
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

const getOneClientByID = asyncHandler ( async (req,res)=>{

    const token = req.cookies.accessToken;
    // console.log(token);
    if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
      
      if(err) return res.status(400).json("Error While Getting Client Profile");

      if(userInfo.data.role!="customer") return res.status(401).json({
        "message":"You are Not authorised !!"
      })
  
      try {
        const clientData = await ClientInfo.find({_id:userInfo.data._id});
        
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

//logout
const logoutClient = asyncHandler(async (req, res) => {
    try {
        await ClientInfo.findByIdAndUpdate(
            req.client._id,
            {
                $set: {
                    refreshToken: undefined
                }
            }
        );

        const options = {
            httpOnly: false,
            secure: true
        };
        // req.session.cookie.maxAge = 1;
        // res
        //     .status(200)
        //     .cookie(
        //         "accessToken", "token", { 
        //             maxAge: 1,
        //         }
        //     )
        //     // .cookie("refreshToken",refreshToken,options)
        //     .json(
        //         "Logged out."
        //     );

        //     return req.session.cookie.maxAge = 1;

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
const generateAccessAndRefreshTokens = async (clientId) => {
    try {
        const client = await ClientInfo.findById(clientId);
        if (!client) {
            throw new Apierror(404, "User not found");
        }
        const accessToken = client.generateAccessToken();
        const refreshToken = client.generateRefreshToken();

        client.refreshToken = refreshToken;
        await client.save({ validateBeforeSave: false });

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
     const client = await ClientInfo.findById(decodedToken?._id)
 
     if(!client) {
         throw new Apierror(401,"Invalid Refresh Token") 
     }
 
     if(!incomingRefreshToken !== client?.refreshToken){
         throw new Apierror(401,"Refresh Token is expired") 
     }
 
     const {accessToken,newRefreshToken} = await generateAccessAndRefreshTokens(client._id)
 
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



export {registerClient,logoutClient,refreshAccessToken,loginClient,updateClient,getOneClientByID}