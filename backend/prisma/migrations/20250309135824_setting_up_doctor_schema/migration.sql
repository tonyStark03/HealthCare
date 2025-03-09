/*
  Warnings:

  - Added the required column `experience` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fees` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "experience" INTEGER NOT NULL,
ADD COLUMN     "fees" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "reviews" TEXT[];
