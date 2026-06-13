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
Commit at 2025-01-13T23:21:02.658684
Commit at 2025-04-17T15:17:47.667648
Commit at 2025-07-19T14:18:20.676478
Commit at 2026-02-08T21:33:43.742123
Commit at 2025-11-25T07:31:30.758612
Commit at 2026-06-21T17:38:56.768049
Commit at 2026-06-01T04:11:49.776562
Commit at 2026-06-14T10:56:53.787062
Commit at 2026-02-21T14:08:57.796121
Commit at 2026-08-15T22:46:04.806173
Commit at 2025-12-23T04:19:16.814783
Commit at 2025-10-18T05:29:53.824515
Commit at 2026-02-24T20:16:05.833387
Commit at 2026-06-26T11:51:47.842585
Commit at 2026-04-16T21:39:24.852586
Commit at 2025-09-04T23:44:06.862180
Commit at 2026-01-10T17:07:29.871546
Commit at 2026-08-20T22:27:44.879787
Commit at 2025-10-05T12:11:00.890244
Commit at 2026-08-22T01:38:39.899796
Commit at 2026-05-10T06:13:38.909228
Commit at 2026-01-20T11:37:19.918201
Commit at 2026-02-03T00:14:35.928351
Commit at 2026-02-08T06:13:50.936807
Commit at 2026-08-17T20:53:05.946965
Commit at 2025-11-03T13:43:34.955770
Commit at 2026-08-24T18:35:40.965340
Commit at 2025-09-18T05:51:07.975951
Commit at 2026-06-13T21:21:35.985351
Commit at 2026-02-15T22:25:33.993759
Commit at 2026-05-11T02:11:22.003228
Commit at 2026-05-31T00:30:03.011814
Commit at 2025-11-26T16:54:14.022638
Commit at 2026-02-19T23:27:21.032650
Commit at 2026-03-20T06:02:44.041523
Commit at 2025-10-25T21:31:29.050397
Commit at 2025-11-20T12:13:21.058450
Commit at 2025-09-23T11:46:53.068073
Commit at 2025-12-12T13:03:42.078174
Commit at 2026-01-29T10:37:18.087997
Commit at 2026-03-21T09:20:29.096650
Commit at 2025-12-07T13:13:31.105511
Commit at 2025-10-15T09:12:23.114578
Commit at 2025-08-26T07:17:24.123341
Commit at 2026-02-13T12:08:32.133686
Commit at 2026-01-19T19:36:42.143197
Commit at 2026-05-10T16:09:34.151497
Commit at 2026-02-25T18:20:37.159866
Commit at 2026-07-16T12:59:17.169609
Commit at 2026-06-09T01:51:51.179971
Commit at 2026-05-13T05:12:28.188562
Commit at 2026-05-25T12:24:56.198607
Commit at 2026-05-13T07:27:07.207382
Commit at 2026-02-06T23:24:17.218435
Commit at 2025-12-13T09:20:21.227925
Commit at 2026-01-21T01:14:27.237132
Commit at 2026-02-21T17:54:14.246485
Commit at 2026-02-08T00:47:05.255956
Commit at 2026-07-06T09:30:20.264781
Commit at 2026-07-08T10:13:24.274692
Commit at 2026-07-06T08:25:09.284152
Commit at 2025-09-07T16:07:43.293179
Commit at 2025-11-26T12:58:39.302614
Commit at 2026-04-23T05:01:15.311656
Commit at 2026-03-25T02:42:21.321988
Commit at 2026-02-10T16:10:38.330325
Commit at 2026-06-21T15:13:14.339150
Commit at 2026-06-13T20:47:42.348180
