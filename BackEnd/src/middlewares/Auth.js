import { Apierror } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import {ClientInfo} from "../models/Client/ClientInfo.js"
import {LabourInfo} from "../models/Labour/LabourInfo.js"

//Client-verify
export const verifyJWTClient = asyncHandler(async (req,res,next) => {
    try {
        const token = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        console.log(token);
        if(!token){
            throw new Apierror(401,"Unauthorized request")
        }
    
        const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const client = await ClientInfo.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!client){
            throw new Apierror(401,"Invalid Access Token")
        }
    
        req.client = client;
        next()
    } catch (error) {
        throw new Apierror(401,error?.message||"Invalid access token")
    }
})

// labour verify
export const verifyJWTLabour = asyncHandler(async (req,res,next) => {
    try {
        const token = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if(!token){
            throw new Apierror(401,"Unauthorized request")
        }
    
        const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const labour = await LabourInfo.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!labour){
            throw new Apierror(401,"Invalid Access Token")
        }
    
        req.labour = labour;
        next()
    } catch (error) {
        throw new Apierror(401,error?.message||"Invalid access token")
    }
})