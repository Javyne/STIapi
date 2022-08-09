-- AlterTable
ALTER TABLE `Orden` MODIFY `aprobado` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `reparado` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `cobrado` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `tecnico` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Stock` (
    `stock_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_id` INTEGER NOT NULL,
    `cantidad_ingreso` INTEGER NOT NULL,
    `cantidad_baja` INTEGER NOT NULL,

    PRIMARY KEY (`stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,

    UNIQUE INDEX `Item_nombre_key`(`nombre`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`item_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
