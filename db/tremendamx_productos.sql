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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(10,0) NOT NULL DEFAULT '0',
  `descripcion` varchar(500) DEFAULT NULL,
  `presentacion` varchar(45) NOT NULL,
  `img` varchar(2000) NOT NULL,
  `categorias_idcategorias` int(11) NOT NULL,
  `marca_idmarca` int(11) NOT NULL,
  PRIMARY KEY (`id`,`categorias_idcategorias`,`marca_idmarca`),
  KEY `fk_Productos_Categorias1_idx` (`categorias_idcategorias`),
  KEY `fk_Productos_Marca1_idx` (`marca_idmarca`),
  CONSTRAINT `fk_Productos_Categorias1` FOREIGN KEY (`categorias_idcategorias`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Productos_Marca1` FOREIGN KEY (`marca_idmarca`) REFERENCES `marca` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--
-- ORDER BY:  `id`,`categorias_idcategorias`,`marca_idmarca`

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Mandil corte de Lujo',2000,'Mandil elaborado en piel genuina de res. Cortado, ensamblado y cosido totalmente a mano.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/53354671_579503035870606_6664139277111411912_n_begudt.jpg',1,1),(2,'Mandil corte de Lujo',1600,'Mandiles en piel de res hechos completamente a mano.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg',1,1),(3,'Mandil corte de Lujo',1600,'Corte de lujo en loneta color oro viejo y bolsas color chocolate, aplicaciones desmontables en piel color tabaco, tirantes desmontables y ajustables con estabilizador de cuero hechos a mano.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg',1,1),(4,'Mandil corte de Lujo',1450,'Con tirantes en cuero de res y estabilizador trasero elaborados completamente a mano, etiqueta de cuero personalizada con nombre, ambas desmontables para su mayor cuidado y durabilidad.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/59771119_129001591615867_4798543424333610055_n_kjumpx.jpg',1,1),(5,'Mandil corte Industrial',1350,'En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png',1,1),(6,'Mandil corte Industrial',950,'En loneta obscura sublimada y tirantes textiles fijos al mandil, personalizado con logo.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/71189068_673387299850155_4273578602593480175_n_iauq2i.jpg',1,1),(7,'Mandil corte Industrial',1100,'Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano.','S, M, L','https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png',1,1),(8,'Bolsa',300,'Realizadas en mezclilla industrial color azul con correas y aplicaciones en piel de res.','30x20cm','https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png',2,1),(9,'Bolsa',300,'Realizadas en mezclilla industrial color azul índigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada ','30x20cm','https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png',2,1),(10,'Café Orgánico',180,'Hecho con el mejor café tostado, originario de Chiapas','500grs','https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg',3,2),(11,'Café Tostado Orgánico',300,'Hecho con el mejor café tostado, originario de Chiapas','500grs','https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg',3,2),(30,'Café Caracol Purpura',250,'Hecho con el mejor café tostado, originario de Oaxaca','500grs','https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg',3,2);
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

-- Dump completed on 2021-12-04 20:44:10
