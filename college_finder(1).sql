-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2025 at 07:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college_finder`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colleges`
--

CREATE TABLE `colleges` (
  `college_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `established_year` year(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `logo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `colleges`
--

INSERT INTO `colleges` (`college_id`, `name`, `type`, `established_year`, `created_at`, `updated_at`, `logo`) VALUES
(1, 'Pulchowk Engineering Campus', 'Public', '1972', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/pulchowk.png'),
(2, 'Amrit Science Campus', 'Public', '1962', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/amrit.png'),
(3, 'Nepal Commerce Campus', 'Public', '1959', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/commerce.png'),
(4, 'Kathmandu Engineering College', 'Private', '1998', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/kec.png'),
(5, 'St. Xavier\'s College', 'Private', '1988', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/stxavier.png'),
(6, 'British College', 'Private', '2011', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/british.png'),
(7, 'KIST Medical College', 'Private', '2006', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/kist.png'),
(8, 'Nobel Medical College', 'Private', '2004', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/nobel.png'),
(9, 'GoldenGate International College', 'Private', '2007', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/goldengate.png'),
(10, 'Nepal Engineering College', 'Private', '1994', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/nec.png'),
(11, 'Apex College', 'Private', '2000', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/apex.png'),
(12, 'Patan Multiple Campus', 'Public', '1954', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/patan.png'),
(13, 'Universal College', 'Private', '1998', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/universal.png'),
(14, 'Prime College', 'Private', '2001', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/prime.png'),
(15, 'Bhaktapur Multiple Campus', 'Public', '1954', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/bhaktapur.png'),
(16, 'National Medical College', 'Private', '2001', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/national.png'),
(17, 'Kathmandu Medical College', 'Private', '1997', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/kmc.png'),
(18, 'Malpi International College', 'Private', '1999', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/malpi.png'),
(19, 'Janamaitri Multiple Campus', 'Public', '2000', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/janamaitri.png'),
(20, 'Cosmos College', 'Private', '2003', '2025-01-20 04:15:00', '2025-01-20 04:15:00', 'images/cosmos.png');

-- --------------------------------------------------------

--
-- Table structure for table `college_affiliations`
--

CREATE TABLE `college_affiliations` (
  `affiliation_id` int(11) NOT NULL,
  `college_id` bigint(20) NOT NULL,
  `university_id` int(11) NOT NULL,
  `affiliation_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `college_affiliations`
--

INSERT INTO `college_affiliations` (`affiliation_id`, `college_id`, `university_id`, `affiliation_type`) VALUES
(1, 1, 1, 'Direct'),
(2, 2, 1, 'Direct'),
(3, 3, 1, 'Direct'),
(4, 4, 2, 'Indirect'),
(5, 5, 2, 'Indirect'),
(6, 6, 2, 'Indirect'),
(7, 7, 3, 'Direct'),
(8, 8, 3, 'Direct'),
(9, 9, 2, 'Indirect'),
(10, 10, 2, 'Indirect'),
(11, 11, 2, 'Indirect'),
(12, 12, 1, 'Direct'),
(13, 13, 2, 'Indirect'),
(14, 14, 2, 'Indirect'),
(15, 15, 1, 'Direct'),
(16, 16, 2, 'Indirect'),
(17, 17, 2, 'Indirect'),
(18, 18, 2, 'Indirect'),
(19, 19, 1, 'Direct'),
(20, 20, 2, 'Indirect');

-- --------------------------------------------------------

--
-- Table structure for table `college_blog`
--

CREATE TABLE `college_blog` (
  `blog_id` bigint(11) NOT NULL,
  `college_id` bigint(11) NOT NULL,
  `Title` text NOT NULL,
  `paragraph1` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `college_courses`
--

CREATE TABLE `college_courses` (
  `id` bigint(20) NOT NULL,
  `college_id` bigint(20) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `college_courses`
--

INSERT INTO `college_courses` (`id`, `college_id`, `course_id`, `created_at`, `updated_at`) VALUES
(1, 1, 64, '2025-01-20 02:14:58', '2025-01-20 02:14:58'),
(2, 1, 65, '2025-01-20 02:14:58', '2025-01-20 02:14:58'),
(4, 4, 72, '2025-01-20 02:27:15', '2025-01-20 02:27:15');

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `contact_id` bigint(20) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `college_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`contact_id`, `phone`, `email`, `website`, `college_id`) VALUES
(41, '01-5534767', 'info@pulchowk.edu.np', 'http://www.pulchowk.edu.np', 1),
(42, '01-4112345', 'contact@amrit.edu.np', 'http://www.amrit.edu.np', 2),
(43, '01-4783421', 'info@commerce.edu.np', 'http://www.commerce.edu.np', 3),
(44, '01-5152424', 'info@kec.edu.np', 'http://www.kec.edu.np', 4),
(45, '01-4231234', 'info@stxavier.edu.np', 'http://www.stxavier.edu.np', 5),
(46, '01-4928201', 'info@british.edu.np', 'http://www.british.edu.np', 6),
(47, '01-4902123', 'contact@kist.edu.np', 'http://www.kist.edu.np', 7),
(48, '01-5312312', 'contact@nobel.edu.np', 'http://www.nobel.edu.np', 8),
(49, '01-4423123', 'info@goldengate.edu.np', 'http://www.goldengate.edu.np', 9),
(50, '01-4375290', 'info@nec.edu.np', 'http://www.nec.edu.np', 10),
(51, '01-4663489', 'info@apex.edu.np', 'http://www.apex.edu.np', 11),
(52, '01-5537889', 'info@patan.edu.np', 'http://www.patan.edu.np', 12),
(53, '01-4623123', 'contact@universal.edu.np', 'http://www.universal.edu.np', 13),
(54, '01-4621010', 'info@prime.edu.np', 'http://www.prime.edu.np', 14),
(55, '01-5103050', 'info@bhaktapur.edu.np', 'http://www.bhaktapur.edu.np', 15),
(56, '01-5103123', 'info@national.edu.np', 'http://www.national.edu.np', 16),
(57, '01-4819876', 'contact@kmc.edu.np', 'http://www.kmc.edu.np', 17),
(58, '01-4700001', 'info@malpi.edu.np', 'http://www.malpi.edu.np', 18),
(59, '01-4675432', 'contact@janamaitri.edu.np', 'http://www.janamaitri.edu.np', 19),
(60, '01-5112234', 'info@cosmos.edu.np', 'http://www.cosmos.edu.np', 20);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` bigint(11) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `level` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `university_id` int(11) NOT NULL,
  `short_name` varchar(10) NOT NULL,
  `eligibility` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `full_name`, `duration`, `level`, `department`, `university_id`, `short_name`, `eligibility`) VALUES
(64, 'Bachelor of Engineering in Computer Engineering', '4 years', 'Undergraduate', 'Engineering', 1, 'BE Compute', 'Completed Higher Secondary (10+2) or equivalent in'),
(65, 'Bachelor of Business Administration', '4 years', 'Undergraduate', 'Management', 2, 'BBA', 'Completed Higher Secondary (10+2) or equivalent in'),
(68, 'Bachelor of Civil Engineering', '4 years', 'Undergraduate', 'Engineering', 3, 'BE Civil E', 'Completed Higher Secondary (10+2) or equivalent in'),
(69, 'Bachelor of Science in Environmental Management', '4 years', 'Undergraduate', 'Science', 1, 'BSc Enviro', 'Completed Higher Secondary (10+2) or equivalent in'),
(71, 'Bachelor of Arts in English', '3 years', 'Undergraduate', 'Humanities', 2, 'BA English', 'Completed Higher Secondary (10+2) or equivalent in'),
(72, 'Bachelor of Information Technology', '4 years', 'Undergraduate', 'Engineering', 1, 'BIT', 'Completed Higher Secondary (10+2) or equivalent in'),
(74, 'Bachelor of Science in Computer Science', '4 years', 'Undergraduate', 'Science', 2, 'BSc Comput', 'Completed Higher Secondary (10+2) or equivalent in'),
(75, 'Bachelor of Hotel Management', '4 years', 'Undergraduate', 'Hospitality', 3, 'BHM', 'Completed Higher Secondary (10+2) or equivalent in'),
(77, 'Bachelor of Business Administration in Digital Mar', '4 years', 'Undergraduate', 'Management', 2, 'BBA Digita', 'Completed Higher Secondary (10+2) or equivalent in'),
(78, 'Master of Public Health', '2 years', 'Postgraduate', 'Health Sciences', 3, 'MPH', 'Bachelor\'s degree in health-related fields or equi'),
(79, 'Bachelor of Science in Agriculture', '4 years', 'Undergraduate', 'Agriculture', 1, 'BSc Agricu', 'Completed Higher Secondary (10+2) or equivalent wi'),
(80, 'Bachelor of Pharmacy', '4 years', 'Undergraduate', 'Health Sciences', 2, 'BPharmacy', 'Completed Higher Secondary (10+2) or equivalent in'),
(81, 'Bachelor of Science in Physics', '4 years', 'Undergraduate', 'Science', 3, 'BSc Physic', 'Completed Higher Secondary (10+2) or equivalent in'),
(83, 'Bachelor of Education', '4 years', 'Undergraduate', 'Education', 1, 'BEd', 'Completed Higher Secondary (10+2) or equivalent in');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  `street_address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `college_id` bigint(20) NOT NULL,
  `landmarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `longitude`, `latitude`, `street_address`, `city`, `province`, `college_id`, `landmarks`) VALUES
(1, 85.338, 27.715, 'Pulchowk Engineering Campus, Pulchowk', 'Lalitpur', 'Bagmati', 1, 'Near Patan Durbar Square'),
(2, 85.289, 27.704, 'Amrit Science Campus, Lainchaur', 'Kathmandu', 'Bagmati', 2, 'Near Nepal Electricity Authority'),
(3, 85.323, 27.701, 'Nepal Commerce Campus, Tahachal', 'Kathmandu', 'Bagmati', 3, 'Near Nepal Rastra Bank Headquarters'),
(4, 85.319, 27.7, 'GoldenGate International College, Bansbari', 'Kathmandu', 'Bagmati', 9, 'Near Bansbari Traffic Junction'),
(5, 85.322, 27.67, 'Patan Multiple Campus, Lalitpur', 'Lalitpur', 'Bagmati', 12, 'Near Patan Durbar Square'),
(6, 85.334, 27.7, 'Universal College, New Baneshwor', 'Kathmandu', 'Bagmati', 13, 'Near the New Baneshwor Chowk'),
(7, 85.329, 27.705, 'Prime College, Gyaneshwor', 'Kathmandu', 'Bagmati', 14, 'Near Gyaneshwor Temple'),
(8, 85.4, 27.669, 'Bhaktapur Multiple Campus, Bhaktapur', 'Bhaktapur', 'Bagmati', 15, 'Near Bhaktapur Durbar Square'),
(9, 85.321, 27.69, 'Janamaitri Multiple Campus, Kalanki', 'Kathmandu', 'Bagmati', 19, 'Near Kalanki Bus Stop'),
(10, 85.358, 27.69, 'Kathmandu Engineering College, Chhetrapati', 'Kathmandu', 'Bagmati', 4, 'Near New Road'),
(11, 85.348, 27.688, 'St. Xavier\'s College, Maitighar', 'Kathmandu', 'Bagmati', 5, 'Near Maitighar Mandala'),
(12, 85.335, 27.717, 'British College, Thapathali', 'Kathmandu', 'Bagmati', 6, 'Near Thapathali Bridge'),
(13, 85.335, 27.704, 'KIST Medical College, Imadol', 'Lalitpur', 'Bagmati', 7, 'Near Lagankhel'),
(14, 85.337, 27.672, 'Nobel Medical College, Biratnagar', 'Biratnagar', 'Province No. 1', 8, 'Near Biratnagar Bus Park'),
(15, 85.274, 27.668, 'Nepal Engineering College, Changunarayan', 'Bhaktapur', 'Bagmati', 10, 'Near Changunarayan Temple'),
(16, 85.342, 27.707, 'Apex College, Kamalpokhari', 'Kathmandu', 'Bagmati', 11, 'Near Kamalpokhari Chowk'),
(17, 85.307, 27.721, 'National Medical College, Birgunj', 'Birgunj', 'Province No. 2', 16, 'Near Birgunj Hospital'),
(18, 85.336, 27.707, 'Kathmandu Medical College, Kathmandu', 'Kathmandu', 'Bagmati', 17, 'Near Kathmandu Durbar Square'),
(19, 85.347, 27.682, 'Malpi International College, Sanga', 'Kathmandu', 'Bagmati', 18, 'Near Sanga Bridge'),
(20, 85.354, 27.678, 'Cosmos College, New Baneshwor', 'Kathmandu', 'Bagmati', 20, 'Near New Baneshwor Chowk');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '0001_01_01_000000_create_users_table', 1),
(6, '0001_01_01_000001_create_cache_table', 1),
(7, '0001_01_01_000002_create_jobs_table', 1),
(8, '2025_01_19_070601_create_colleges_table', 1),
(9, '2025_01_19_070900_create_colleges_table', 2),
(10, '2025_01_19_073014_update_fields', 3),
(11, '2025_01_19_094100_create_personal_access_tokens_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `university_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `established_year` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `logo_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`university_id`, `name`, `type`, `established_year`, `location`, `description`, `website`, `logo_image`, `created_at`, `updated_at`) VALUES
(1, 'Tribhuvan University', 'Public', 1959, 'Kathmandu, Nepal', 'Tribhuvan University is the oldest and largest university in Nepal, offering a variety of courses and programs across the country.', 'http://www.tu.edu.np', 'images/tu_logo.png', '2025-01-19 17:45:22', '2025-01-19 17:45:22'),
(2, 'Kathmandu University', 'Private', 1991, 'Dhulikhel, Nepal', 'Kathmandu University is a leading private institution in Nepal, offering undergraduate and postgraduate programs in engineering, science, management, and humanities.', 'http://www.ku.edu.np', 'images/ku_logo.png', '2025-01-19 17:45:22', '2025-01-19 17:45:22'),
(3, 'Pokhara University', 'Public', 1997, 'Pokhara, Nepal', 'Pokhara University focuses on the development of high-quality education and research programs in science, technology, engineering, and management.', 'http://www.pu.edu.np', 'images/pu_logo.png', '2025-01-19 17:45:22', '2025-01-19 17:45:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `colleges`
--
ALTER TABLE `colleges`
  ADD PRIMARY KEY (`college_id`);

--
-- Indexes for table `college_affiliations`
--
ALTER TABLE `college_affiliations`
  ADD PRIMARY KEY (`affiliation_id`),
  ADD KEY `university_id` (`university_id`),
  ADD KEY `college_affiliations_ibfk_1` (`college_id`);

--
-- Indexes for table `college_courses`
--
ALTER TABLE `college_courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `college_id` (`college_id`,`course_id`),
  ADD KEY `college_courses_ibfk_2` (`course_id`);

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `contact_info_ibfk_1` (`college_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `university_id` (`university_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`),
  ADD KEY `college_id` (`college_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`university_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colleges`
--
ALTER TABLE `colleges`
  MODIFY `college_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `college_affiliations`
--
ALTER TABLE `college_affiliations`
  MODIFY `affiliation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `college_courses`
--
ALTER TABLE `college_courses`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `contact_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `university_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `college_affiliations`
--
ALTER TABLE `college_affiliations`
  ADD CONSTRAINT `college_affiliations_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `colleges` (`college_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `college_affiliations_ibfk_2` FOREIGN KEY (`university_id`) REFERENCES `universities` (`university_id`) ON DELETE CASCADE;

--
-- Constraints for table `college_courses`
--
ALTER TABLE `college_courses`
  ADD CONSTRAINT `college_courses_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `colleges` (`college_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `college_courses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD CONSTRAINT `contact_info_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `colleges` (`college_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`university_id`) REFERENCES `universities` (`university_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `colleges` (`college_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
