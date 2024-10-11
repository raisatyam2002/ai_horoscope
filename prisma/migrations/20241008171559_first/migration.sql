-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "DateOfBirth" TIMESTAMP(3) NOT NULL,
    "TimeOfBirth" TIMESTAMP(3) NOT NULL,
    "Gender" "Gender" NOT NULL,
    "PlaceOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
