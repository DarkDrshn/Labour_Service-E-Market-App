import {Router} from "express"
import { recentActivities } from "../../controllers/Admin/recent.js";
import { LaborerCount } from "../../controllers/Admin/recent.js";
import { ClientCount } from "../../controllers/Admin/recent.js";
import { getTotalBookingRequests } from "../../controllers/Admin/recent.js";


const  router = Router();

router.route("/recentactivities").get(recentActivities)

router.route("/laborercount").get(LaborerCount)

router.route("/clientcount").get(ClientCount)

router.route("/totalBooking").get(getTotalBookingRequests)


export default router