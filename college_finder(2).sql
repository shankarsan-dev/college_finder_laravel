-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2025 at 04:25 PM
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
  `logo` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `website` varchar(255) NOT NULL,
  `landmarks` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `colleges`
--

INSERT INTO `colleges` (`college_id`, `name`, `type`, `established_year`, `created_at`, `updated_at`, `logo`, `phone`, `email`, `website`, `landmarks`, `city`, `province`, `location`, `about`) VALUES
(1, 'Pulchowk Campus', 'Engineering', '1972', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'pulchowk_logo.png', '01-1234567', 'info@pulchowk.edu.np', 'https://pulchowkcampus.edu.np', 'Near Pulchowk Lalitpur', 'Kathmandu', 'Bagmati', 'Pulchowk, Lalitpur', 'One of the leading engineering colleges in Nepal.'),
(2, 'ACE Institute of Management', 'Management', '1999', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'ace_logo.png', '01-2345678', 'info@ace.edu.np', 'https://ace.edu.np', 'Near New Baneshwor', 'Kathmandu', 'Bagmati', 'New Baneshwor, Kathmandu', 'A premier college for management studies in Nepal.'),
(3, 'Kathford International College', 'IT & Engineering', '2003', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'kathford_logo.png', '01-3456789', 'info@kathford.edu.np', 'https://kathford.edu.np', 'Near Balkumari Bridge', 'Kathmandu', 'Bagmati', 'Balkumari, Lalitpur', 'Known for its academic excellence in IT and engineering.'),
(4, 'Pokhara Business School', 'Business', '2005', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'pokhara_bschool_logo.png', '061-456789', 'info@pokharabusiness.edu.np', 'https://pokharabusiness.edu.np', 'Near Lakeside', 'Pokhara', 'Gandaki', 'Lakeside, Pokhara', 'A renowned business school in Nepal.'),
(5, 'Nepal Law Campus', 'Law', '1980', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'nepalilaw_logo.png', '021-567890', 'info@nepalilaw.edu.np', 'https://nepalilaw.edu.np', 'Near Mahendra Park', 'Biratnagar', 'Province 1', 'Main Road, Biratnagar', 'Focuses on law and governance.'),
(6, 'Chitwan Medical College', 'Medical', '1993', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'cmc_logo.png', '056-123456', 'info@cmc.edu.np', 'https://cmc.edu.np', 'Near Bharatpur Hospital', 'Chitwan', 'Bagmati', 'Bharatpur, Chitwan', 'Specialized in medical sciences and health education.'),
(7, 'Dhangadhi Engineering College', 'Engineering', '2008', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'dhangadhi_logo.png', '091-678901', 'info@dhangadhi.edu.np', 'https://dhangadhi.edu.np', 'Near Campus Road', 'Dhangadhi', 'Sudurpashchim', 'Campus Road, Dhangadhi', 'Offers technical education in various engineering fields.'),
(8, 'Janakpur Arts College', 'Arts', '1975', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'janakpur_arts_logo.png', '041-234567', 'info@janakpurarts.edu.np', 'https://janakpurarts.edu.np', 'Near Janaki Mandir', 'Janakpur', 'Madhesh', 'Janaki Chowk, Janakpur', 'Prominent college for arts and humanities.'),
(9, 'Hetauda Polytechnic Institute', 'Technical', '2010', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'hetauda_logo.png', '057-345678', 'info@hetauda.edu.np', 'https://hetauda.edu.np', 'Near Hetauda Industrial Area', 'Hetauda', 'Bagmati', 'Industrial Area, Hetauda', 'A leading institution for technical and vocational education.'),
(10, 'Surkhet Agricultural Campus', 'Agriculture', '2012', '2025-01-21 14:51:01', '2025-01-21 14:51:01', 'surkhet_agriculture_logo.png', '083-567890', 'info@surkhetagriculture.edu.np', 'https://surkhetagriculture.edu.np', 'Near Surkhet Valley', 'Surkhet', 'Karnali', 'Surkhet Valley, Surkhet', 'Known for its environmental and agricultural research.');

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
  `short_name` varchar(10) NOT NULL,
  `eligibility` varchar(255) NOT NULL,
  `college_id` bigint(20) NOT NULL,
  `university` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `full_name`, `duration`, `level`, `department`, `short_name`, `eligibility`, `college_id`, `university`) VALUES
