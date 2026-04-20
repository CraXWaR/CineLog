/*
  Warnings:

  - You are about to drop the column `genre` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "genre",
ADD COLUMN     "genres" TEXT[];
