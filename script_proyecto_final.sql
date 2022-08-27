CREATE TABLE `final_proyect`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `final_proyect`.`usuarios` 
ADD COLUMN `createdAt` DATETIME NULL AFTER `city`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`;

CREATE TABLE `final_proyect`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT(144) NOT NULL,
  `receiverId` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `final_proyect`.`messages` 
CHANGE COLUMN `receiverId` `receiverId` INT(255) NOT NULL ;


ALTER TABLE `final_proyect`.`messages` 
ADD COLUMN `senderId` INT NOT NULL AFTER `receiverId`,
ADD INDEX `receiverId_idx` (`receiverId` ASC) VISIBLE;
;
ALTER TABLE `final_proyect`.`messages` 
ADD CONSTRAINT `receiverId`
  FOREIGN KEY (`receiverId`)
  REFERENCES `final_proyect`.`usuarios` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `final_proyect`.`messages` 
ADD COLUMN `senderId` INT NOT NULL AFTER `receiverId`,
ADD INDEX `receiverId_idx` (`receiverId` ASC) VISIBLE;
;
ALTER TABLE `final_proyect`.`messages` 
ADD CONSTRAINT `receiverId`
  FOREIGN KEY (`receiverId`)
  REFERENCES `final_proyect`.`usuarios` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `final_proyect`.`messages` 
ADD INDEX `senderId_idx` (`senderId` ASC) VISIBLE;
;
ALTER TABLE `final_proyect`.`messages` 
ADD CONSTRAINT `senderId`
  FOREIGN KEY (`senderId`)
  REFERENCES `final_proyect`.`usuarios` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `final_proyect`.`messages` 
ADD COLUMN `createdAt` DATETIME NULL AFTER `senderId`,
ADD COLUMN `updateAt` DATETIME NULL AFTER `createdAt`;