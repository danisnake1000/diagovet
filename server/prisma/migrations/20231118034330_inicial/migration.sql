-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Animal_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Analysis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hematologia` VARCHAR(191) NOT NULL,
    `bioquimica` VARCHAR(191) NOT NULL,
    `AnalisisDefluidosCorporales` VARCHAR(191) NOT NULL,
    `parasitologia` VARCHAR(191) NOT NULL,
    `endocrinologia` VARCHAR(191) NOT NULL,
    `serologia` VARCHAR(191) NOT NULL,
    `estudiosMoleculares` VARCHAR(191) NOT NULL,
    `citopatologia` VARCHAR(191) NOT NULL,
    `bacteriologia` VARCHAR(191) NOT NULL,
    `micologia` VARCHAR(191) NOT NULL,
    `toxicologia` VARCHAR(191) NOT NULL,
    `rina` VARCHAR(191) NOT NULL,
    `otros` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `animalId` INTEGER NOT NULL,

    UNIQUE INDEX `Analysis_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Analysis` ADD CONSTRAINT `Analysis_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
