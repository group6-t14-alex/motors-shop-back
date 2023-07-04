/*
  Warnings:

  - You are about to drop the column `userId` on the `photos` table. All the data in the column will be lost.
  - Added the required column `carId` to the `photos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "photos" DROP CONSTRAINT "photos_userId_fkey";

-- AlterTable
ALTER TABLE "photos" DROP COLUMN "userId",
ADD COLUMN     "carId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
