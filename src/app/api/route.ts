import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  // await User.create({
  //   email: "john@gmail.com",
  //   username: "john",
  //   googleId: "12345",
  //   profileImage: "thisisimage",
  // });
  return NextResponse.json({
    message: "you hit api route",
  });
}
