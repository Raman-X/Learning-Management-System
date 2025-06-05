import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("You must provide Mongodb connection string");
}

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("database already connected");
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Error connecting ... ");
  }
};

export default dbConnect;
