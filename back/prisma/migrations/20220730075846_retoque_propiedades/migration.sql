/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Usuario_user_name_key` ON `Usuario`(`user_name`);
