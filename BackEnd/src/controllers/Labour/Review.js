import { Assignment } from '../../models/Labour/Assignment.js'
import jwt from "jsonwebtoken";
import { Review } from "./../../models/Client/Review.js"

export const createReview = async (req, res) => {

    const token = req.cookies.accessToken
    if(!token) return res.status(400).json({message : 'User not logged in'})

    // console.log(req.body);
    // return res.status(200).json("Hit Server");

    jwt.verify(token,"secretkey", async (err, userInfo) => {
    
        // console.log(userInfo.data);
        if(err) return res.status(400).json("Error While Fetching labourer's Bookings");

        if(userInfo.data.role!="customer") return res.status(401).json({
            "message":"You are Not authorised !!"
        })

        const existedReview = await Review.find({"assignmentId":req.body._id});
        if(existedReview.length ){
            console.log(existedReview);
            return res.status(200).json({
                "message":"Already Reviewed",
                "data":existedReview
            });
        }

        try {
            // const clientId=userInfo.data._id;
            const reviewData = {
                clientId: req.body.clientId,
                labourId: req.body.labourId._id,
                rating: req.body.rating,
                reviewDesc: req.body.reviewDesc,
                assignmentId:req.body._id,
                charges: req.body.charges
            }
            const reviewCreate = await Review.create(reviewData);
            
            // console.log(bookingRequests);
            return res.status(200).json({
                "message":"Review Submitted",
                "data":reviewCreate
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
    
}

export const getLaborerReviews = async (req, res) => {
        const token = req.cookies.accessToken
        if(!token) return res.status(400).json({message : 'User not logged in'})
        jwt.verify(token,"secretkey", async (err, userInfo) => {
            try {
                const reviews = await Review.find({ labourId: userInfo.data._id }).populate('clientId'); 
                return res.status(200).json({ reviews: reviews });
            } 
            catch (error) {
        return res.status(500).json({ message: 'An error occurred.', error: error.message });
    }})  
};
