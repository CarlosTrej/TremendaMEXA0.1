CREATE DATABASE  IF NOT EXISTS `tremendamx` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tremendamx`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tremendamx
-- ------------------------------------------------------
-- Server version	5.6.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProductos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(10,0) NOT NULL DEFAULT '0',
  `descripcion` varchar(500) DEFAULT NULL,
  `tamaño` varchar(45) NOT NULL,
  `img` varchar(2000) NOT NULL,
  `categorias_idcategorias` int(11) NOT NULL,
  `marca_idmarca` int(11) NOT NULL,
  PRIMARY KEY (`idProductos`,`categorias_idcategorias`,`marca_idmarca`),
  KEY `fk_Productos_Categorias1_idx` (`categorias_idcategorias`),
  KEY `fk_Productos_Marca1_idx` (`marca_idmarca`),
  CONSTRAINT `fk_Productos_Categorias1` FOREIGN KEY (`categorias_idcategorias`) REFERENCES `categorias` (`idcategorias`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Productos_Marca1` FOREIGN KEY (`marca_idmarca`) REFERENCES `marca` (`idMarca`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--
-- ORDER BY:  `idProductos`,`categorias_idcategorias`,`marca_idmarca`

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (10,'CORTE BÁSICO',550,'En mezclilla y/o loneta','S,M,L','https://res.cloudinary.com/rookiesquad/image/upload/v1636498769/Imagen5_mipxbl.png',1,1),(11,'CORTE INDUSTRIAL',950,'Tirantes en cinta textil industrial desmontables con','S,M,L','https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png',1,1),(12,'CORTE DE LUJO',1350,'Tirantes en piel de res y estabilizador trasero en cuero de','S,M,L','https://res.cloudinary.com/rookiesquad/image/upload/v1636498884/Imagen11_yttulg.png',1,1),(13,'CORTE PREMIUM',1900,'Tirantes en piel de res y estabilizador trasero en cuero de','S,M,L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg',1,1),(14,'CORTE COMPLETO EN PIEL DE RES',2500,'En piel genuina de res, cortada y cosida a mano.','S,M,L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg',1,1),(15,'Bolsa',300,'Realizadas en mezclilla industrial color azul índigo, con correas y aplicaciones en piel de res color tabaco','30x20cm','https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png',2,1),(16,'Cáfe',180,'Hecho con el mejor café tostado, originario de Chiapas','500grs','https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg',3,2),(17,'Cáfe CH',110,'Hecho con el mejor café tostado, originario de Chiapas','300grs','https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg',3,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-30 23:46:52
