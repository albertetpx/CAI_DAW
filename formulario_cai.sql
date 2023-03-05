-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: formulario_cai
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `alarma`
--

DROP TABLE IF EXISTS `alarma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alarma` (
  `dni` varchar(10) NOT NULL,
  `pren_medicaments` varchar(3) DEFAULT NULL,
  `tos` varchar(3) DEFAULT NULL,
  `expectoracio` varchar(3) DEFAULT NULL,
  `situacions_influenica_respiracio` varchar(3) DEFAULT NULL,
  `fuma` varchar(3) DEFAULT NULL,
  `situacion_influencien_aliments` varchar(3) DEFAULT NULL,
  `situacions_influencien_eliminacio` varchar(3) DEFAULT NULL,
  `moure_cos` varchar(3) DEFAULT NULL,
  `situacions_influencien_moure_cos` varchar(3) DEFAULT NULL,
  `situacions_influencien_son` varchar(3) DEFAULT NULL,
  `capasitat_vestirse` varchar(3) DEFAULT NULL,
  `situacions_influencien_vestimenta` varchar(3) DEFAULT NULL,
  `situacions_influencien_termoregualcio` varchar(3) DEFAULT NULL,
  `situacions_influencien_higene` varchar(3) DEFAULT NULL,
  `situacions_influencien_seguretat` varchar(3) DEFAULT NULL,
  `situacions_influencien_comunicacio` varchar(3) DEFAULT NULL,
  `interes_coneixer_proces_salut` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alarma`
--

LOCK TABLES `alarma` WRITE;
/*!40000 ALTER TABLE `alarma` DISABLE KEYS */;
INSERT INTO `alarma` VALUES ('47567498T',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('a',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Cap',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('dni','si','si','si','si','si','si','si','si','si',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `alarma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_general`
--

DROP TABLE IF EXISTS `info_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_general` (
  `dni` varchar(10) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `edat` int NOT NULL,
  `sexe` varchar(60) NOT NULL,
  `LLoc_naixement` varchar(30) NOT NULL,
  `Lloc_residencia` varchar(60) NOT NULL,
  `temps_residencia` int NOT NULL,
  `familia_origen_pare` varchar(60) NOT NULL,
  `familia_origen_mare` varchar(60) NOT NULL,
  `familia_origen_germans` varchar(60) NOT NULL,
  `familia_procreacio` varchar(60) NOT NULL,
  `rol_ocupa` varchar(60) NOT NULL,
  `membres_integren` varchar(60) NOT NULL,
  `viu_sol` varchar(60) NOT NULL,
  `problema_salut_actual` varchar(60) NOT NULL,
  `pren_medicaments_casa` varchar(60) NOT NULL,
  `quins_medicaments` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_general`
--

LOCK TABLES `info_general` WRITE;
/*!40000 ALTER TABLE `info_general` DISABLE KEYS */;
INSERT INTO `info_general` VALUES ('26869471C','Hayk Sánchez Hassan',75,'H','Ecuador','Marruecos',11,'Marruecos','Brasil','España','SI','Àvia','2','SI','Cap','SI','Nolotil'),('46579107J','Joan Brown Sánchez',72,'H','Brasil','España',1,'Armenia','Brasil','Armenia','SI','Cap','3','SI','a','NO','a'),('54870864V','Albert Idrissi Sargsyan',85,'H','Brasil','Ecuador',10,'Ecuador','Armenia','Brasil','SI','Pare','2','SI','Diabetes','SI','NS/NC'),('55614375F','Fatima Gonzalez Gonzalez',85,'D','España','Ecuador',1,'Marruecos','España','Marruecos','SI','Pare','2','SI','a','NO','a'),('97034731P','Maria Alaoui León',89,'D','Ecuador','Armenia',1,'España','Armenia','Ecuador','SI','Mare','2','SI','a','NO','a');
/*!40000 ALTER TABLE `info_general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necesitat_dormir_reposar`
--

DROP TABLE IF EXISTS `necesitat_dormir_reposar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necesitat_dormir_reposar` (
  `dni` varchar(10) NOT NULL,
  `hores_dorm` int NOT NULL,
  `migdia` varchar(60) NOT NULL,
  `qualitat_son` varchar(60) NOT NULL,
  `situacions_influencien_son` varchar(60) NOT NULL,
  `quienes_situacions_influencien_son` varchar(60) NOT NULL,
  `mitjans_utilitza_dormir_millor_reposar` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necesitat_dormir_reposar`
--

LOCK TABLES `necesitat_dormir_reposar` WRITE;
/*!40000 ALTER TABLE `necesitat_dormir_reposar` DISABLE KEYS */;
INSERT INTO `necesitat_dormir_reposar` VALUES ('26869471C',1,'SI','tranquil','on','','a','a'),('46579107J',1,'SI','tranquil','on','','a','a'),('54870864V',1,'SI','tranquil','on','','a','a'),('55614375F',1,'SI','tranquil','on','','a','a'),('97034731P',1,'SI','tranquil','on','','a','a'),('a',1,'SI','tranquil','on','','a','a');
/*!40000 ALTER TABLE `necesitat_dormir_reposar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_aprendre`
--

DROP TABLE IF EXISTS `necessitat_aprendre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_aprendre` (
  `dni` varchar(10) NOT NULL,
  `interes_coneixer_proces_salut` varchar(60) NOT NULL,
  `perque_interes_coneixer_proces_salut` varchar(60) NOT NULL,
  `situacions_dificulten_aprenentatge` varchar(60) NOT NULL,
  `mitjans_utilitza_aprendre` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_aprendre`
--

LOCK TABLES `necessitat_aprendre` WRITE;
/*!40000 ALTER TABLE `necessitat_aprendre` DISABLE KEYS */;
INSERT INTO `necessitat_aprendre` VALUES ('26869471C','s','a','a','a','a'),('46579107J','s','a','a','a','a'),('54870864V','s','a','a','a','a'),('55614375F','s','a','a','a','a'),('97034731P','s','a','a','a','a'),('a','s','a','a','a','a');
/*!40000 ALTER TABLE `necessitat_aprendre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_comunicar`
--

DROP TABLE IF EXISTS `necessitat_comunicar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_comunicar` (
  `dni` varchar(10) NOT NULL,
  `estat_consciencia` varchar(60) NOT NULL,
  `orientacio_temps_espai` varchar(60) NOT NULL,
  `estat_sesorials` varchar(60) NOT NULL,
  `expressio_verbal` varchar(60) NOT NULL,
  `descripccio_expressio_no_verbal` varchar(60) NOT NULL,
  `situacions_influencien_comunicacio` varchar(60) NOT NULL,
  `quines_situacions_influencien_comunicacio` varchar(60) NOT NULL,
  `mitjans_faciliten_comunicacio` varchar(60) NOT NULL,
  `altres_maniestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_comunicar`
--

LOCK TABLES `necessitat_comunicar` WRITE;
/*!40000 ALTER TABLE `necessitat_comunicar` DISABLE KEYS */;
INSERT INTO `necessitat_comunicar` VALUES ('26869471C','a','a','a','a','a','a','a','a','a'),('46579107J','a','a','a','a','a','a','a','a','a'),('54870864V','a','a','a','a','a','a','a','a','a'),('55614375F','a','a','a','a','a','a','a','a','a'),('97034731P','a','a','a','a','a','a','a','a','a'),('a','a','a','a','a','a','a','a','a','a');
/*!40000 ALTER TABLE `necessitat_comunicar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_eliminar`
--

DROP TABLE IF EXISTS `necessitat_eliminar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_eliminar` (
  `dni` varchar(10) NOT NULL,
  `frequencia_orina` int NOT NULL,
  `quantitat_orina` int NOT NULL,
  `aspecte_orina` varchar(60) NOT NULL,
  `frequencia_femtes` int NOT NULL,
  `quantitat_femtes` int NOT NULL,
  `aspecte_femtes` varchar(60) NOT NULL,
  `frequencia_suor` varchar(60) NOT NULL,
  `quantitat_suor` int NOT NULL,
  `aspecte_suor` varchar(60) NOT NULL,
  `frequencia_regla` varchar(60) NOT NULL,
  `situacions_influencien_habits_eliminacio` varchar(60) NOT NULL,
  `quines_influencien` varchar(60) NOT NULL,
  `mitjans_utilitzar_eliminar_millor` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_eliminar`
--

LOCK TABLES `necessitat_eliminar` WRITE;
/*!40000 ALTER TABLE `necessitat_eliminar` DISABLE KEYS */;
INSERT INTO `necessitat_eliminar` VALUES ('26869471C',1,1,'a',1,1,'a','a',1,'a','a','a','','',''),('46579107J',1,1,'a',1,1,'a','a',1,'a','a','a','','',''),('54870864V',1,1,'a',1,1,'a','a',1,'a','a','a','','',''),('55614375F',1,1,'a',1,1,'a','a',1,'a','a','a','','',''),('97034731P',1,1,'a',1,1,'a','a',1,'a','a','a','','',''),('a',1,1,'a',1,1,'a','a',1,'a','a','a','','','');
/*!40000 ALTER TABLE `necessitat_eliminar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_esbargir`
--

DROP TABLE IF EXISTS `necessitat_esbargir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_esbargir` (
  `dni` varchar(10) NOT NULL,
  `habits_esport` varchar(60) NOT NULL,
  `habits_lectura` varchar(60) NOT NULL,
  `habits_musica` varchar(60) NOT NULL,
  `habits_audiovisual` varchar(60) NOT NULL,
  `habits_altres` varchar(60) NOT NULL,
  `situacions_influencien_interes_esbargir` varchar(60) NOT NULL,
  `quines_situacions_influencien_interes_esbargir` varchar(60) NOT NULL,
  `mitjans_utilitza_millorar_realitzacio` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_esbargir`
--

LOCK TABLES `necessitat_esbargir` WRITE;
/*!40000 ALTER TABLE `necessitat_esbargir` DISABLE KEYS */;
INSERT INTO `necessitat_esbargir` VALUES ('26869471C','a','a','a','a','a','if','a','a','a'),('46579107J','a','a','a','a','a','if','a','a','a'),('54870864V','a','a','a','a','a','if','a','a','a'),('55614375F','a','a','a','a','a','if','a','a','a'),('97034731P','a','a','a','a','a','if','a','a','a'),('a','a','a','a','a','a','if','a','a','a');
/*!40000 ALTER TABLE `necessitat_esbargir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_estar_net_polt_protegir_teguments`
--

DROP TABLE IF EXISTS `necessitat_estar_net_polt_protegir_teguments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_estar_net_polt_protegir_teguments` (
  `dni` varchar(10) NOT NULL,
  `condicions_higeniques_pell_mucoses` varchar(60) NOT NULL,
  `descripcio_condicions_pell_mucosa` varchar(60) NOT NULL,
  `habits_higene_corporal` varchar(60) NOT NULL,
  `habits_higene_bucal` varchar(60) NOT NULL,
  `situacions_influencien_higene` varchar(60) NOT NULL,
  `quines_situacions_influencien_higene` varchar(60) NOT NULL,
  `mijans_utilitza_millorar_higene` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_estar_net_polt_protegir_teguments`
--

LOCK TABLES `necessitat_estar_net_polt_protegir_teguments` WRITE;
/*!40000 ALTER TABLE `necessitat_estar_net_polt_protegir_teguments` DISABLE KEYS */;
INSERT INTO `necessitat_estar_net_polt_protegir_teguments` VALUES ('26869471C','','','','','a','','',''),('46579107J','','','','','a','','',''),('54870864V','','','','','a','','',''),('55614375F','','','','','a','','',''),('97034731P','','','','','a','','',''),('a','','','','','a','','','');
/*!40000 ALTER TABLE `necessitat_estar_net_polt_protegir_teguments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_evitar_perills`
--

DROP TABLE IF EXISTS `necessitat_evitar_perills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_evitar_perills` (
  `dni` varchar(10) NOT NULL,
  `coneix_mides_prevencio` varchar(60) NOT NULL,
  `salubritat_habitat_1` varchar(60) NOT NULL,
  `situacions_circumstancies_seguretat_fisica_psicologica_social` varchar(60) NOT NULL,
  `quines_situacions_seguretat_fisica_psicologica_social` varchar(60) NOT NULL,
  `mitjans_utilitza_proteccio` varchar(60) NOT NULL,
  `altres_manifestacio` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_evitar_perills`
--

LOCK TABLES `necessitat_evitar_perills` WRITE;
/*!40000 ALTER TABLE `necessitat_evitar_perills` DISABLE KEYS */;
INSERT INTO `necessitat_evitar_perills` VALUES ('26869471C','','a','a','','',''),('46579107J','','a','a','','',''),('54870864V','','a','a','','',''),('55614375F','','a','a','','',''),('97034731P','','a','a','','',''),('a','','a','a','','','');
/*!40000 ALTER TABLE `necessitat_evitar_perills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_mantenir_temperatura_corporal_limits_normals`
--

DROP TABLE IF EXISTS `necessitat_mantenir_temperatura_corporal_limits_normals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_mantenir_temperatura_corporal_limits_normals` (
  `dni` varchar(10) NOT NULL,
  `temperatura_pell` int NOT NULL,
  `temperatura_axilar` int NOT NULL,
  `com_sent_temperatura_ambient` varchar(60) NOT NULL,
  `situacions_influencien_termoregulacio` varchar(60) NOT NULL,
  `quines_situacions_influencien_termoregulacio` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  `mitjans_utilitza_mantenir_temperatura` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_mantenir_temperatura_corporal_limits_normals`
--

LOCK TABLES `necessitat_mantenir_temperatura_corporal_limits_normals` WRITE;
/*!40000 ALTER TABLE `necessitat_mantenir_temperatura_corporal_limits_normals` DISABLE KEYS */;
INSERT INTO `necessitat_mantenir_temperatura_corporal_limits_normals` VALUES ('26869471C',1,1,'','a','','',''),('46579107J',1,1,'','a','','',''),('54870864V',1,1,'','a','','',''),('55614375F',1,1,'','a','','',''),('97034731P',1,1,'','a','','',''),('a',1,1,'','a','','','');
/*!40000 ALTER TABLE `necessitat_mantenir_temperatura_corporal_limits_normals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_menjar_beure`
--

DROP TABLE IF EXISTS `necessitat_menjar_beure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_menjar_beure` (
  `dni` varchar(10) NOT NULL,
  `pes` int NOT NULL,
  `talla` varchar(60) NOT NULL,
  `numero_dents_realitzar_funcio` int NOT NULL,
  `protesi_dental` varchar(60) NOT NULL,
  `caracteriques_deglucio` varchar(60) NOT NULL,
  `tipus_dieta` varchar(60) NOT NULL,
  `esmorzar` varchar(60) NOT NULL,
  `dinar` varchar(60) NOT NULL,
  `berenar` varchar(60) NOT NULL,
  `sopar` varchar(60) NOT NULL,
  `altres` varchar(60) NOT NULL,
  `sensacio_habitual_respecte_menjar` varchar(60) NOT NULL,
  `aliments_solits_liquids_no_agraden_intolera_restriccio` varchar(60) NOT NULL,
  `habitualment_menja` varchar(60) NOT NULL,
  `situacions_influencien_habits_alimentalis` varchar(60) NOT NULL,
  `quines_situacions` varchar(60) NOT NULL,
  `mitjans_utilitza_millorar` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  `masticacio` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_menjar_beure`
--

LOCK TABLES `necessitat_menjar_beure` WRITE;
/*!40000 ALTER TABLE `necessitat_menjar_beure` DISABLE KEYS */;
INSERT INTO `necessitat_menjar_beure` VALUES ('26869471C',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a'),('46579107J',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a'),('54870864V',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a'),('55614375F',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a'),('97034731P',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a'),('a',1,'a',1,'a','a','a','a','a','a','a','','','','a','a','','','','a');
/*!40000 ALTER TABLE `necessitat_menjar_beure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_moure_mantenir_postura_adequada`
--

DROP TABLE IF EXISTS `necessitat_moure_mantenir_postura_adequada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_moure_mantenir_postura_adequada` (
  `dni` varchar(10) NOT NULL,
  `pot_moure_totes_parts_cos` varchar(60) NOT NULL,
  `quines_parts` varchar(60) NOT NULL,
  `perque_pot_moure` varchar(60) NOT NULL,
  `es` varchar(60) NOT NULL,
  `postura_habitual` varchar(60) NOT NULL,
  `activitats_fisiques` varchar(60) NOT NULL,
  `situacions_interfereixen_mobilitat` varchar(60) NOT NULL,
  `quines_situacions_interfreixen_mobilitat` varchar(60) NOT NULL,
  `mitjans_utilitza_moure_millor_mantenir_postura_adequada` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_moure_mantenir_postura_adequada`
--

LOCK TABLES `necessitat_moure_mantenir_postura_adequada` WRITE;
/*!40000 ALTER TABLE `necessitat_moure_mantenir_postura_adequada` DISABLE KEYS */;
INSERT INTO `necessitat_moure_mantenir_postura_adequada` VALUES ('26869471C','a','','','a','a','','a','','',''),('46579107J','a','','','a','a','','a','','',''),('54870864V','a','','','a','a','','a','','',''),('55614375F','a','','','a','a','','a','','',''),('97034731P','a','','','a','a','','a','','',''),('a','a','','','a','a','','a','','','');
/*!40000 ALTER TABLE `necessitat_moure_mantenir_postura_adequada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_ocupar_realitzar`
--

DROP TABLE IF EXISTS `necessitat_ocupar_realitzar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_ocupar_realitzar` (
  `dni` varchar(10) NOT NULL,
  `rol_familiar` varchar(60) NOT NULL,
  `rol_social` varchar(60) NOT NULL,
  `tipus_ocupacio` varchar(60) NOT NULL,
  `situacions_desenvolupacio_rol_social_familiar` varchar(60) NOT NULL,
  `mitjans_utilitza_millorar_realitzacio` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_ocupar_realitzar`
--

LOCK TABLES `necessitat_ocupar_realitzar` WRITE;
/*!40000 ALTER TABLE `necessitat_ocupar_realitzar` DISABLE KEYS */;
INSERT INTO `necessitat_ocupar_realitzar` VALUES ('26869471C','a','a','a','a','a','a'),('46579107J','a','a','a','a','a','a'),('54870864V','a','a','a','a','a','a'),('55614375F','a','a','a','a','a','a'),('97034731P','a','a','a','a','a','a'),('a','a','a','a','a','a','a');
/*!40000 ALTER TABLE `necessitat_ocupar_realitzar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_respirar`
--

DROP TABLE IF EXISTS `necessitat_respirar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_respirar` (
  `dni` varchar(10) NOT NULL,
  `ritme` varchar(60) NOT NULL,
  `frequencia_cardiaca` int NOT NULL,
  `frequencia_r` int NOT NULL,
  `pa` int NOT NULL,
  `amplitud` int NOT NULL,
  `tipus_respiracio` varchar(60) NOT NULL,
  `orifisis_nasals_permeables` varchar(60) NOT NULL,
  `coloracio_mucoses` varchar(60) NOT NULL,
  `coloracio_pell` varchar(60) NOT NULL,
  `respiracio` varchar(60) NOT NULL,
  `tos` varchar(60) NOT NULL,
  `tos_descripcio` varchar(60) NOT NULL,
  `mucositat` varchar(60) NOT NULL,
  `mucositat_descripcio` varchar(60) NOT NULL,
  `expectoracio` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  `situacions_influencien_respiracio` varchar(60) NOT NULL,
  `quines_influencien` varchar(60) NOT NULL,
  `mitja_utilitza_respirar_millor` varchar(60) NOT NULL,
  `fuma` varchar(60) NOT NULL,
  `cigars_dia` int NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_respirar`
--

LOCK TABLES `necessitat_respirar` WRITE;
/*!40000 ALTER TABLE `necessitat_respirar` DISABLE KEYS */;
INSERT INTO `necessitat_respirar` VALUES ('26869471C','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1),('46579107J','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1),('54870864V','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1),('55614375F','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1),('97034731P','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1),('a','a',1,1,1,1,'a','a','a','a','a','a','a','a','a','a','a','a','','','a',1);
/*!40000 ALTER TABLE `necessitat_respirar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_vestir_desvestir`
--

DROP TABLE IF EXISTS `necessitat_vestir_desvestir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_vestir_desvestir` (
  `dni` varchar(10) NOT NULL,
  `significat_roba` varchar(60) NOT NULL,
  `tipus_roba` varchar(60) NOT NULL,
  `capacitat_vestir_desvestir` varchar(60) NOT NULL,
  `situacions_influencien_vestimenta` varchar(60) NOT NULL,
  `quines_situacions_influencien_vestimenta` varchar(60) NOT NULL,
  `mitjans_millorar_satisfaccio_vestir_desvestir` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_vestir_desvestir`
--

LOCK TABLES `necessitat_vestir_desvestir` WRITE;
/*!40000 ALTER TABLE `necessitat_vestir_desvestir` DISABLE KEYS */;
INSERT INTO `necessitat_vestir_desvestir` VALUES ('26869471C','','','a','a','','',''),('46579107J','','','a','a','','',''),('54870864V','','','a','a','','',''),('55614375F','','','a','a','','',''),('97034731P','','','a','a','','',''),('a','','','a','a','','','');
/*!40000 ALTER TABLE `necessitat_vestir_desvestir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necessitat_viure_creences_valors`
--

DROP TABLE IF EXISTS `necessitat_viure_creences_valors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necessitat_viure_creences_valors` (
  `dni` varchar(10) NOT NULL,
  `quines_creences_valors` varchar(60) NOT NULL,
  `mitjans_utilitza_viure_creences_valors` varchar(60) NOT NULL,
  `altres_manifestacions` varchar(60) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necessitat_viure_creences_valors`
--

LOCK TABLES `necessitat_viure_creences_valors` WRITE;
/*!40000 ALTER TABLE `necessitat_viure_creences_valors` DISABLE KEYS */;
INSERT INTO `necessitat_viure_creences_valors` VALUES ('26869471C','a','a','a'),('46579107J','a','a','a'),('54870864V','a','a','a'),('55614375F','a','a','a'),('97034731P','a','a','a'),('a','a','a','a');
/*!40000 ALTER TABLE `necessitat_viure_creences_valors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-05  8:55:55
