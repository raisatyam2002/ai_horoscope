"use server";
import { Gender, PrismaClient } from "@prisma/client";
import { userTypes } from "../types/userTypes";

const db = new PrismaClient();
export default async function createUser(data: userTypes) {
  try {
    await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: new Date(),
        placeOfBirth: data.placeOfBirth,
        timeOfBirth: new Date(),
        email: data.email,
        gender: data.gender || Gender.Male,
      },
    });
    console.log(" user created");
  } catch (error) {
    console.log("error ", error);
  }
}
