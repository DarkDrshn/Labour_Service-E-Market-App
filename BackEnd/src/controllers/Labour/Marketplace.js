// import { MarketPlace } from "../../models/Labour/Marketplace.js";
import { asyncHandler} from "../../utils/AsyncHandler.js";
import { Apierror } from "../../utils/ApiError.js";
import { Apiresponse } from "../../utils/ApiResponse.js";
import { LabourInfo } from "../../models/Labour/LabourInfo.js";

export const getAllMarketPlaceItems = asyncHandler(async (req, res, next) => {
    try {
      const items = await LabourInfo.find().select(
       { 
            firstName: 1,
            lastName: 1,
            gender: 1,
            age: 1,
            experience: 1,
            location: 1,
            maxEducation: 1,
            phone: 1,
            category: 1,
            profileImage:1,
            certificate:1
        }
      );
    return res.status(201).json(
        new Apiresponse(200,items,"marketplace is visible")
    )
    } catch (error) {
        console.error('Error fetching marketplace items:', error);
      next(new Apierror(500, "Failed to fetch marketplace items", error));
    }
  });