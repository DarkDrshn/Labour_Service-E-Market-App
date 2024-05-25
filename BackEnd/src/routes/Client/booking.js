import {Router} from "express"
import { createBookingRequest ,getBookingRequests, setBookingRequests} from "../../controllers/Client/booking.js";
import { upload } from "../../middlewares/Multer.js";


const router = Router();

router.route("/booking").post(
    upload.fields([{
        name:"workPhoto",
        maxCount:1
    }]),
    createBookingRequest)

router.route("/getbooking").get(getBookingRequests);
router.route("/setbooking").post(setBookingRequests);

export default router