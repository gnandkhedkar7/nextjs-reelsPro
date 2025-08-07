import mongoose from "mongoose";

const MONGODB_URI = process.env.NODE_ENV;

if(!MONGODB_URI){
    throw new Error("Please define mongodb uri in env file");
}

let cached = global.mongoose;