(1, 'Bachelor of Civil Engineering', '4 Years', 'Bachelor', 'Engineering', 'BCE', '10+2 Science', 1, 'Tribhuvan University'),
(2, 'Bachelor of Computer Engineering', '4 Years', 'Bachelor', 'Engineering', 'BCT', '10+2 Science', 1, 'Tribhuvan University'),
(3, 'Master of Business Administration', '2 Years', 'Master', 'Management', 'MBA', 'Bachelor’s Degree', 2, 'Pokhara University'),
(4, 'Bachelor of Business Administration', '3 Years', 'Bachelor', 'Management', 'BBA', '10+2', 2, 'Pokhara University'),
(5, 'Bachelor of Computer Science and Information Techn', '4 Years', 'Bachelor', 'IT & Engineering', 'BSc.CSIT', '10+2 Science', 3, 'Tribhuvan University'),
(6, 'Bachelor of Electronics and Communication Engineer', '4 Years', 'Bachelor', 'IT & Engineering', 'BECE', '10+2 Science', 3, 'Tribhuvan University'),
(7, 'Bachelor of Business Studies', '3 Years', 'Bachelor', 'Business', 'BBS', '10+2', 4, 'Tribhuvan University'),
(8, 'Master of Business Studies', '2 Years', 'Master', 'Business', 'MBS', 'Bachelor’s Degree', 4, 'Tribhuvan University'),
(9, 'Bachelor of Laws (LLB)', '5 Years', 'Bachelor', 'Law', 'LLB', '10+2', 5, 'Tribhuvan University'),
(10, 'Master of Laws (LLM)', '2 Years', 'Master', 'Law', 'LLM', 'Bachelor’s Degree', 5, 'Tribhuvan University'),
(11, 'Bachelor of Medicine, Bachelor of Surgery (MBBS)', '5.5 Years', 'Bachelor', 'Medical', 'MBBS', '10+2 Science', 6, 'Tribhuvan University'),
(12, 'Bachelor of Nursing Science', '4 Years', 'Bachelor', 'Medical', 'BNS', '10+2 Science', 6, 'Tribhuvan University'),
(13, 'Bachelor of Civil Engineering', '4 Years', 'Bachelor', 'Engineering', 'BCE', '10+2 Science', 7, 'Purbanchal University'),
(14, 'Bachelor of Electrical Engineering', '4 Years', 'Bachelor', 'Engineering', 'BEE', '10+2 Science', 7, 'Purbanchal University'),
(15, 'Bachelor of Arts in Sociology', '3 Years', 'Bachelor', 'Arts', 'BA Sociolo', '10+2', 8, 'Tribhuvan University'),
(16, 'Master of Arts in English', '2 Years', 'Master', 'Arts', 'MA English', 'Bachelor’s Degree', 8, 'Tribhuvan University'),
(17, 'Diploma in Civil Engineering', '3 Years', 'Diploma', 'Technical', 'Dip. Civil', '10+2', 9, 'CTEVT'),
(18, 'Diploma in Electrical Engineering', '3 Years', 'Diploma', 'Technical', 'Dip. Elect', '10+2', 9, 'CTEVT'),
(19, 'Bachelor of Science in Agriculture', '4 Years', 'Bachelor', 'Agriculture', 'BSc Ag', '10+2 Science', 10, 'Tribhuvan University'),
(20, 'Master of Science in Agriculture', '2 Years', 'Master', 'Agriculture', 'MSc Ag', 'Bachelor’s Degree', 10, 'Tribhuvan University');

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

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('lRVSmVcaR9SAOeBdEWvGTgzatHBdXnObtkZwx8cA', NULL, '192.168.18.48', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiem12QmNsN2ttbWRyVFhGVUVXYzlTanZnUERYUGY0MjRrSmZrUk1pSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8xOTIuMTY4LjE4LjQ4Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1737369219),
('N2Tb1YAthzlrTVkPn6kXNPspfnOHTQ0AIEo5josq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRkVhSU15ZkljWHFYb2FKSUpPV2lmVHB6S2xvbXVnQWgzaHFhMXlIRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1737369059),
('TpDq4vdP2ehVboIutf2QSihJ09qPbG2cadkTm6rs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZG1hN0M1Z2hkdnoySDRLeUxPQVBXeU9oSGlsSjJNM2hKMkNiWWN2VyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1737438756);

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
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `college_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`university_id`, `name`, `type`, `established_year`, `location`, `description`, `website`, `logo_image`, `created_at`, `updated_at`, `college_id`) VALUES
(1, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 1),
(2, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 3),
(3, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 4),
(4, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 5),
(5, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 6),
(6, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 8),
(7, 'Tribhuvan University', 'Public', 1959, 'Kirtipur, Kathmandu', 'The oldest and largest university in Nepal, offering a wide range of programs across various fields.', 'https://tribhuvan-university.edu.np', 'tribhuvan_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 10),
(8, 'Pokhara University', 'Public', 1997, 'Pokhara, Kaski', 'A leading public university focusing on quality education in business, engineering, and health sciences.', 'https://pokharauniversity.edu.np', 'pokhara_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 2),
(9, 'Purbanchal University', 'Public', 1993, 'Biratnagar, Morang', 'Purbanchal University offers diverse programs in engineering, business, and humanities.', 'https://purbuniv.edu.np', 'purbanchal_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 7),
(10, 'CTEVT', 'Government', 1989, 'Sanothimi, Bhaktapur', 'CTEVT provides technical and vocational education, focusing on the development of skilled manpower.', 'https://ctevt.org.np', 'ctevt_logo.png', '2025-01-21 15:10:53', '2025-01-21 15:10:53', 9);

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
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `college_id` (`college_id`);

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
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

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
  MODIFY `university_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`college_id`) REFERENCES `colleges` (`college_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
