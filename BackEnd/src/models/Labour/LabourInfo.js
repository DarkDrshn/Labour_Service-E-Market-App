import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";``
import bcrypt from "bcrypt";

const labourInfoSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: [true, "Password is required"],
        },
        aadharNo: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: String  ,
            required: true,
        },
        maxEducation: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        profileImage : {
          type:String,
          required:true
        },
        certificate : {
          type:String,
          // required:true
        }
  },{ timestamps: true }
);

labourInfoSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
labourInfoSchema.methods.isPasswordcorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

labourInfoSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      // username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
labourInfoSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const LabourInfo = mongoose.model("LabourInfo", labourInfoSchema);
