-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2023 at 04:47 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `email`, `username`, `password`) VALUES
(1, 'Testupdate12@gmail.com', 'Testupdateuser2', '$2b$10$TypSVhla4jpwnzqC/P.FoOX.FtaerRNN4o3m/LBYFJ6kE6Whz3wYa'),
(12, 'Marcusiscool213@tot.com', 'marcusis123', '$2b$10$hnMuKyINEbNEiB6KLjRTwu9vwvI6PHbpb5pRZcjQv6XDiPDaSn8ru'),
(13, 'ngjunyew@yahoo.com', 'marcus2', '$2b$10$kXfYgFp8NAW58hNYCw4LO.tSDC9NT1lA.2JwIGqHEZgtV5b29f0Ru'),
(14, 'fella1@hotmail.com', 'Fella1', '$2b$10$TKi0O5XqcI0ukOJ923GKdOASoNxV3S.hPUvt2oWbdCM1sghD0T2RC'),
(15, 'quadrolift@gmail.com', 'marcus4', '$2b$10$Zy3nWYy7g3okfNb7vuxfSu5AxkymWRZgEUebgiYNgSuKi.Rt0sKKW');

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
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
