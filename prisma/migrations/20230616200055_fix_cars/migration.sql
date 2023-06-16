/*
  Warnings:

  - You are about to alter the column `year` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(4)`.
  - You are about to alter the column `price` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `Real` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "km" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "year" SET DATA TYPE VARCHAR(4),
ALTER COLUMN "price" SET DATA TYPE VARCHAR(20);
