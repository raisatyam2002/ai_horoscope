"use server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export default async function getUserDetailsFromDb(userId: string) {
  const userData = db.user.findFirst({
    where: {
      id: Number(userId),
    },
  });
  return userData;
}
