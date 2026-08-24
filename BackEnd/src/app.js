import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use((req, res, next) => {
    
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(
    cors({
        origin:true,
        credentials:true
    }),
)
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import clientRouter from "./routes/Client/Client.js"
app.use("/api/v1/client",clientRouter)  

import labourRouter from "./routes/Labour/Labour.js"
app.use("/api/v1/labour",labourRouter)

import clientloginRouter from "./routes/Client/Client.js"
app.use("/api/v1/clientlogin", clientloginRouter);

import labourloginRouter from "./routes/Labour/Labour.js"
app.use("/api/v1/labourlogin", labourloginRouter);

import getAssignment from "./routes/Labour/Assignment.js"
app.use("/api/v1/assignmentlaborer", getAssignment);

import clientlogOutRouter from "./routes/Client/Client.js"
app.use("/api/v1/clientlogOut",clientlogOutRouter)

import laborerlogOutRouter from "./routes/Labour/Labour.js"
app.use("/api/v1/laborerLogOut",laborerlogOutRouter)

// import normalLoginRouter from "./routes/Labour/Labour.js"
// app.use("/api/v1/login",normalLoginRouter)

import marketplaceRouter from "./routes/Labour/Marketplace.js"
app.use("/api/v1/marketplace",marketplaceRouter)

import fetchlabourRouter from "./routes/Labour/Labour.js"
app.use("/api/v1//labour/:labourId",fetchlabourRouter)

import bookingRouter from "./routes/Client/booking.js"
app.use("/api/v1/bookinglaborer",bookingRouter)

import adminRouter from "./routes/Admin/recent.js"
app.use("/api/v1/admin",adminRouter)



export default app
