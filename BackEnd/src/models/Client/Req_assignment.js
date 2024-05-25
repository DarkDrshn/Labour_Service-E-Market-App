import mongoose, { Schema } from "mongoose";

const requestAssignmentSchema = new mongoose.Schema(
    {
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
        Clientphone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ClientInfo",
            // required: true,
        },
        Laborerphone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LabourInfo",
            // required: true,
        },
        clientName : {
            type:String,
            required:true
        },
        address : {
            type:String,
            required:true
        },
        // category: {
        //     type: String,
        //     required: true,
        // },
        status :{
            type:String,
            default:"Pending"
        },
        BookingFor: {
            type: String,
            required: true, 
        },
        description: {
            type: String,
            required: true,
        },
        datetime: {
            type: Date,
            default: Date.now,
        },
        // document:{
        //     type:String,
        //     required:true
        // }
        workPhoto:{
            type:String,
            required:true
        }
    },{timestamps:true}
);

export const RequestAssigment = mongoose.model("RequestAssigment",requestAssignmentSchema)
