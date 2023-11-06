import mongoose from "mongoose";
require('dotenv').config()

const connectDB = mongoose.connect(Process.env.MONGODB_URI).then(() => {
    console.log("mongodb successfully connected");
});

export default connectDB

