/*
  Warnings:

  - The `genre` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `rating` on the `user_watched` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,movie_id]` on the table `user_watched` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "genre",
ADD COLUMN     "genre" TEXT[];

-- AlterTable
ALTER TABLE "user_watched" DROP COLUMN "rating";

-- CreateTable
CREATE TABLE "user_watch_later" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_watch_later_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_watch_later_user_id_movie_id_key" ON "user_watch_later"("user_id", "movie_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_watched_user_id_movie_id_key" ON "user_watched"("user_id", "movie_id");

-- AddForeignKey
ALTER TABLE "user_watch_later" ADD CONSTRAINT "user_watch_later_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_watch_later" ADD CONSTRAINT "user_watch_later_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
