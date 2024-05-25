import mongoose,{Schema} from "mongoose";

const reviewSchema = new Schema(
    {
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ClientInfo',
            required: true
        },
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        reviewDesc: {
            type: String,
            required: true
        },
        datetime: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Number,
            default: 0
        },
        assignmentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
            required: true,
        },
        charges: {
            type: Number,
            required: true
        }
    },{timestamps: true}
);

export const    Review = mongoose.model("Review",reviewSchema)
  