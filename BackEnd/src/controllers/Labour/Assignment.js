import { Assignment } from '../../models/Labour/Assignment.js'
import jwt from "jsonwebtoken";

export const getAssignment = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(400).json({ message: 'User not logged in' });

  jwt.verify(token, "secretkey", async (err, userInfo) => {

    
    // return res.status(200).json(userInfo.data.role);


      if (err) return res.status(400).json("Error While Fetching labourer's Bookings");

      if (userInfo.data.role === "customer"){ 
        try {
          const clientId = userInfo.data._id;
          const query = { 
            clientId: clientId, 
            status: { 
              $in: [
                "Completed", 
                "Cancelled"
              ] 
            } 
          };
          const assignments = await Assignment
            .find(query)
            .populate(
              'labourId', 'firstName lastName'
            );
          
          // console.log(assignments);
          if (!assignments) return res.status(201).json({
              "message": "You Don't Have any Requests/Assignments Completed yett !!"
          });
          // const assignmentsWithDocumentURL = assignments.map(assignment => {
          //   return {
          //       ...assignment._doc,
          //       workPhotoUrl: assignment.workPhoto
          //   };
          // });
          // console.log(assignments.length);
          return res.status(200).json(assignments);

        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred.',
                error: error.message
            });
        }




      }
      else{
        try {
          const labourId = userInfo.data._id;
          const assignments = await Assignment.find({ labourId: labourId });
          if (!assignments) return res.status(201).json({
              "message": "You Don't Have any Requests/Assignments yett !!"
          });
          const assignmentsWithDocumentURL = assignments.map(assignment => {
            return {
                ...assignment._doc,
                workPhotoUrl: assignment.workPhoto
            };
          });
          return res.status(200).json(assignmentsWithDocumentURL);

        } catch (error) {
            return res.status(500).json({
                message: 'An error occurred.',
                error: error.message
            });
        }
      }


      
  });
};




  export const getCompletedAssignment = async (req, res) => {
    // try{
    //   const bookingRequests = await RequestAssigment.find();
    //   return res.status(200).json(bookingRequests);
    // }catch{
    //   return res.status(500).json("some err");
    // }
    
      const token = req.cookies.accessToken
      if(!token) return res.status(400).json({message : 'User not logged in'})
  
      jwt.verify(token,"secretkey", async (err, userInfo) => {
        
        // console.log(userInfo.data);
        if(err) return res.status(400).json("Error While Fetching labourer's Assignment");
  
        if(userInfo.data.role=="customer") return res.status(401).json({
          "message":"You are Not authorised !!"
        })
    
        try {
          const labourId=userInfo.data._id;
          const assignments = await Assignment.find({ labourId: labourId, $or: [{ status: "Completed" }, { status: "Cancelled" }] });

          
          if(!assignments) return res.status(201).json({
            "message":"You Don't Have any Requests/Assignments yett !!"
          })
          // console.log(bookingRequests);
          return res.status(200).json({assignments:assignments});
          
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


  export const setAssignment = async (req, res) => {
    // console.log(req.body);
    const token = req.cookies.accessToken;
    if(!token) return res.status(400).json({message : 'User not logged in'})
  
      jwt.verify(token,"secretkey", async (err, userInfo) => {
        
        // console.log(userInfo.data);
        if(err) return res.status(400).json("Error While Fetching labourer's Assignment");
  
        if(userInfo.data.role=="customer") return res.status(401).json({
          "message":"You are Not authorised !!"
        })
    
        try {
          const assignmentUpdate = await Assignment
          .updateMany(
            {
              _id:req.body.requestId
            },
            {$set:{
              status:req.body.status
            }}
          );
          // console.log(bookingRequests);
  
          // if(!bookingRequests) return res.status(201).json({
          //   "message":"You Don't Have any Requests/Assignments yett !!"
          // })
          // console.log(bookingRequests);
  
  
          return res.status(200).json(assignmentUpdate);
          
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
  
  
