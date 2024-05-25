import mongoose, { Schema } from "mongoose";

const assignmentSchema = new Schema(
    {
        category: {
          type: String,
          required: true,
        },
        serialNo: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ["Pending", "InProgress", "Completed", "Cancelled"],
          default: "InProgress",
        },
        address:{
          type:String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        clientId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ClientInfo",
          required: true,
        },
        labourId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LabourInfo",
          required: true,
        },
        reviewId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Review",
        },
        datetime: {
          type: Date,
          default: Date.now,
        },
        datetimeNext: {
          type: Date,
          default: null,
        },
        workPhoto:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "RequestAssigment"
        }
    },{ timestamps: true }
);

export const Assignment = mongoose.model("Assignment", assignmentSchema);
