import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const clientInfoSchema = new Schema(
    {
        firstName: {
          type: String,
          require: true,
        },
        lastName: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
          unique: true,
        },
        password: {
          type: String,
          require: true,
        },
        phone: {
          type: String,
          require: [true, "Password is required"],
        },
        address: {
          type: String,
          require: true,
        },
        city: {
          type: String,
          require: true,
        },
        age: {
          type: String,
          require: true,
        },
        zipcode: {
          type: String,
          require: true,
        },
        // imageUrl:{
        //   type:String,
        //   require:true
        // }
    },{ timestamps: true }
);

clientInfoSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
clientInfoSchema.methods.isPasswordcorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

clientInfoSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
clientInfoSchema.methods.generateRefreshToken = function () {
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

export const ClientInfo = mongoose.model("ClientInfo", clientInfoSchema);
