-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-12-2020 a las 12:59:19
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `irisuniverse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `title` text NOT NULL,
  `body` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `date`, `image`, `title`, `body`) VALUES
(47, '2020-12-15', 'cuadro IG.jpg', 'Lorem ipsum dolor sit amet.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum varius ante, id auctor risus gravida non. Proin volutpat tellus ac est porttitor pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet imperdiet nibh facilisis varius. Proin nec augue facilisis, lacinia elit in, pharetra ex. In ipsum dui, dapibus id ornare et, pharetra non dolor. Nulla dapibus fermentum nibh, ac ullamcorper justo ullamcorper vitae. Cras maximus eget lorem non suscipit. Donec cursus, felis et lobortis convallis, massa felis placerat felis, vitae venenatis sem lectus at elit. Morbi eu leo hendrerit velit iaculis vestibulum.</p><p>Donec et lacus quam. Duis convallis rhoncus velit sed lacinia. Nulla at dictum libero. Nunc nec velit magna. Vestibulum a malesuada ante. Vivamus finibus tortor neque, vel hendrerit odio accumsan ut. Maecenas sed quam vitae quam pellentesque molestie et vel leo. Duis vehicula ultricies orci, faucibus luctus risus molestie ullamcorper.</p><p>Praesent ultricies lacus dolor, ac scelerisque sapien scelerisque nec. Aliquam quis sem porta, imperdiet purus non, venenatis felis. Nulla facilisi. In enim magna, suscipit a tincidunt id, efficitur eu nisi. Ut et nunc nulla. Sed vulputate arcu sem, in gravida ipsum iaculis at. Pellentesque non massa vitae ante tristique commodo sed sed metus. Phasellus consectetur ex eget lacinia dignissim. Vestibulum non molestie felis. Vestibulum efficitur in orci ac dignissim. Sed consectetur turpis vitae gravida semper. Duis et orci dictum, tincidunt augue vel, tempus eros. Nulla sapien nulla, fermentum in orci venenatis, egestas luctus sem.</p>'),
(41, '2020-12-11', 'imagen1.jpg', 'Children´s room inspired by the story of little red riding hood', '<p> From the course I did at Domestika, on illustrated patterns, a collection of patterns came out inspired by the story \"Little Red Riding Hood\". I had a lot of fun doing it, illustrating each character and putting together each pattern. Part of the exercise was to apply it to objects, in order to see how they look in a real environment. </p>\r\n\r\n<p> Use several of the patterns in this beautiful children´s room. I achieved a combination of colors that maintain the harmony between them. It is a design that can be used for both boys and girls. </p>\r\n\r\n<p> These designs are already available in society6 and redbbule stores. </p>'),
(48, '2020-12-16', 'Hanging blanco .jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '<p>Ut fermentum varius ante, id auctor risus gravida non. Proin volutpat tellus ac est porttitor pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet imperdiet nibh facilisis varius. Proin nec augue facilisis, lacinia elit in, pharetra ex. In ipsum dui, dapibus id ornare et, pharetra non dolor. Nulla dapibus fermentum nibh, ac ullamcorper justo ullamcorper vitae. Cras maximus eget lorem non suscipit. Donec cursus, felis et lobortis convallis, massa felis placerat felis, vitae venenatis sem lectus at elit. Morbi eu leo hendrerit velit iaculis vestibulum.</p>\r\n<p>Donec et lacus quam. Duis convallis rhoncus velit sed lacinia. Nulla at dictum libero. Nunc nec velit magna. Vestibulum a malesuada ante. Vivamus finibus tortor neque, vel hendrerit odio accumsan ut. Maecenas sed quam vitae quam pellentesque molestie et vel leo. Duis vehicula ultricies orci, faucibus luctus risus molestie ullamcorper.</p>\r\n<p>Praesent ultricies lacus dolor, ac scelerisque sapien scelerisque nec. Aliquam quis sem porta, imperdiet purus non, venenatis felis. Nulla facilisi. In enim magna, suscipit a tincidunt id, efficitur eu nisi. Ut et nunc nulla. Sed vulputate arcu sem, in gravida ipsum iaculis at. Pellentesque non massa vitae ante tristique commodo sed sed metus. Phasellus consectetur ex eget lacinia dignissim. Vestibulum non molestie felis. Vestibulum efficitur in orci ac dignissim. Sed consectetur turpis vitae gravida semper. Duis et orci dictum, tincidunt augue vel, tempus eros. Nulla sapien nulla, fermentum in orci venenatis, egestas luctus sem.</p>'),
(49, '2020-12-17', 'IG.jpg', 'Aliquam quis sem porta, imperdiet purus non, venenatis felis', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum varius ante, id auctor risus gravida non. Proin volutpat tellus ac est porttitor pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet imperdiet nibh facilisis varius. Proin nec augue facilisis, lacinia elit in, pharetra ex. In ipsum dui, dapibus id ornare et, pharetra non dolor. Nulla dapibus fermentum nibh, ac ullamcorper justo ullamcorper vitae. Cras maximus eget lorem non suscipit. Donec cursus, felis et lobortis convallis, massa felis placerat felis, vitae venenatis sem lectus at elit. Morbi eu leo hendrerit velit iaculis vestibulum.</p>\r\n<p>Praesent ultricies lacus dolor, ac scelerisque sapien scelerisque nec. Aliquam quis sem porta, imperdiet purus non, venenatis felis. Nulla facilisi. In enim magna, suscipit a tincidunt id, efficitur eu nisi. Ut et nunc nulla. Sed vulputate arcu sem, in gravida ipsum iaculis at. Pellentesque non massa vitae ante tristique commodo sed sed metus. Phasellus consectetur ex eget lacinia dignissim. Vestibulum non molestie felis. Vestibulum efficitur in orci ac dignissim. Sed consectetur turpis vitae gravida semper. Duis et orci dictum, tincidunt augue vel, tempus eros. Nulla sapien nulla, fermentum in orci venenatis, egestas luctus sem</p>'),
(50, '2020-12-19', 'miwebresponsive1.jpg', 'Lorem ipsum dolor sit amet', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum varius ante, id auctor risus gravida non. Proin volutpat tellus ac est porttitor pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet imperdiet nibh facilisis varius. Proin nec augue facilisis, lacinia elit in, pharetra ex. In ipsum dui, dapibus id ornare et, pharetra non dolor. Nulla dapibus fermentum nibh, ac ullamcorper justo ullamcorper vitae. Cras maximus eget lorem non suscipit. Donec cursus, felis et lobortis convallis, massa felis placerat felis, vitae venenatis sem lectus at elit. Morbi eu leo hendrerit velit iaculis vestibulum.</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum varius ante, id auctor risus gravida non. Proin volutpat tellus ac est porttitor pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet imperdiet nibh facilisis varius. Proin nec augue facilisis, lacinia elit in, pharetra ex. In ipsum dui, dapibus id ornare et, pharetra non dolor. Nulla dapibus fermentum nibh, ac ullamcorper justo ullamcorper vitae. Cras maximus eget lorem non suscipit. Donec cursus, felis et lobortis convallis, massa felis placerat felis, vitae venenatis sem lectus at elit. Morbi eu leo hendrerit velit iaculis vestibulum.</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gallery`
--

