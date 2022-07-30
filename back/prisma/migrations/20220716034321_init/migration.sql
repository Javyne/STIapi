-- CreateTable
CREATE TABLE `Cliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `obs` TEXT NOT NULL,

    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `tecnico` BOOLEAN NOT NULL,
    `salt` TEXT NOT NULL,
    `obs` TEXT NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marca` (
    `marca` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`marca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipo_equipo` (
    `tipo_equipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tipo_equipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipo` (
    `equipo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `tipo_equipo` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `serie` VARCHAR(191) NOT NULL,
    `obs` TEXT NOT NULL,

    PRIMARY KEY (`equipo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orden` (
    `orden_id` INTEGER NOT NULL AUTO_INCREMENT,
    `equipo_id` INTEGER NOT NULL,
    `tecnico_id` INTEGER NOT NULL,
    `fecha_ingreso` DATETIME(3) NOT NULL,
    `accesorios` VARCHAR(191) NOT NULL,
    `defecto` TEXT NOT NULL,
    `reparacion` TEXT NOT NULL,
    `costo` DOUBLE NOT NULL,
    `presupuesto` DOUBLE NOT NULL,
    `fecha_reparacion` DATETIME(3) NOT NULL,
    `fecha_entrega` DATETIME(3) NOT NULL,
    `aprobado` BOOLEAN NOT NULL,
    `reparado` BOOLEAN NOT NULL,
    `cobrado` BOOLEAN NOT NULL,
    `obs` TEXT NOT NULL,

    PRIMARY KEY (`orden_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`cliente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_marca_fkey` FOREIGN KEY (`marca`) REFERENCES `Marca`(`marca`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_tipo_equipo_fkey` FOREIGN KEY (`tipo_equipo`) REFERENCES `Tipo_equipo`(`tipo_equipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orden` ADD CONSTRAINT `Orden_tecnico_id_fkey` FOREIGN KEY (`tecnico_id`) REFERENCES `Usuario`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orden` ADD CONSTRAINT `Orden_equipo_id_fkey` FOREIGN KEY (`equipo_id`) REFERENCES `Equipo`(`equipo_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
