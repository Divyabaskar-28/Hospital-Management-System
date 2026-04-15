CREATE DATABASE  IF NOT EXISTS `hms` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hms`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hms
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `cms_patient`
--

DROP TABLE IF EXISTS `cms_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cms_patient` (
  `Patient_id` bigint NOT NULL AUTO_INCREMENT,
  `Patient_name` varchar(50) NOT NULL,
  `Patient_gender` varchar(50) DEFAULT NULL,
  `Patient_age` int DEFAULT NULL,
  `Patient_blood` varchar(50) DEFAULT NULL,
  `Patient_mobile` varchar(50) DEFAULT NULL,
  `Patient_disease` varchar(50) DEFAULT NULL,
  `Patient_room` varchar(50) DEFAULT NULL,
  `Patient_doctor` varchar(50) DEFAULT NULL,
  `Admitted_date` datetime DEFAULT NULL,
  `Patient_address` varchar(250) DEFAULT NULL,
  `Discharge_date` datetime DEFAULT NULL,
  `Estimated_bill` bigint DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_bill_patient`
--

DROP TABLE IF EXISTS `hms_bill_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_bill_patient` (
  `Bill_Patient_id` bigint NOT NULL AUTO_INCREMENT,
  `bill_Patient_RegId` bigint DEFAULT NULL,
  `Bill_DoctorFees` int DEFAULT NULL,
  `Bill_MedicalFees` int DEFAULT NULL,
  `Bill_RoomFees` int DEFAULT NULL,
  `Bill_TotalFees` varchar(50) DEFAULT NULL,
  `Bill_BalanceFees` varchar(50) DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Bill_Patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_doctor`
--

DROP TABLE IF EXISTS `hms_doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_doctor` (
  `doctor_Id` bigint NOT NULL AUTO_INCREMENT,
  `doctor_firstname` varchar(50) NOT NULL,
  `doctor_lastname` varchar(50) NOT NULL,
  `doctor_gender` varchar(10) DEFAULT NULL,
  `doctor_Mobile` varchar(15) DEFAULT NULL,
  `doctor_degree` varchar(50) DEFAULT NULL,
  `doctor_Specialist` varchar(50) DEFAULT NULL,
  `doctor_Address` varchar(100) DEFAULT NULL,
  `doctor_email` varchar(50) DEFAULT NULL,
  `doctor_blood` varchar(50) DEFAULT NULL,
  `User_id` bigint DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`doctor_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_login`
--

DROP TABLE IF EXISTS `hms_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_login` (
  `User_id` bigint NOT NULL AUTO_INCREMENT,
  `User_FirstName` varchar(50) NOT NULL,
  `User_LastName` varchar(50) DEFAULT NULL,
  `User_Mobile` varchar(50) DEFAULT NULL,
  `User_Email` varchar(50) DEFAULT NULL,
  `User_Login` varchar(50) DEFAULT NULL,
  `User_Password` varchar(50) DEFAULT NULL,
  `User_Role` varchar(50) DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_patient`
--

DROP TABLE IF EXISTS `hms_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_patient` (
  `Patient_id` bigint NOT NULL AUTO_INCREMENT,
  `Patient_RegId` bigint DEFAULT NULL,
  `Patient_name` varchar(50) NOT NULL,
  `Patient_gender` varchar(50) DEFAULT NULL,
  `Patient_age` int DEFAULT NULL,
  `Patient_blood` varchar(50) DEFAULT NULL,
  `Patient_mobile` varchar(50) DEFAULT NULL,
  `Patient_disease` varchar(50) DEFAULT NULL,
  `Patient_room` int DEFAULT NULL,
  `Patient_doctor` int DEFAULT NULL,
  `Admitted_date` datetime DEFAULT NULL,
  `Patient_address` varchar(250) DEFAULT NULL,
  `Discharge_date` datetime DEFAULT NULL,
  `Estimated_bill` bigint DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_payment_history`
--

DROP TABLE IF EXISTS `hms_payment_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_payment_history` (
  `Payment_Patient_id` bigint NOT NULL,
  `Payment_Patient_RegId` bigint DEFAULT NULL,
  `Payment_amount` bigint DEFAULT NULL,
  `Payment_Type` varchar(50) DEFAULT NULL,
  `Payment_Date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hms_room`
--

DROP TABLE IF EXISTS `hms_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hms_room` (
  `Room_id` bigint NOT NULL AUTO_INCREMENT,
  `Room_type` varchar(50) DEFAULT NULL,
  `Room_rate` bigint DEFAULT NULL,
  `Total_rooms` bigint DEFAULT NULL,
  `Createdby` bigint DEFAULT NULL,
  `Created_Date` datetime DEFAULT NULL,
  `Updatedby` bigint DEFAULT NULL,
  `Updated_Date` datetime DEFAULT NULL,
  `Deletedby` bigint DEFAULT NULL,
  `Deleted_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'hms'
--
/*!50003 DROP PROCEDURE IF EXISTS `Bill_IUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bill_IUD`(Patientid bigint,DoctorFees int,MedicalFees int,RoomFees int, TotalFees int)
BEGIN
declare  idd int;
set idd=(SELECT Patient_RegId  from hms_patient hm where hm.Patient_id=Patientid);
	IF EXISTS (SELECT * FROM Hms_Bill_Patient WHERE Bill_Patient_id = Patientid) THEN
			BEGIN
					Update Hms_Bill_Patient set Bill_DoctorFees=DoctorFees,Bill_MedicalFees=MedicalFees,Bill_RoomFees=RoomFees,
                    Bill_TotalFees=TotalFees,updated_Date=CURRENT_DATE where  Bill_Patient_id=Patientid;
                    Select 'U' as Result;
			END;
			ELSE
			BEGIN
            
				INSERT INTO Hms_Bill_Patient(Bill_Patient_id,bill_Patient_RegId,Bill_DoctorFees,Bill_MedicalFees,Bill_RoomFees,Bill_TotalFees,Bill_BalanceFees,Created_Date)
					VALUES(Patientid,idd,DoctorFees,MedicalFees,RoomFees,TotalFees,TotalFees,CURRENT_DATE);
					Select 'S' as Result;
			
			END;
		END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DischargeIUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DischargeIUD`(PPatientID bigint, PRegisterID bigint)
BEGIN
Declare amountflag int;
set amountflag =(select Bill_BalanceFees from Hms_Bill_Patient where bill_patient_id=PPatientID and bill_patient_regid=PRegisterID);
IF (amountflag=0) THEN
BEGIN
update hms_patient set Discharge_Date=current_date() where Patient_id=PPatientID and Patient_RegId=PRegisterID;
select 'S' Result;
END;
ELSE 
BEGIN
select 'D' Result;
END;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Discharge_Grid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Discharge_Grid`()
BEGIN
 SELECT ROW_NUMBER() OVER (ORDER BY Patient_Id) As Row_Num,
   Patient_id as Patient_Id,
   Patient_RegId as Patient_RegId,
   Patient_name as Pat_name,
   Patient_blood as Pat_blood,
   Patient_disease as Pat_disease,
   concat(dr.doctor_firstname,' ',dr.doctor_lastname) as Pat_doctor,
   DATE_fORMAT(Admitted_date,'%d/%m/%Y') as Pat_admitteddate
   from hms_patient As hm
   inner join hms_doctor As dr on dr.doctor_id=hm.Patient_doctor
   where hm.Discharge_Date is null;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Doctor_Grid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Doctor_Grid`()
BEGIN
SELECT ROW_NUMBER() OVER (ORDER BY doctor_Id) AS Row_Num,
	doctor_Id,
    doctor_firstname,
    doctor_lastname,
    doctor_Mobile,
    doctor_email,
    doctor_degree,
    doctor_Specialist
FROM hms_doctor;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Doctor_IUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Doctor_IUD`(doctorid bigint,
firstname varchar(50),lastname varchar(50),
gender varchar(10),mobile varchar(15),
degree varchar(50),specialist varchar(50),
Email varchar(50),Blood varchar(50),
Address varchar(250),Flag int,userid bigint)
BEGIN
IF Flag = 1 THEN
	IF EXISTS (SELECT * FROM hms_doctor WHERE doctor_Mobile = mobile) THEN
			BEGIN
					Select 'N' as Result;
			END;
			ELSE
			BEGIN
					INSERT INTO hms_doctor(doctor_firstname,doctor_lastname,doctor_gender,doctor_Mobile,doctor_degree,doctor_Specialist,doctor_Address,doctor_email,doctor_blood,
					User_Id,Createdby,Created_Date)
					VALUES(firstname,lastname,gender,mobile,degree,specialist,Address,Email,Blood,userid,userid,CURRENT_DATE);
					Select 'S' as Result;
			END;
		END IF;
END IF ;
  
IF Flag = 2 THEN
IF EXISTS (SELECT * FROM hms_doctor WHERE doctor_Mobile = mobile) THEN
			BEGIN
					Select 'N' as Result;
			END;
			ELSE
                BEGIN
					Update hms_doctor set doctor_firstname=firstname,doctor_lastname=lastname,
                    doctor_gender=gender,doctor_Mobile=mobile,doctor_degree=degree,doctor_Specialist=specialist,
					doctor_Address=Address,doctor_email=Email,doctor_blood=Blood,updatedby=1,updated_Date=CURRENT_DATE WHERE doctor_Id = doctorid;
					Select 'S' as Result;
				END;
                END IF;
END IF;
IF Flag = 3 THEN

		Delete from hms_doctor WHERE doctor_Id = doctorid;

        Select 'S' as Result;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllDropDown` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllDropDown`()
BEGIN
select doctor_id, concat(doctor_firstname,' ',doctor_Lastname)as doctor_firstname from hms_doctor;
select Room_id,Room_type from hms_room;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDetailDoctor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDetailDoctor`(doctorid bigint)
BEGIN
SELECT ROW_NUMBER() OVER (ORDER BY doctor_Id) AS Row_Num,
	doctor_Id,
    doctor_firstname,
    doctor_lastname,
    doctor_Mobile,
    doctor_email,
    doctor_gender,
    doctor_blood,
    doctor_degree,
    doctor_Specialist,
    doctor_Address
FROM hms_doctor where doctor_Id=doctorid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPatientDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetPatientDetails`(MobileNo varchar(15))
BEGIN
declare  idd int;
set idd=(SELECT Patient_RegId  from hms_patient where Patient_mobile=MobileNo or Patient_RegId=MobileNo);
SELECT Patient_id,Patient_name,Patient_gender,Patient_age,Patient_blood,Patient_mobile,Patient_disease,
hr.room_type as Patient_room,concat(dr.doctor_firstname,' ',dr.doctor_lastname) as Patient_doctor,DATE_fORMAT(Admitted_date,'%d/%m/%Y') as Admitted_date,
ifnull(hb.Bill_DoctorFees,0) as Bill_DoctorFees ,ifnull(hb.Bill_MedicalFees,0) as Bill_MedicalFees,ifnull(hb.Bill_RoomFees,0)as Bill_RoomFees, ifnull(hb.Bill_TotalFees,0) as Bill_TotalFees,
ifnull(hb.Bill_BalanceFees,0) as Bill_BalanceFees
FROM  hms_patient hm
inner join hms_doctor As dr on dr.doctor_id=hm.Patient_doctor
inner join hms_room as hr on hr.room_id=hm.Patient_room
left join Hms_Bill_Patient as hb on hb.bill_Patient_RegId=hm.Patient_RegId or hb.Bill_Patient_id=hm.Patient_id
where Patient_mobile=MobileNo or Patient_RegId=MobileNo;
select hb.Bill_MedicalFees,hb.Bill_MedicalFees,hb.Bill_RoomFees, hb.Bill_TotalFees from Hms_Bill_Patient where Bill_Patient_id= idd and bill_Patient_RegId=MobileNo;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Get_Patient_Detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_Patient_Detail`(PId bigint)
BEGIN
select  Patient_id as Patient_Id,
   Patient_name as Pat_name,
   Patient_gender as Pat_gender,
   Patient_age as Pat_age,
   Patient_blood as Pat_blood,
   Patient_mobile as Pat_mobile,
   Patient_disease as Pat_disease,
   Patient_room as Pat_room,
   Patient_doctor as Pat_doctor,
   DATE_fORMAT(Admitted_date,'%d-%m-%Y') as Pat_admitteddate,
   Patient_address as Pat_address
   from hms_patient where Patient_Id=PId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Get_Room_Detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_Room_Detail`(RRoom_ID bigint)
BEGIN
  select Room_id,
  Room_type,
  Room_rate,
  Total_rooms
  from hms_room where Room_id=RRoom_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Patient_Grid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Patient_Grid`()
BEGIN
   SELECT ROW_NUMBER() OVER (ORDER BY Patient_Id) As Row_Num,
   Patient_id as Patient_Id,
   Patient_RegId as Patient_RegId,
   Patient_name as Pat_name,
   Patient_blood as Pat_blood,
   Patient_disease as Pat_disease,
   concat(dr.doctor_firstname,' ',dr.doctor_lastname) as Pat_doctor,
   DATE_fORMAT(Admitted_date,'%d/%m/%Y') as Pat_admitteddate
   from hms_patient As hm
   inner join hms_doctor As dr on dr.doctor_id=hm.Patient_doctor;
   
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Patient_IUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Patient_IUD`(PId bigint,PName varchar(50),PGender varchar(50),PAgee int,PBlood varchar(50),PMobile bigint,PDisease varchar(50),PRoom varchar(50),PDoctor varchar(50),PAdmitteddate datetime,PAddress varchar(50),Flag int)
BEGIN
  IF Flag=1 THEN
     BEGIN
         IF EXISTS(select PName,PMobile from hms_patient where Patient_name=PName AND Patient_mobile=PMobile)THEN
            BEGIN
                 select 'N' As Result;
			END;
		 ELSE
             BEGIN
	             INSERT into hms_patient(Patient_RegId,Patient_name,Patient_gender,Patient_age,Patient_blood,Patient_mobile,Patient_disease,Patient_room,Patient_doctor,Admitted_date,Patient_Address,created_date)
                 VALUES(FLOOR(RAND() * 1000) + 10001,PName,PGender,PAgee,PBlood,PMobile,PDisease,PRoom,PDoctor,PAdmitteddate,PAddress,current_timestamp());
				 select 'S' As Result;
              END;
		 END IF;
	 END;
  END IF;
  IF Flag=2 THEN
     BEGIN
       update hms_patient set Patient_name=PName,Patient_gender=PGender,Patient_age=PAgee,Patient_blood=PBlood,Patient_mobile=PMobile,Patient_disease=PDisease,Patient_room=PRoom,Patient_doctor=PDoctor,Admitted_date=PAdmitteddate,Patient_Address= PAddress where Patient_id=PId;
        select 'S' As Result;
	 END;
  END IF;
  IF Flag=3 THEN
     BEGIN
        delete from hms_patient where Patient_id=PId;
         select 'S' As Result;
     END;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Patient_Report` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Patient_Report`()
BEGIN
 SELECT ROW_NUMBER() OVER (ORDER BY Patient_Id) As Row_Num,
   Patient_id as Patient_Id,
   Patient_RegId as Patient_RegId,
   Patient_name as Pat_name,
   Patient_blood as Pat_blood,
   Patient_disease as Pat_disease,
   concat(dr.doctor_firstname,' ',dr.doctor_lastname) as Pat_doctor,
   DATE_fORMAT(Admitted_date,'%d/%m/%Y') as Pat_admitteddate,
    DATE_fORMAT(Discharge_Date,'%d/%m/%Y') as Discharge_Date
   from hms_patient As hm
   inner join hms_doctor As dr on dr.doctor_id=hm.Patient_doctor
   where  Admitted_date between '2025-03-18' and '2025-03-20' and hm.Discharge_Date is not null;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Payment_IUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Payment_IUD`(PPatient_ID bigint,AAmount int,PPaymenttype varchar(20),BBalanceamount int)
BEGIN
declare  idd int;
set idd=(SELECT Patient_RegId  from hms_patient hm where hm.Patient_id=PPatient_ID);
SELECT Patient_id  from hms_patient hm where hm.Patient_id=PPatient_ID;
Update Hms_Bill_Patient set Bill_BalanceFees=BBalanceamount,updated_Date=CURRENT_DATE where  Bill_Patient_id=PPatient_ID;
INSERT INTO hms_payment_history
(Payment_Patient_id,Payment_Patient_RegId,Payment_amount,Payment_Type,Payment_Date)VALUES
(PPatient_ID,idd,AAmount,PPaymenttype,CURRENT_DATE);
Select 'U' as Result;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Room_Grid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Room_Grid`()
BEGIN
   SELECT ROW_NUMBER() OVER (ORDER BY Room_id) As Row_Num,
   Room_id as Room_Id,
   Room_type,
   Room_rate,
   Total_rooms
   from hms_room;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Room_IUD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Room_IUD`(Roomid bigint, RType varchar(50), RRate  bigint, TRooms bigint, Flag int,User_id bigint)
BEGIN
  IF Flag=1 THEN
	 BEGIN
         IF exists(select RType from hms_room where Room_type=RType) then
			BEGIN 
					SELECT 'N'  As Result;
			END;
		ELSE
			BEGIN
				INSERT INTO hms_room(Room_type,Room_rate,Total_rooms,createdby,created_date)VALUES (RType,RRate,TRooms,User_id,current_timestamp());
				select 'S' As Result;
			END;
		END IF;
      END;
      END IF;
  IF Flag=2 THEN
	 BEGIN
	   update hms_room set Room_type=RType, Room_rate=RRate, Total_rooms=TRooms,updatedby=User_id,updated_date=current_timestamp() where Room_id=Roomid;
        select 'S' As Result;
     END;
  END IF;
  IF Flag=3 THEN
	 BEGIN
       delete from hms_room where  Room_id=Roomid;
        select 'S' As Result;
	 END;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `User_Login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `User_Login`(uusername varchar(50),upass varchar(50))
BEGIN
IF EXISTS (SELECT * FROM hms_login WHERE User_Login = uusername) THEN
   BEGIN
          IF EXISTS (SELECT * FROM hms_login WHERE User_Password = upass) THEN
			 BEGIN
                   IF EXISTS (SELECT * FROM hms_login WHERE User_Login = uusername and User_Password = upass) THEN
					   BEGIN
                         select 'S' As Result,user_id FROM hms_login WHERE User_Login = uusername and user_Password=upass;
					   END;
				   ELSE
                       BEGIN
						 select 'N' As Result;
					   END;
				   END IF;
			 END;
		  ELSE 
                       BEGIN
				         select 'P' As Result;
					   END;
		    END IF;
          END;
          ELSE 
                       BEGIN
                          select 'U' As Result;
					   END;
END If;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-16 21:07:06
