-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.7.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for gg
CREATE DATABASE IF NOT EXISTS `gg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `gg`;

-- Dumping structure for table gg.complaints
CREATE TABLE IF NOT EXISTS `complaints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenant_id` int(11) DEFAULT NULL,
  `pg_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `category` enum('Food','Water','Wi-Fi','Electricity','Other') DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `status` enum('pending','in-progress','resolved') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `tenant_id` (`tenant_id`) USING BTREE,
  CONSTRAINT `complaints_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.complaints: ~3 rows (approximately)
INSERT INTO `complaints` (`id`, `tenant_id`, `pg_id`, `room_id`, `category`, `description`, `image`, `status`, `created_at`, `updated_at`) VALUES
	(1, 39, 22, 40, 'Wi-Fi', 'My ac is not working', '', 'resolved', '2025-05-14 18:10:10', '2025-05-19 15:24:55'),
	(2, 39, 22, 40, 'Wi-Fi', 'Your food is getting worse day by day', '', 'resolved', '2025-05-14 19:45:50', '2025-05-15 18:17:46'),
	(3, 39, 22, 40, 'Water', 'clean room problem', '', 'resolved', '2025-05-14 19:57:01', '2025-05-19 15:24:25');

-- Dumping structure for table gg.pg_owners
CREATE TABLE IF NOT EXISTS `pg_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `profile` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.pg_owners: ~2 rows (approximately)
INSERT INTO `pg_owners` (`id`, `name`, `email`, `password`, `phone`, `profile`, `address`, `state`, `district`, `pincode`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
	(30, 'karan', 'karan@gmail.com', '$2b$10$k9e3iMyrVgDYiz3s3NV/gu1kUTjnYajir0sQDRDy.0GEqy9EHNe26', '7682376782', NULL, '272, jh', 1, 3, 433434, '2025-04-07 06:05:03', '2025-05-04 06:17:55', NULL, NULL, 1),
	(35, 'gaurav rawat', 'gaurav@gmail.com', '$2b$10$sfEIO/0XC2Tgay2Zgqte5ufSrjHdWsdG9Mn4dQDw2UEOPvQaNX72W', '8723786238', '20251746123954418418155.png', 'shakti khand 1', 1, 10, 201014, '2025-05-01 18:25:54', '2025-05-03 17:41:00', NULL, NULL, 1);

-- Dumping structure for table gg.pg_properties
CREATE TABLE IF NOT EXISTS `pg_properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `total_rooms` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_owner_property_name` (`owner_id`,`name`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `pg_properties_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `pg_owners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.pg_properties: ~3 rows (approximately)
INSERT INTO `pg_properties` (`id`, `owner_id`, `name`, `location`, `state`, `district`, `pincode`, `total_rooms`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
	(15, 35, 'Royal pg', 'gurugram sector 69', 2, 31, 201011, 300, 1, '2025-04-07 16:40:47', '2025-05-03 18:24:25', NULL, NULL),
	(22, 30, 'sn pg', 'plot 28, ekta hospital', 8, 201, 201014, 200, 1, '2025-05-05 14:43:59', '2025-05-06 18:24:58', NULL, NULL),
	(23, 30, 'kanak pg', 'ekta hospital', 8, 201, 201014, 300, 1, '2025-05-05 17:26:49', '2025-05-11 03:34:13', NULL, NULL);

-- Dumping structure for table gg.plan
CREATE TABLE IF NOT EXISTS `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(20) DEFAULT NULL,
  `total_property` int(11) DEFAULT NULL,
  `total_rooms` int(11) DEFAULT NULL,
  `total_tenant` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plan_name` (`plan_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.plan: ~4 rows (approximately)
INSERT INTO `plan` (`id`, `plan_name`, `total_property`, `total_rooms`, `total_tenant`, `price`) VALUES
	(1, 'Basic', 1, 100, 150, NULL),
	(2, 'Silver', 2, 300, 500, NULL),
	(3, 'Gold', 4, 500, 1000, NULL),
	(4, 'Diamond', 6, 1000, 2000, NULL);

-- Dumping structure for table gg.rent_transactions
CREATE TABLE IF NOT EXISTS `rent_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenant_id` int(11) DEFAULT NULL,
  `pg_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payment_method` enum('UPI','Bank Transfer','Card','Wallet','Cash') DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `status` enum('Success','Pending','Failed') DEFAULT 'Pending',
  `payment_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `tenant_id` (`tenant_id`),
  CONSTRAINT `rent_transactions_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.rent_transactions: ~0 rows (approximately)

-- Dumping structure for table gg.rooms
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `property_id` int(11) DEFAULT NULL,
  `room_number` varchar(10) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `unique_room_per_property` (`property_id`,`room_number`),
  KEY `property_id` (`property_id`) USING BTREE,
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `pg_properties` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.rooms: ~4 rows (approximately)
INSERT INTO `rooms` (`id`, `property_id`, `room_number`, `type`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
	(40, 22, '301', 3, 1, '2025-05-05 14:48:08', NULL, NULL, NULL),
	(41, 22, '300', 3, 1, '2025-05-05 14:48:25', NULL, NULL, NULL),
	(42, 22, '444', 2, 1, '2025-05-05 14:50:14', NULL, NULL, NULL),
	(43, 23, '101', 2, 1, '2025-05-07 15:12:28', NULL, NULL, NULL);

-- Dumping structure for table gg.super_admin
CREATE TABLE IF NOT EXISTS `super_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.super_admin: ~1 rows (approximately)
INSERT INTO `super_admin` (`id`, `name`, `email`, `password`, `phone`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
	(1, 'karan', 'karan@gmail.com', 'karan123', '8368145192', '2025-04-05 05:59:07', NULL, NULL, NULL);

-- Dumping structure for table gg.tenants
CREATE TABLE IF NOT EXISTS `tenants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pg_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `aadhar` varchar(100) DEFAULT NULL,
  `pan` varchar(100) DEFAULT NULL,
  `parent_contact` varchar(10) DEFAULT NULL,
  `emergency_contact` varchar(10) DEFAULT NULL,
  `check_in_date` date DEFAULT NULL,
  `checkout_date` date DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `profile_photo` varchar(100) DEFAULT NULL,
  `rent_status` enum('paid','pending') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `gender` enum('male','female','other') DEFAULT NULL,
  `occupation` varchar(70) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `pincode` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `email` (`email`),
  KEY `pg_id` (`pg_id`),
  KEY `room_id` (`room_id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `tenants_ibfk_1` FOREIGN KEY (`pg_id`) REFERENCES `pg_properties` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tenants_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tenants_ibfk_3` FOREIGN KEY (`owner_id`) REFERENCES `pg_owners` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table gg.tenants: ~3 rows (approximately)
INSERT INTO `tenants` (`id`, `pg_id`, `room_id`, `owner_id`, `name`, `phone`, `email`, `password`, `aadhar`, `pan`, `parent_contact`, `emergency_contact`, `check_in_date`, `checkout_date`, `status`, `profile_photo`, `rent_status`, `created_at`, `gender`, `occupation`, `dob`, `district`, `state`, `address`, `pincode`) VALUES
	(38, 23, 43, 30, 'kiran basnal', '9320393298', 'kiran@gmail.com', 'K@ran123', NULL, NULL, '0329832983', '8739328983', '2025-04-30', NULL, 1, NULL, 'pending', '2025-05-08 18:50:14', 'female', 'Developer', '2025-05-06', 92, 4, 'dsdhjgdshjgds', 201014),
	(39, 22, 40, 30, 'karan rawat', '3887387237', 'karan@gmail.com', '$2b$10$k9e3iMyrVgDYiz3s3NV/gu1kUTjnYajir0sQDRDy.0GEqy9EHNe26', NULL, NULL, '8438743874', '8378932787', '2025-04-29', NULL, 1, NULL, 'paid', '2025-05-09 16:08:52', 'male', 'software developer', '2005-01-02', 161, 6, '322- b , shakti khand 1', 201014),
	(40, 23, 43, 30, 'deepak singh', '0932839832', 'deepak@gmail.com', 'D@pakk123', '20251746807732477477474.jpeg', '20251746807732477477854.jpeg', '9288917282', '3239827382', '2025-05-13', NULL, 1, '20251746807732477477752.jpeg', 'paid', '2025-05-09 16:22:12', 'male', 'dot net developer', '2025-05-14', 99, 4, 'noida sector 4', 201012);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
