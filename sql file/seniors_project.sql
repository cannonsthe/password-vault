-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 05:53 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seniors_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_name` varchar(36) NOT NULL,
  `product_price` int(9) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `total_price` varchar(36) NOT NULL,
  `product_code` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `creditcard`
--

CREATE TABLE `creditcard` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cardnumber` varchar(16) NOT NULL,
  `cvv` int(3) NOT NULL,
  `expirydate` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pmode` varchar(100) NOT NULL,
  `products` varchar(255) NOT NULL,
  `amount_paid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `phone`, `address`, `pmode`, `products`, `amount_paid`) VALUES
(1, 'john', 'john@gmail.com', '98765432', '182 John Street Blk 42 #03-93', 'cards', 'Bedrail(1), Blood Pressure Monitor(1), Cane(1), Crutches(1), Grab Bar(2), Thermometer(1)', '240'),
(2, 'jack', 'jack@gmail.com', '12345678', '123 Jack Street Blk 123 #02-13', 'card', '', '0'),
(3, 'jack', 'jack@gmail.com', '12345678', '123 jack street', 'card', 'Bedrail(1), Crutches(2)', '110'),
(4, 'emil', 'emil@gmail.com', '12345678', '123 emil street', 'Card', 'Blood Pressure Monitor(1)', '40');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(50) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `product_price`, `product_image`, `product_code`) VALUES
(1, 'Bedrail', '50', 'images/bed-rail.jpg', 'p1000'),
(2, 'Blood Pressure Monitor', '40', 'images/bpmonitor.jpg', 'p1001'),
(3, 'Cane', '30', 'images/cane.jpg', 'p1002'),
(4, 'Crutches', '30', 'images/crutches.jpg', 'p1003'),
(5, 'Grab Bar', '40', 'images/grab-bar.jpg', 'p1004'),
(6, 'Thermometer', '10', 'images/thermometer.jpg', 'p1005');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `roles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `email`, `username`, `password`, `roles`) VALUES
(1, 'Testupdate12@gmail.com', 'Testupdateuser2', '$2b$10$TypSVhla4jpwnzqC/P.FoOX.FtaerRNN4o3m/LBYFJ6kE6Whz3wYa', ''),
(12, 'Marcusiscool213@tot.com', 'marcusis123', '$2b$10$hnMuKyINEbNEiB6KLjRTwu9vwvI6PHbpb5pRZcjQv6XDiPDaSn8ru', ''),
(13, 'ngjunyew@yahoo.com', 'marcus2', '$2b$10$kXfYgFp8NAW58hNYCw4LO.tSDC9NT1lA.2JwIGqHEZgtV5b29f0Ru', ''),
(14, 'fella1@hotmail.com', 'Fella1', '$2b$10$TKi0O5XqcI0ukOJ923GKdOASoNxV3S.hPUvt2oWbdCM1sghD0T2RC', ''),
(15, 'quadrolift@gmail.com', 'marcus4', '$2b$10$Zy3nWYy7g3okfNb7vuxfSu5AxkymWRZgEUebgiYNgSuKi.Rt0sKKW', '');

-- --------------------------------------------------------

--
-- Table structure for table `vault`
--

CREATE TABLE `vault` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vault`
--

INSERT INTO `vault` (`id`, `user_id`, `service`, `username`, `password`) VALUES
(1, 12, 'Twitter', 'twittertest', 'Apple123'),
(2, 13, 'Gmail', 'willyasdwas', 'Apple123'),
(3, 13, 'Others', 'willyasdwasawdas', 'Apple123'),
(4, 13, 'Singpass', 'marcus123', 'i=)#No74@kC7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creditcard`
--
ALTER TABLE `creditcard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email_index` (`email`),
  ADD UNIQUE KEY `username_index` (`username`);

--
-- Indexes for table `vault`
--
ALTER TABLE `vault`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `creditcard`
--
ALTER TABLE `creditcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `vault`
--
ALTER TABLE `vault`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vault`
--
ALTER TABLE `vault`
  ADD CONSTRAINT `vault_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
