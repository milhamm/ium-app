-- AlterTable
ALTER TABLE `Store` ADD COLUMN `close_time` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `open_time` INTEGER NOT NULL DEFAULT 0;
