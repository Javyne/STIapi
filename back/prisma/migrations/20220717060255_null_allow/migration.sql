/*
  Warnings:

  - You are about to drop the column `rol` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Cliente` MODIFY `obs` TEXT NULL;

-- AlterTable
ALTER TABLE `Equipo` MODIFY `modelo` VARCHAR(191) NULL,
    MODIFY `serie` VARCHAR(191) NULL,
    MODIFY `obs` TEXT NULL;

-- AlterTable
ALTER TABLE `Orden` MODIFY `accesorios` VARCHAR(191) NULL,
    MODIFY `reparacion` TEXT NULL,
    MODIFY `costo` DOUBLE NULL,
    MODIFY `presupuesto` DOUBLE NULL,
    MODIFY `fecha_reparacion` DATETIME(3) NULL,
    MODIFY `fecha_entrega` DATETIME(3) NULL,
    MODIFY `obs` TEXT NULL;

-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `rol`,
    ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `obs` TEXT NULL;