DROP TABLE IF EXISTS `gallery`;
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(250) DEFAULT NULL,
  `title` text NOT NULL,
  `tags` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gallery`
--

INSERT INTO `gallery` (`id`, `image`, `title`, `tags`) VALUES
(1, 'pattern-1.jpg', 'Illustrated pattern of bear in the forest   ', 'patterns '),
(4, 'illustration1.jpg', 'Rainbow phrase be free', 'illustration'),
(5, 'pattern-2.jpg', 'Black and white flower composition', 'patterns'),
(6, 'illustration2.jpg', 'Home with bouquet of flowers and bees', 'illustration'),
(7, 'pattern-3.jpg', 'Pattern of red rose with leaves inspired by Little red riding hood', 'patterns'),
(8, 'illustration3.jpg', 'Portrait of bear in the forest', 'illustration'),
(9, 'pattern-4.jpg', 'Love of plant indoors', 'patterns'),
(10, 'illustration4.jpg', 'It\'s okay to be different', 'illustration'),
(11, 'pattern-5.jpg', 'Natural colors rainbow pattern', 'patterns'),
(12, 'illustration5.jpg', 'cactus and succulents indoors', 'illustration'),
(13, 'pattern-6.jpg', 'Sand tone flower garden', 'patterns'),
(14, 'illustration6.jpg', 'The best mom', 'illustration'),
(15, 'pattern-7.jpg', 'Blue leaves lines pattern', 'patterns'),
(16, 'illustration7.jpg', 'Portrait of dog in the forest', 'illustration'),
(17, 'pattern-8.jpg', 'White flower net ', 'patterns '),
(18, 'pattern-9.jpg', 'Leaves black and white pattern', 'patterns');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE IF NOT EXISTS `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`) VALUES
(1, 'iriangel', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
