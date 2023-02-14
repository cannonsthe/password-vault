-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2023 at 08:46 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mp_cart_system`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `creditcard`
--

CREATE TABLE `creditcard` (
  `id` int(11) NOT NULL,
  `cardname` varchar(255) NOT NULL,
  `cardnumber` varchar(16) NOT NULL,
  `cvv` int(3) NOT NULL,
  `expirydate` varchar(15) NOT NULL,
  `billing_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `creditcard`
--

INSERT INTO `creditcard` (`id`, `cardname`, `cardnumber`, `cvv`, `expirydate`, `billing_address`) VALUES
(1, 'w', '2', 234, '03/27', 'we'),
(2, 'Emil', '1234567812345678', 132, '03/26', 'rw'),
(3, 'e', '1234123412341234', 0, 's', 's'),
(4, 'Emily', '12121212121212', 333, '03/27', 'e'),
(6, 'bob', '1234432112344321', 123, '12/25', '123 bob street'),
(7, 'joe', '4321123443211234', 242, '12/23', 'f'),
(8, 'd', '2132321323123213', 123, '12/27', 'de'),
(9, 'sam', '1919282839397372', 321, '12/30', 'd'),
(10, 'red', '9494121203037272', 123, '12/27', 'red'),
(11, 'blue', '1234567812345678', 123, '05/25', 'blue'),
(12, 'green', '1234123456785678', 123, '04/28', 'green'),
(13, 'UGt1b0ZWNkZpUC9QekhQRFhnZ3lmUT09OjpiK0HyLFGyi56IEHDFvojl', 'Q1NyeVZjdE1LdkZa', 0, '12/25', 'black'),
(14, 'TmtsVXgvZEdHVnF5U2NhcGRxU3pnZz09OjocUKJUb1BbWMv3Tm1mNdlM', 'UVlLSzNsajZzamRR', 0, '06/28', 'pink'),
(15, 'enJUbXhLV1puVGJzS1JJNExiQ2NjZz09Ojr/e2WMYcdLGiESPTnrkhuS', 'MnEvRk9jUUhkREdX', 0, '03/27', 'em'),
(16, 'SFk0RHpFN0t6dmxSMWhnZ1VmNzBOUT09OjpH1TMvMIghkFhBKuwqNC77', 'azRTZ01nUDVoZWlN', 0, '12/28', 'white'),
(17, 'L1g1eVdLdGFqOGJISElnWmtXWVJXZz09OjphaY+wn5OpCcF81CAWBze4', 'VzhoSlRJYmZ3Wndp', 0, '02/26', 'bob'),
(18, 'VndaT1JaZHN6RGJtUUkxWWEvbFBtdz09OjoDgwP8/iCaxRpXW3Y1vd64', 'SHFPT1VZVWFYaXdi', 0, '04/28', 'emil');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `phone`, `address`, `pmode`, `products`, `amount_paid`) VALUES
(1, 'john', 'john@gmail.com', '98765432', '182 John Street Blk 42 #03-93', 'cards', 'Bedrail(1), Blood Pressure Monitor(1), Cane(1), Crutches(1), Grab Bar(2), Thermometer(1)', '240'),
(2, 'jack', 'jack@gmail.com', '12345678', '123 Jack Street Blk 123 #02-13', 'card', '', '0'),
(3, 'jack', 'jack@gmail.com', '12345678', '123 jack street', 'card', 'Bedrail(1), Crutches(2)', '110'),
(4, 'emil', 'emil@gmail.com', '12345678', '123 emil street', 'Card', 'Blood Pressure Monitor(1)', '40'),
(5, 'jack', 'jack@gmail.com', '12345678', 'jack street', 'Card', 'Crutches(1)', '30'),
(6, 'jacky', 'jacky@gmail.com', '12345678', 'jacky', 'Card', 'Crutches(1)', '30'),
(7, 'bob', 'bob@gmail.com', '12345678', 'bob', 'Card', 'Blood Pressure Monitor(1)', '40'),
(8, 'emil', 'emil@gmail.com', '12345678', 'emil', 'Card', 'Cane(1), Blood Pressure Monitor(1)', '70'),
(9, 'e', 'e@gmail.com', '12345678', 'e', 'Card', 'Thermometer(1)', '10'),
(10, 's', 's@gmail.com', '12345678', 's', 'Card', '', '0'),
(11, 'sam', 'sam@gmail.com', '12341234', 'e', 'Card', 'Bedrail(1), Cane(1)', '80'),
(12, 'bro', 'bro@gmail.com', '98764321', 'bro', 'Card', 'Blood Pressure Monitor(2)', '80'),
(13, 'bar', 'bar@gmail.com', '87654321', 'r', 'Card', 'Grab Bar(2)', '80'),
(14, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(15, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(16, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(17, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(18, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(19, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(20, 'd', 'd@gmail.com', '2', 'd', 'Card', '', '0'),
(21, 'bob', 'bob@gmail.com', '12345678', '123 bob street', 'Card', 'Blood Pressure Monitor(1)', '40'),
(22, 'bob', 'bob@gmail.com', '12345678', '987 bob street', 'Card', 'Crutches(2)', '60'),
(23, 'joe', 'joe@gmail.com', '67891234', 'joe', 'Card', 'Bedrail(2), Blood Pressure Monitor(1)', '140'),
(24, 'bobby', 'bobby@gmail.com', '98765432', 'bobby', 'Card', 'Blood Pressure Monitor(1)', '40'),
(25, 'bob', 'bob@gmail.com', '12312312', 'bob', 'Card', 'Thermometer(3)', '30'),
(26, 'm', 'm@gmail.com', '32323232', 'm', 'Card', 'Blood Pressure Monitor(1), Cane(1), Crutches(1)', '100'),
(27, 'jack', 'jack@gmail.com', '12345678', 'jack', 'Card', 'Blood Pressure Monitor(3)', '120'),
(28, 'ben', 'ben@gmail.com', '12348765', 'ben', 'Card', 'Cane(2), Thermometer(2)', '80'),
(29, 'ben', 'ben@gmail.com', '12348765', 'ben', 'Card', 'Cane(2), Thermometer(2)', '80'),
(30, 'green', 'green@gmail.com', '12341234', 'green', '', 'Blood Pressure Monitor(3)', '120'),
(31, 'black', 'black@gmail.com', '12341234', 'black', '', 'Grab Bar(4)', '160'),
(32, 'pink', 'pink@gmail.com', '90123212', 'pink', '', 'Blood Pressure Monitor(1)', '40'),
(33, 'em', 'em@gmail.com', '87265512', 'em', '', 'Cane(2)', '60'),
(34, 'white', 'white@gmail.com', '98763213', 'white', '', 'Blood Pressure Monitor(2), Cane(1)', '110'),
(35, 'bob', 'bob@gmail.com', '98765432', 'bob', '', 'Blood Pressure Monitor(1)', '40'),
(36, 'emil', 'emil@gmail.com', '98765432', 'emil', '', 'Grab Bar(2)', '80');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `creditcard`
--
ALTER TABLE `creditcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
