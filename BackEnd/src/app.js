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
Commit at 2024-10-27T19:06:16.871889
Commit at 2024-10-23T20:28:11.006452
Commit at 2025-06-07T12:17:37.019950
Commit at 2025-03-10T18:50:47.031629
Commit at 2025-06-04T19:44:09.042596
Commit at 2025-04-10T03:32:01.053228
Commit at 2025-01-19T14:36:48.063690
Commit at 2024-08-26T17:45:19.073433
Commit at 2024-12-17T09:54:12.085525
Commit at 2025-05-16T08:52:57.095605
Commit at 2025-04-20T19:38:55.105530
Commit at 2024-11-25T12:13:34.114662
Commit at 2024-09-04T02:53:00.123387
Commit at 2025-04-15T11:17:18.133736
Commit at 2024-11-17T05:01:21.143711
Commit at 2024-12-13T02:00:17.153703
Commit at 2024-11-12T15:08:22.164172
Commit at 2025-01-07T23:55:09.173736
Commit at 2025-04-25T05:35:36.185278
Commit at 2024-12-02T09:53:11.195083
Commit at 2025-03-14T17:32:59.205308
Commit at 2025-04-12T08:07:19.215834
Commit at 2025-08-06T07:10:54.225487
Commit at 2025-03-29T04:27:45.234953
Commit at 2024-12-20T05:49:47.244023
Commit at 2025-05-06T08:58:25.254555
Commit at 2025-02-27T22:05:58.263329
Commit at 2025-07-28T05:21:53.273587
Commit at 2024-11-12T09:53:12.283470
Commit at 2025-02-13T08:21:24.292885
Commit at 2025-04-04T01:52:32.301805
Commit at 2025-07-27T19:25:11.311790
Commit at 2025-02-03T13:38:12.320275
