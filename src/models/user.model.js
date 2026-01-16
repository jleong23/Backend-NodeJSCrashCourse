import mongoose, { Schema } from "mongoose"; // Schema means structure
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true, // trimming white spaces in string ( matilda mong: will become matildamong)
      minLength: 1,
      maxLength: 30,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true, // trimming white spaces in string ( matilda mong: will become matildamong)
      minLength: 1,
      maxLength: 30,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema); // very important syntax
