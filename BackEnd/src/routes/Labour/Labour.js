import {Router} from "express"
import { logoutLabour,refreshAccessToken,fetchLabourInfo,registerLabour,getAllLaborers} from "../../controllers/Labour/Labour.js"
import {verifyJWTLabour} from "../../middlewares/Auth.js"
import { loginLabour,getOneLabourByID, updateLabour } from "../../controllers/Labour/Labour.js";
import { upload } from "../../middlewares/Multer.js";
// import { normalLoginHandler } from "../../controllers/Login.js";

const router = Router();

router.route("/registerlabour").post(
    upload.fields([
        {
            name:"profileImage",
            maxCount:1
        },
        {
            name:"certificate",
            maxCount:1
        }

    ]),
    registerLabour
);

router.route("/getlabour").get(getAllLaborers)
    
router.route("/lslogin").post(loginLabour)
router.route("/getOneLabourByID").get(getOneLabourByID)
router.route("/updateLabour").post(updateLabour)

router.route("/labour/:labourId").get(fetchLabourInfo);

//secured routes

router.route("/logout").post(verifyJWTLabour, logoutLabour)
router.route("/refresh-token").post(refreshAccessToken)


//separte route
// router.route("/mainlogin").post(normalLoginHandler)
export default router