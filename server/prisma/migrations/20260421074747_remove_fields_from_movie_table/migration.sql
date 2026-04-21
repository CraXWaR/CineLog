/*
  Warnings:

  - You are about to drop the column `genres` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `poster` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "genres",
DROP COLUMN "poster",
DROP COLUMN "title",
DROP COLUMN "year";
