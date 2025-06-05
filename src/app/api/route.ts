import dbConnect from "@/database/connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  return NextResponse.json({
    message: "you hit api route",
  });
}
