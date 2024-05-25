import express from "express";
import { getAllMarketPlaceItems } from "../../controllers/Labour/Marketplace.js";

const router = express.Router();

router.get("/marketplace", getAllMarketPlaceItems);


export default router;
