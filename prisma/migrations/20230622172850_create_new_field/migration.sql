/*
  Warnings:

  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" VARCHAR(20) NOT NULL,
ADD COLUMN     "city" VARCHAR(20) NOT NULL,
ADD COLUMN     "state" VARCHAR(4) NOT NULL;
