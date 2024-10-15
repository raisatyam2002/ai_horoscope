"use server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export default async function getUserDetailsFromDb(userId: string) {
  const userData = await db.user.findFirst({
    where: {
      id: Number(userId),
    },
    select: {
      id: false,
      firstName: true,
      lastName: true,
      dateOfBirth: true,
      placeOfBirth: true,
      timeOfBirth: true,
      email: false,
    },
  });
  return {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    dateObj: userData?.dateOfBirth,
    placeOfBirth: userData?.placeOfBirth,
    timeOfBirth: userData?.timeOfBirth,
  };
}
