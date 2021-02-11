CREATE DATABASE webcomputing;

USE webcomputing;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- because this server won't be limited to just one website, we will separate the database into sections based on the company


-- TANDJAY PHOTOGRAPHY
-- Main table for images
 CREATE TABLE `tandjay_images` (`photo` varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 INSERT INTO `tandjay_images`(`photo`) VALUES ('https://lh3.googleusercontent.com/JENAQKQVbdvhIjPrhEDCLSH8wp3UQ-S2QSxAHMvsYwNOGOsFprqK8LnZ8HaWSPvdC1A75ybXRBUL4QBHiqX22ueVmSMUj96jN66JRdE0OAZlsVnN8xNm1jTSX9yp8I1AwdBHwugS=w2400');
 INSERT INTO `tandjay_images`(`photo`) VALUES ('https://lh3.googleusercontent.com/ljOM-W7yeNgnJrbbIxWq0qQvsSy5o_fPAcP7nWxLZGhIhSaCmRRayarrbXWXWAvGPLlcZb8Arr82hWYuKvQoUiwJjRRxo5T788ltF4z83Yu3f8tFrPORc8oewinr0aiMNsAVM7YK=w2400');
 INSERT INTO `tandjay_images`(`photo`) VALUES ('https://lh3.googleusercontent.com/zQG-GLtDzzHxtg0quF_BBPxIN_3mIqW5Z8vroPqoqfmTX2deiWTGyBPrlU8wZzsoQjS_S3elpRuOL198t1LaT660LEdmiPomqsUXwixIp_xTdV7wyIjrgqdSHCuVoznz9ddCMgHb=w2400');
 INSERT INTO `tandjay_images`(`photo`) VALUES ('https://lh3.googleusercontent.com/e0OV9zPWeNlSeWb0qahlN_P3QR22L02fRpgant7XDjfUCpRoKERg7bKEdODzTlHUjgsS2uClBYgwCb0ke-3RQUBM7xV2y2ppifBvY-QqO78ztseTkTFR6uaSRy-y9R0RY4VS9hyt=w2400');

-- Secondary table for user accounts
 CREATE TABLE `tandjay_users` (
     `username` varchar(255) NOT NULL,
     `password` varchar(255) NOT NULL
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
 INSERT INTO `tandjay_users`(`username`,`password`) VALUES ('jacob','JDMGoBoom');
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;