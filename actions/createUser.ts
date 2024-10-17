"use server";
import { Gender } from "@prisma/client";
import db from "../prisma/index";
import { userTypes } from "../types/userTypes";
import jwt from "jsonwebtoken";

export default async function createUser(data: userTypes) {
  try {
    console.log("date ", data.dateObj);
    console.log("time ", data.timeOfBirth);
    console.log(new Date());

    const user = await db.user.create({
      data: {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        dateOfBirth: data.dateObj || new Date(),
        placeOfBirth: data.placeOfBirth || "",
        timeOfBirth: data.timeOfBirth || "",
        email: data.email || " ",
        gender: data.gender || Gender.Male,
      },
    });

    if (process.env.jwt) {
      const token = jwt.sign({ userId: user.id }, process.env.jwt, {
        expiresIn: "30m",
      });
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
