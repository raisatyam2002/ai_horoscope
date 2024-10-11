/*
  Warnings:

  - You are about to drop the column `DateOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `PlaceOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `TimeOfBirth` on the `User` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "DateOfBirth",
DROP COLUMN "FirstName",
DROP COLUMN "Gender",
DROP COLUMN "LastName",
DROP COLUMN "PlaceOfBirth",
DROP COLUMN "TimeOfBirth",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "placeOfBirth" TEXT NOT NULL,
ADD COLUMN     "timeOfBirth" TIMESTAMP(3) NOT NULL;
