import mongoose,{Schema} from "mongoose";

const reqVerifySchema = new Schema(
    {
        lsp_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        reason: {
            type: String
        }
    },{timestamps:true}
)

export const ReqVerify = mongoose.model("ReqVerify",reqVerifySchema);