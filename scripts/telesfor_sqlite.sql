PRAGMA synchronous = OFF;
PRAGMA journal_mode = MEMORY;
BEGIN TRANSACTION;
CREATE TABLE `alarma` (
  `dni` varchar(10) NOT NULL
,  `tos` varchar(3) DEFAULT NULL
,  `expectoracio` varchar(3) DEFAULT NULL
,  `situacions_influenica_respiracio` varchar(3) DEFAULT NULL
,  `fuma` varchar(3) DEFAULT NULL
,  `situacion_influencien_aliments` varchar(3) DEFAULT NULL
,  `situacions_influencien_eliminacio` varchar(3) DEFAULT NULL
,  `situacions_influencien_moure_cos` varchar(3) DEFAULT NULL
,  `situacions_influencien_son` varchar(3) DEFAULT NULL
,  `situacions_influencien_vestimenta` varchar(3) DEFAULT NULL
,  `situacions_influencien_termoregualcio` varchar(3) DEFAULT NULL
,  `situacions_influencien_higene` varchar(3) DEFAULT NULL
,  `situacions_influencien_seguretat` varchar(3) DEFAULT NULL
,  `situacions_influencien_comunicacio` varchar(3) DEFAULT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `info_general` (
  `dni` varchar(10) NOT NULL
,  `nom` varchar(60) NOT NULL
,  `edat` integer NOT NULL
,  `sexe` varchar(60) NOT NULL
,  `LLoc_naixement` varchar(30) NOT NULL
,  `Lloc_residencia` varchar(60) NOT NULL
,  `temps_residencia` integer NOT NULL
,  `familia_origen_pare` varchar(60) NOT NULL
,  `familia_origen_mare` varchar(60) NOT NULL
,  `familia_origen_germans` varchar(60) NOT NULL
,  `familia_procreacio` varchar(60) NOT NULL
,  `rol_ocupa` varchar(60) NOT NULL
,  `membres_integren` varchar(60) NOT NULL
,  `viu_sol` varchar(60) NOT NULL
,  `problema_salut_actual` varchar(60) NOT NULL
,  `pren_medicaments_casa` varchar(60) NOT NULL
,  `quins_medicaments` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necesitat_dormir_reposar` (
  `dni` varchar(10) NOT NULL
,  `hores_dorm` integer NOT NULL
,  `migdia` varchar(60) NOT NULL
,  `qualitat_son` varchar(60) NOT NULL
,  `situacions_influencien_son` varchar(60) NOT NULL
,  `quienes_situacions_influencien_son` varchar(60) NOT NULL
,  `mitjans_utilitza_dormir_millor_reposar` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_aprendre` (
  `dni` varchar(10) NOT NULL
,  `interes_coneixer_proces_salut` varchar(60) NOT NULL
,  `perque_interes_coneixer_proces_salut` varchar(60) NOT NULL
,  `situacions_dificulten_aprenentatge` varchar(60) NOT NULL
,  `mitjans_utilitza_aprendre` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_comunicar` (
  `dni` varchar(10) NOT NULL
,  `estat_consciencia` varchar(60) NOT NULL
,  `orientacio_temps_espai` varchar(60) NOT NULL
,  `estat_sesorials` varchar(60) NOT NULL
,  `expressio_verbal` varchar(60) NOT NULL
,  `descripccio_expressio_no_verbal` varchar(60) NOT NULL
,  `situacions_influencien_comunicacio` varchar(60) NOT NULL
,  `quines_situacions_influencien_comunicacio` varchar(60) NOT NULL
,  `mitjans_faciliten_comunicacio` varchar(60) NOT NULL
,  `altres_maniestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_eliminar` (
  `dni` varchar(10) NOT NULL
,  `frequencia_orina` integer NOT NULL
,  `quantitat_orina` integer NOT NULL
,  `aspecte_orina` varchar(60) NOT NULL
,  `frequencia_femtes` integer NOT NULL
,  `quantitat_femtes` integer NOT NULL
,  `aspecte_femtes` varchar(60) NOT NULL
,  `frequencia_suor` varchar(60) NOT NULL
,  `quantitat_suor` integer NOT NULL
,  `aspecte_suor` varchar(60) NOT NULL
,  `frequencia_regla` varchar(60) NOT NULL
,  `situacions_influencien_habits_eliminacio` varchar(60) NOT NULL
,  `quines_influencien` varchar(60) NOT NULL
,  `mitjans_utilitzar_eliminar_millor` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_esbargir` (
  `dni` varchar(10) NOT NULL
,  `habits_esport` varchar(60) NOT NULL
,  `habits_lectura` varchar(60) NOT NULL
,  `habits_musica` varchar(60) NOT NULL
,  `habits_audiovisual` varchar(60) NOT NULL
,  `habits_altres` varchar(60) NOT NULL
,  `situacions_influencien_interes_esbargir` varchar(60) NOT NULL
,  `quines_situacions_influencien_interes_esbargir` varchar(60) NOT NULL
,  `mitjans_utilitza_millorar_realitzacio` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_estar_net_polt_protegir_teguments` (
  `dni` varchar(10) NOT NULL
,  `condicions_higeniques_pell_mucoses` varchar(60) NOT NULL
,  `descripcio_condicions_pell_mucosa` varchar(60) NOT NULL
,  `habits_higene_corporal` varchar(60) NOT NULL
,  `habits_higene_bucal` varchar(60) NOT NULL
,  `situacions_influencien_higene` varchar(60) NOT NULL
,  `quines_situacions_influencien_higene` varchar(60) NOT NULL
,  `mijans_utilitza_millorar_higene` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_evitar_perills` (
  `dni` varchar(10) NOT NULL
,  `coneix_mides_prevencio` varchar(60) NOT NULL
,  `salubritat_habitat_1` varchar(60) NOT NULL
,  `situacions_circumstancies_seguretat_fisica_psicologica_social` varchar(60) NOT NULL
,  `quines_situacions_seguretat_fisica_psicologica_social` varchar(60) NOT NULL
,  `mitjans_utilitza_proteccio` varchar(60) NOT NULL
,  `altres_manifestacio` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_mantenir_temperatura_corporal_limits_normals` (
  `dni` varchar(10) NOT NULL
,  `temperatura_pell` integer NOT NULL
,  `temperatura_axilar` integer NOT NULL
,  `com_sent_temperatura_ambient` varchar(60) NOT NULL
,  `situacions_influencien_termoregulacio` varchar(60) NOT NULL
,  `quines_situacions_influencien_termoregulacio` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  `mitjans_utilitza_mantenir_temperatura` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_menjar_beure` (
  `dni` varchar(10) NOT NULL
,  `pes` integer NOT NULL
,  `talla` varchar(60) NOT NULL
,  `numero_dents_realitzar_funcio` integer NOT NULL
,  `protesi_dental` varchar(60) NOT NULL
,  `caracteriques_deglucio` varchar(60) NOT NULL
,  `tipus_dieta` varchar(60) NOT NULL
,  `esmorzar` varchar(60) NOT NULL
,  `dinar` varchar(60) NOT NULL
,  `berenar` varchar(60) NOT NULL
,  `sopar` varchar(60) NOT NULL
,  `altres` varchar(60) NOT NULL
,  `sensacio_habitual_respecte_menjar` varchar(60) NOT NULL
,  `aliments_solits_liquids_no_agraden_intolera_restriccio` varchar(60) NOT NULL
,  `habitualment_menja` varchar(60) NOT NULL
,  `situacions_influencien_habits_alimentalis` varchar(60) NOT NULL
,  `quines_situacions` varchar(60) NOT NULL
,  `mitjans_utilitza_millorar` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  `masticacio` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_moure_mantenir_postura_adequada` (
  `dni` varchar(10) NOT NULL
,  `pot_moure_totes_parts_cos` varchar(60) NOT NULL
,  `quines_parts` varchar(60) NOT NULL
,  `perque_pot_moure` varchar(60) NOT NULL
,  `es` varchar(60) NOT NULL
,  `postura_habitual` varchar(60) NOT NULL
,  `activitats_fisiques` varchar(60) NOT NULL
,  `situacions_interfereixen_mobilitat` varchar(60) NOT NULL
,  `quines_situacions_interfreixen_mobilitat` varchar(60) NOT NULL
,  `mitjans_utilitza_moure_millor_mantenir_postura_adequada` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_ocupar_realitzar` (
  `dni` varchar(10) NOT NULL
,  `rol_familiar` varchar(60) NOT NULL
,  `rol_social` varchar(60) NOT NULL
,  `tipus_ocupacio` varchar(60) NOT NULL
,  `situacions_desenvolupacio_rol_social_familiar` varchar(60) NOT NULL
,  `mitjans_utilitza_millorar_realitzacio` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_respirar` (
  `dni` varchar(10) NOT NULL
,  `ritme` varchar(60) NOT NULL
,  `frequencia_cardiaca` integer NOT NULL
,  `frequencia_r` integer NOT NULL
,  `pa` integer NOT NULL
,  `amplitud` integer NOT NULL
,  `tipus_respiracio` varchar(60) NOT NULL
,  `orifisis_nasals_permeables` varchar(60) NOT NULL
,  `coloracio_mucoses` varchar(60) NOT NULL
,  `coloracio_pell` varchar(60) NOT NULL
,  `respiracio` varchar(60) NOT NULL
,  `tos` varchar(60) NOT NULL
,  `tos_descripcio` varchar(60) NOT NULL
,  `mucositat` varchar(60) NOT NULL
,  `mucositat_descripcio` varchar(60) NOT NULL
,  `expectoracio` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  `situacions_influencien_respiracio` varchar(60) NOT NULL
,  `quines_influencien` varchar(60) NOT NULL
,  `mitja_utilitza_respirar_millor` varchar(60) NOT NULL
,  `fuma` varchar(60) NOT NULL
,  `cigars_dia` integer NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_vestir_desvestir` (
  `dni` varchar(10) NOT NULL
,  `significat_roba` varchar(60) NOT NULL
,  `tipus_roba` varchar(60) NOT NULL
,  `capacitat_vestir_desvestir` varchar(60) NOT NULL
,  `situacions_influencien_vestimenta` varchar(60) NOT NULL
,  `quines_situacions_influencien_vestimenta` varchar(60) NOT NULL
,  `mitjans_millorar_satisfaccio_vestir_desvestir` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
CREATE TABLE `necessitat_viure_creences_valors` (
  `dni` varchar(10) NOT NULL
,  `quines_creences_valors` varchar(60) NOT NULL
,  `mitjans_utilitza_viure_creences_valors` varchar(60) NOT NULL
,  `altres_manifestacions` varchar(60) NOT NULL
,  PRIMARY KEY (`dni`)
);
END TRANSACTION;
