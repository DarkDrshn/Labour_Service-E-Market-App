import {Router} from "express"
import { updateClient,logoutClient, registerClient,refreshAccessToken, loginClient, getOneClientByID } from "../../controllers/Client/Client.js"
import {verifyJWTClient} from "../../middlewares/Auth.js"
import { upload } from "../../middlewares/Multer.js";

const  router = Router();

router.route("/registerClient").post(registerClient)

router.route("/cllogin").post(loginClient)
router.route("/clupdate").post(updateClient)
router.route("/getOneClientByID").get(getOneClientByID)

//secured routes

router.route("/logout").post(logoutClient)
router.route("/refresh-token").post(refreshAccessToken)

export default router