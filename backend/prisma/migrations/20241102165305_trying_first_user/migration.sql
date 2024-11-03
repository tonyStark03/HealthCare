/*
  Warnings:

  - You are about to drop the column `userID` on the `Doctor` table. All the data in the column will be lost.
  - Added the required column `city` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `field` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_userID_fkey";

-- DropIndex
DROP INDEX "Doctor_userID_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "userID",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "field" TEXT NOT NULL;
