-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2023 at 06:00 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scanner`
--

-- --------------------------------------------------------

--
-- Table structure for table `spam_words`
--

CREATE TABLE `spam_words` (
  `id` int(11) NOT NULL,
  `word` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spam_words`
--

INSERT INTO `spam_words` (`id`, `word`, `created_at`) VALUES
(1, 'Win', '2023-01-31 17:26:00'),
(2, ' GIft', '2023-01-31 17:26:00'),
(3, 'Free', '2023-01-31 17:27:35'),
(4, ' Suprise', '2023-01-31 17:27:35'),
(5, 'bet', '2023-01-31 17:27:35'),
(6, 'free', '2023-02-02 16:42:00'),
(7, 'win', '2023-02-02 16:42:20'),
(8, 'gift', '2023-02-02 16:42:20'),
(9, 'chance', '2023-02-02 16:42:20'),
(10, 'luck', '2023-02-02 16:42:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `role` varchar(25) NOT NULL DEFAULT 'Assistant',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `role`, `created_at`) VALUES
(1, 'Admin', 'admin@test.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'Admin', '2022-12-23 17:18:28'),
(2, 'Test Asst', 'assistant@test.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'Assistant', '2022-12-24 20:45:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `spam_words`
--
ALTER TABLE `spam_words`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `spam_words`
--
ALTER TABLE `spam_words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
