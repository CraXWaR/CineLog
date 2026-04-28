/*
  Warnings:

  - A unique constraint covering the columns `[user_id,from_id,type]` on the table `notifications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "notifications_user_id_from_id_type_key" ON "notifications"("user_id", "from_id", "type");
