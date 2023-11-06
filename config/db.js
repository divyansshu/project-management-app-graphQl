import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("mongodb successfully connected");
});

export default connectDB

