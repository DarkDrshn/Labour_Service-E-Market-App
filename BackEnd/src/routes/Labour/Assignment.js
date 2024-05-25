import {Router} from "express"
import { getAssignment, setAssignment,getCompletedAssignment } from "../../controllers/Labour/Assignment.js";
import { createReview, getLaborerReviews } from "../../controllers/Labour/Review.js";


const router = Router();


router.route("/getassignment").get(getAssignment);
router.route("/getcompletedassignment/:laborerId").get(getCompletedAssignment);
router.route("/setassignment").post(setAssignment);
router.route("/createReview").post(createReview);
router.route("/getReview/:laborerId").get(getLaborerReviews);  



export default router;