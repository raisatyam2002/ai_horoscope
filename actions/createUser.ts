"use server";
import { Gender, PrismaClient } from "@prisma/client";
import { userTypes } from "../types/userTypes";
import jwt from "jsonwebtoken";
const db = new PrismaClient();
export default async function createUser(data: userTypes) {
  try {
    console.log("date ", data.dateObj);
    console.log("time ", data.timeOfBirth);
    console.log(new Date());

    const user = await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: new Date(data.dateObj),
        placeOfBirth: data.placeOfBirth,
        timeOfBirth: data.timeOfBirth,
        email: data.email,
        gender: data.gender || Gender.Male,
      },
    });

    if (process.env.jwt) {
      const token = jwt.sign({ userId: user.id }, process.env.jwt);
      console.log("token ", token);
      return {
        success: true,
        message: "User created successfully",
        token: token,
      };
    }
    return {
      success: false,
      message: "error while registering user",
    };
  } catch (error: any) {
    console.log("error ", error);
    return {
      success: false,
      message: "Error creating user",
      error: error.message, // Include error message if needed
    };
  }
}
