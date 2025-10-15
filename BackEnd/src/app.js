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
