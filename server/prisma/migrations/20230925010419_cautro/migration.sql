-- DropIndex
DROP INDEX `Analysis_animalId_fkey` ON `analysis`;

-- AddForeignKey
ALTER TABLE `Analysis` ADD CONSTRAINT `Analysis_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
