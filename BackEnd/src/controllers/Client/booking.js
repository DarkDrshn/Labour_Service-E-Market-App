// Import the model for labour booking requests
import { RequestAssigment } from '../../models/Client/Req_assignment.js';
import { Assignment } from '../../models/Labour/Assignment.js'
import jwt from "jsonwebtoken";
import {Apierror} from "../../utils/ApiError.js"
import { uploadOnCloudinary } from "../../utils/cloudinary.js"


// Controller function to handle the creation of a new booking request
export const createBookingRequest = async (req, res) => {

  const token = req.cookies.accessToken; 
  console.log(token); 
  if(!token) return res.status(400).json({message : 'User not logged in'});
  
  jwt.verify(token,"secretkey", async (err, userInfo) => {
    if(err) return res.status(400).json("Error aaya");
    // console.log(userInfo.data);

    try {
      // Extract the booking details from the request body
      const {  labourId, clientName, address, category, BookingFor, description, datetime } = req.body;
      const clientId = userInfo.data._id;
     
      const workPhotoPath = req.files?.workPhoto[0]?.path
      if(!workPhotoPath) {
          throw new Apierror(400,"work picture is required")
      }
      const workPhoto = await uploadOnCloudinary(workPhotoPath)
      if(!workPhoto) {
          throw new Apierror(400,"workphoto is required")
      } 

     // Create a new booking request document
      const newBookingRequest = new RequestAssigment({
        clientId,
        labourId,
        clientName,
        address,
        category,
        BookingFor,
        description,
        datetime,
        workPhoto:workPhoto.url
      });
  
      // Save the booking request to the database
      await newBookingRequest.save();
  
      // Respond with a success message
      return res.status(201).json({ message: 'Booking request created successfully!' });
    } catch (error) {
      // Handle any errors that occur during the creation process
      return res.status(500).json({ message: 'An error occurred while creating the booking request.', error: error.message });
    }
  });
  
};

export const getBookingRequests = async (req, res) => {
 
  
    const token = req.cookies.accessToken
    if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
      
      // console.log(userInfo.data);
      if(err) return res.status(400).json("Error While Fetching labourer's Bookings");

      if(userInfo.data.role=="customer"){ 

        try{
          const clientId=userInfo.data._id;
          const bookingRequests = await RequestAssigment.find({clientId:clientId});
          if(!bookingRequests) return res.status(201).json({
            "message":"You Don't Have any Requests/Assignments yett !!"
          })
          return res.status(200).json(bookingRequests);
        }
        catch(error) {

          return res
          .status(500)
          .json({ 
            message: 'An error occurred .', 
            error: error.message 
          });
        }
        return res.status(401).json({
          "message":"You are Not authorised !!"
        })
      }
  
      try {
        const labourId=userInfo.data._id;
        const bookingRequests = await RequestAssigment.find({labourId:labourId, status:"Pending"});
        if(!bookingRequests) return res.status(201).json({
          "message":"You Don't Have any Requests/Assignments yett !!"
        })
        // console.log(bookingRequests);
        return res.status(200).json(bookingRequests);
        
      } catch (error) {

        return res
        .status(500)
        .json({ 
          message: 'An error occurred .', 
          error: error.message 
        });
      }
    });
    
};


export const setBookingRequests = async (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(400).json({message : 'User not logged in'})

    jwt.verify(token,"secretkey", async (err, userInfo) => {
      
      // console.log(userInfo.data);
      if(err) return res.status(400).json("Error While Fetching labourer's Bookings");

      if(userInfo.data.role=="customer") return res.status(401).json({
        "message":"You are Not authorised !!"
      })
  
      try {
        const bookingRequests = await RequestAssigment
        .updateMany(
          {
            _id:req.body.requestId
          },
          {$set:{
            status:req.body.result
          }}
        );
        // console.log(bookingRequests);

        // if(!bookingRequests) return res.status(201).json({
        //   "message":"You Don't Have any Requests/Assignments yett !!"
        // })
        // console.log(bookingRequests);

        const updatedBookingRequest=await RequestAssigment
        .find(
          {
            _id:req.body.requestId
          }
        );

        console.log(updatedBookingRequest[0])

        if(req.body.result == "Accepted"){
            
            const newAssignment = new Assignment({
            clientId:updatedBookingRequest[0].clientId,
            labourId:updatedBookingRequest[0].labourId,
            clientName:updatedBookingRequest[0].clientName,
            address:updatedBookingRequest[0].address,
            category:userInfo.data.category,
            title:updatedBookingRequest[0].BookingFor,
            description:updatedBookingRequest[0].description,
            datetime:updatedBookingRequest[0].datetime,
            serialNo:updatedBookingRequest[0]._id
          });
      
          // Save the booking request to the database
          await newAssignment.save();
        }


        return res.status(200).json(bookingRequests);
        
      } catch (error) {

        return res
        .status(500)
        .json({ 
          message: 'An error occurred .', 
          error: error.message 
        });
      }
    });
}

