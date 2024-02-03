from config import CONTRASENA

DB = "SQLITE"
# DB = 'MYSQL'
if DB == "MYSQL":
    import mysql.connector
elif DB == "SQLITE":
    import sqlite3
import os


def conectarBD():
    if DB == "MYSQL":
        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password=CONTRASENA,
            database="formulario_cai",
        )
    elif DB == "SQLITE":
        if os.getenv("HOSTING", default=None) == None:
            db = sqlite3.connect("formulario_cai.db")
        else:
            db = sqlite3.connect("/home/telesfor/CAI_DAW/formulario_cai.db")
    return db


def initdb():
    db = conectarBD()
    cursor = db.cursor()
    try:
        # AQUÍ EJECUTAR SCRIPT SI BD ESTÁ VACÍA
        if DB == "MYSQL":
            # TO DEBUG
            query = "SHOW TABLES;"
            cursor.execute(query)
            tables = cursor.fetchall()
            if tables == []:
                path = "./scripts/telesfor.sql"
                sql_file = open(path, "r", encoding="UTF-8")
                sql_script = sql_file.read()
                cursor.execute(sql_script)
        elif DB == "SQLITE":
            query = "SELECT name FROM sqlite_master WHERE type='table';"
            cursor.execute(query)
            tables = cursor.fetchall()
            if tables == []:
                path = "./scripts/telesfor_sqlite.sql"
                sql_file = open(path, "r", encoding="UTF-8")
                sql_script = sql_file.read()
                cursor.executescript(sql_script)
    except:
        if DB == "MYSQL":
            print(str(mysql.connector.errors.Error()))
        elif DB == "SQLITE":
            pass
    db.commit()
    db.close()
    return


def insertarDatosDB(consulta):
    db = conectarBD()
    cursor = db.cursor()
    try:
        print(consulta)
        cursor.execute(consulta)
    except:
        if DB == "MYSQL":
            print(str(mysql.connector.errors.Error()))
        elif DB == "SQLITE":
            pass
    db.commit()
    db.close()
    return


def obtenerDatos(consulta):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(consulta)
    data = cursor.fetchall()
    print(data)
    return data


def obtenerNumPacientes(consulta):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(consulta)
    numPacient = cursor.fetchall()[0][0]
    return numPacient


def rellenar_datos_1(
    dni,
    nom,
    edat,
    sexe,
    LLoc_naixement,
    Lloc_residencia,
    temps_residencia,
    familia_origen_pare,
    familia_origen_mare,
    familia_origen_germans,
    familia_procreacio,
    rol_ocupa,
    membres_integren,
    viu_sol,
    problema_salut_actual,
    pren_medicaments_casa,
    quins_medicaments,
):
    consulta = f"""insert into info_general (dni,nom,edat,sexe,Lloc_naixement,Lloc_residencia,temps_residencia,familia_origen_pare,familia_origen_mare,familia_origen_germans,familia_procreacio,rol_ocupa,membres_integren,viu_sol,problema_salut_actual,pren_medicaments_casa,quins_medicaments) 
    values ('{dni}','{nom}',{edat},'{sexe}','{LLoc_naixement}','{Lloc_residencia}',{temps_residencia},'{familia_origen_pare}','{familia_origen_mare}','{familia_origen_germans}','{familia_procreacio}','{rol_ocupa}','{membres_integren}','{viu_sol}','{problema_salut_actual}','{pren_medicaments_casa}','{quins_medicaments}')"""
    insertarDatosDB(consulta)

    crearAlarma = f"""insert into alarma (dni) values ('{dni}')"""
    insertarDatosDB(crearAlarma)


def getData1(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM info_general where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_2(
    dni,
    ritme,
    frequencia_cardiaca,
    frequencia_r,
    pa,
    amplitud,
    tipus_respiracio,
    orifisis_nasals_permeables,
    coloracio_mucoses,
    coloracio_pell,
    respiracio,
    tos,
    tos_descripcio,
    mucositat,
    mucositat_descripcio,
    expectoracio,
    altres_manifestacions,
    situacions_influencien_respiracio,
    quines_influencien,
    mitja_utilitza_respirar_millor,
    fuma,
    cigars_dia,
):
    consulta = f"""insert into necessitat_respirar (dni,ritme,frequencia_cardiaca,frequencia_r,pa,amplitud,tipus_respiracio,orifisis_nasals_permeables,coloracio_mucoses,coloracio_pell,respiracio,tos,tos_descripcio,mucositat,mucositat_descripcio,expectoracio,altres_manifestacions,situacions_influencien_respiracio,quines_influencien,mitja_utilitza_respirar_millor,fuma,cigars_dia) 
    values ('{dni}','{ritme}',{frequencia_cardiaca},{frequencia_r},{pa},{amplitud},'{tipus_respiracio}','{orifisis_nasals_permeables}','{coloracio_mucoses}','{coloracio_pell}','{respiracio}','{tos}','{tos_descripcio}','{mucositat}','{mucositat_descripcio}','{expectoracio}','{altres_manifestacions}','{situacions_influencien_respiracio}','{quines_influencien}','{mitja_utilitza_respirar_millor}','{fuma}',{cigars_dia});"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET tos="{tos}",expectoracio="{expectoracio}",situacions_influenica_respiracio="{situacions_influencien_respiracio}",fuma="{fuma}" WHERE dni='{dni}';"""
    insertarDatosDB(rellenarAlarma)


def getData2(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_respirar where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_3(
    dni,
    pes,
    talla,
    numero_dents_realitzar_funcio,
    protesi_dental,
    masticacio,
    caracteriques_deglucio,
    tipus_dieta,
    esmorzar,
    dinar,
    berenar,
    sopar,
    altres,
    sensacio_habitual_respecte_menjar,
    aliments_solits_liquids_no_agraden_intolera_restriccio,
    habitualment_menja,
    situacions_influencien_habits_alimentalis,
    quines_situacions,
    mitjans_utilitza_millorar,
    altres_manifestacions,
):
    consulta = f"""insert into necessitat_menjar_beure (dni,pes,talla,numero_dents_realitzar_funcio,protesi_dental,masticacio, caracteriques_deglucio,tipus_dieta,esmorzar,dinar,berenar,sopar,altres,sensacio_habitual_respecte_menjar,aliments_solits_liquids_no_agraden_intolera_restriccio,habitualment_menja,situacions_influencien_habits_alimentalis,quines_situacions,mitjans_utilitza_millorar,altres_manifestacions)
    values ('{dni}',{pes},'{talla}',{numero_dents_realitzar_funcio},'{protesi_dental}','{masticacio}','{caracteriques_deglucio}','{tipus_dieta}','{esmorzar}','{dinar}','{berenar}','{sopar}','{altres}','{sensacio_habitual_respecte_menjar}','{aliments_solits_liquids_no_agraden_intolera_restriccio}','{habitualment_menja}','{situacions_influencien_habits_alimentalis}','{quines_situacions}','{mitjans_utilitza_millorar}','{altres_manifestacions}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacion_influencien_aliments="{situacions_influencien_habits_alimentalis}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData3(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_menjar_beure where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_4(
    dni,
    frequencia_orina,
    quantitat_orina,
    aspecte_orina,
    frequencia_femtes,
    quantitat_femtes,
    aspecte_femtes,
    frequencia_suor,
    quantitat_suor,
    aspecte_suor,
    frequencia_regla,
    situacions_influencien_habits_eliminacio,
    quines_influencien,
    mitjans_utilitzar_eliminar_millor,
    altres_manifestacions,
):
    consulta = f"""insert into necessitat_eliminar (dni,frequencia_orina,quantitat_orina,aspecte_orina,frequencia_femtes,quantitat_femtes,aspecte_femtes,frequencia_suor,quantitat_suor,aspecte_suor,frequencia_regla,situacions_influencien_habits_eliminacio,quines_influencien,mitjans_utilitzar_eliminar_millor,altres_manifestacions) 
    values ('{dni}',{frequencia_orina},{quantitat_orina},'{aspecte_orina}',{frequencia_femtes},{quantitat_femtes},'{aspecte_femtes}','{frequencia_suor}',{quantitat_suor},'{aspecte_suor}','{frequencia_regla}','{situacions_influencien_habits_eliminacio}','{quines_influencien}','{mitjans_utilitzar_eliminar_millor}','{altres_manifestacions}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_eliminacio="{situacions_influencien_habits_eliminacio}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData4(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_eliminar where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_5(
    dni,
    pot_moure_totes_parts_cos,
    quines_parts,
    perque_pot_moure,
    es,
    postura_habitual,
    activitats_fisiques,
    situacions_interfereixen_mobilitat,
    quines_situacions_interfreixen_mobilitat,
    mitjans_utilitza_moure_millor_mantenir_postura_adequada,
    altres_manifestacions,
):
    consulta = f"""insert into necessitat_moure_mantenir_postura_adequada (dni,pot_moure_totes_parts_cos,quines_parts,perque_pot_moure,es,postura_habitual,activitats_fisiques,situacions_interfereixen_mobilitat,quines_situacions_interfreixen_mobilitat,mitjans_utilitza_moure_millor_mantenir_postura_adequada,altres_manifestacions) 
    values ('{dni}','{pot_moure_totes_parts_cos}','{quines_parts}','{perque_pot_moure}','{es}','{postura_habitual}','{activitats_fisiques}','{situacions_interfereixen_mobilitat}','{quines_situacions_interfreixen_mobilitat}','{mitjans_utilitza_moure_millor_mantenir_postura_adequada}','{altres_manifestacions}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_moure_cos="{situacions_interfereixen_mobilitat}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData5(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(
        f"""SELECT * FROM necessitat_moure_mantenir_postura_adequada where dni = '{dni}'"""
    )
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_6(
    dni,
    hores_dorm,
    migdia,
    qualitat_son,
    situacions_influencien,
    quines_situacions_influencien,
    mitjans_dormir,
    altres_manifestacions,
):
    consulta = f"""insert into necesitat_dormir_reposar (dni,hores_dorm,migdia,qualitat_son,situacions_influencien_son,quienes_situacions_influencien_son,mitjans_utilitza_dormir_millor_reposar,altres_manifestacions) 
    values ('{dni}',{hores_dorm},'{migdia}','{qualitat_son}','{situacions_influencien}','{quines_situacions_influencien}','{mitjans_dormir}','{altres_manifestacions}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_son="{situacions_influencien}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData6(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necesitat_dormir_reposar where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_7(
    dni, significat_roba, tipus_roba, capacitat, situacions, quines, mitjans, altres
):
    consulta = f""" insert into necessitat_vestir_desvestir(
        dni,significat_roba,tipus_roba,capacitat_vestir_desvestir,situacions_influencien_vestimenta,
        quines_situacions_influencien_vestimenta,mitjans_millorar_satisfaccio_vestir_desvestir,altres_manifestacions)
        values ('{dni}','{significat_roba}','{tipus_roba}','{capacitat}','{situacions}','{quines}','{mitjans}','{altres}'); """
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_vestimenta="{situacions}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData7(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_vestir_desvestir where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_8(
    dni,
    temperatura_pell,
    temperatura_axilar,
    com_sent,
    situacions,
    quines,
    altres,
    mitjans,
):
    consulta = f""" insert into necessitat_mantenir_temperatura_corporal_limits_normals (
        dni,temperatura_pell,temperatura_axilar,com_sent_temperatura_ambient,situacions_influencien_termoregulacio,
        quines_situacions_influencien_termoregulacio,altres_manifestacions,mitjans_utilitza_mantenir_temperatura)
        values ('{dni}',{temperatura_pell},{temperatura_axilar},'{com_sent}','{situacions}','{quines}','{altres}','{mitjans}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_termoregualcio="{situacions}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData8(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(
        f"""SELECT * FROM necessitat_mantenir_temperatura_corporal_limits_normals where dni = '{dni}'"""
    )
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_9(
    dni,
    condicions,
    descripcio,
    habits_corporal,
    habits_bucal,
    situacions,
    quines,
    mitjans,
    altres,
):
    consulta = f""" insert into necessitat_estar_net_polt_protegir_teguments (
        dni,condicions_higeniques_pell_mucoses,descripcio_condicions_pell_mucosa,habits_higene_corporal,habits_higene_bucal,
        situacions_influencien_higene,quines_situacions_influencien_higene,mijans_utilitza_millorar_higene,altres_manifestacions)
        values ('{dni}','{condicions}','{descripcio}','{habits_corporal}','{habits_bucal}','{situacions}','{quines}','{mitjans}','{altres}')"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_higene="{situacions}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData9(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(
        f"""SELECT * FROM necessitat_estar_net_polt_protegir_teguments where dni = '{dni}'"""
    )
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_10(
    dni, coneix_mides, salubritat, situacions, quines, mitjans, altres
):
    consulta = f"""insert into necessitat_evitar_perills (
        dni,coneix_mides_prevencio,salubritat_habitat_1,situacions_circumstancies_seguretat_fisica_psicologica_social,
        quines_situacions_seguretat_fisica_psicologica_social,mitjans_utilitza_proteccio,altres_manifestacio)
        values ('{dni}','{coneix_mides}','{salubritat}','{situacions}','{quines}','{mitjans}','{altres}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_seguretat="{situacions}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData10(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_evitar_perills where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_11(
    dni,
    estat_consciencia,
    orientacio,
    estat_sesorial,
    descripcio,
    expressio_no_verbal,
    situacions,
    quines,
    mitjans,
    altres_manifestacions13,
):
    consulta = f""" insert into necessitat_comunicar(
        dni,estat_consciencia,orientacio_temps_espai,estat_sesorials,expressio_verbal,descripccio_expressio_no_verbal,
        situacions_influencien_comunicacio,quines_situacions_influencien_comunicacio,mitjans_faciliten_comunicacio,altres_maniestacions)
        values ('{dni}','{estat_consciencia}','{orientacio}','{estat_sesorial}','{expressio_no_verbal}','{descripcio}','{situacions}','{quines}','{mitjans}','{altres_manifestacions13}');"""
    insertarDatosDB(consulta)

    rellenarAlarma = f"""UPDATE alarma SET situacions_influencien_comunicacio="{situacions}" where dni="{dni}" """
    insertarDatosDB(rellenarAlarma)


def getData11(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_comunicar where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_12(dni, quines, mitjans, altres):
    consulta = f""" insert into necessitat_viure_creences_valors (
        dni,quines_creences_valors, mitjans_utilitza_viure_creences_valors,altres_manifestacions)
        values ('{dni}','{quines}','{mitjans}','{altres}')"""
    insertarDatosDB(consulta)


def getData12(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(
        f"""SELECT * FROM necessitat_viure_creences_valors where dni = '{dni}'"""
    )
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_13(
    dni, rol_familiar, rol_social, tipus_ocupacio, situacions, mitjans13, altres
):
    consulta = f""" insert into necessitat_ocupar_realitzar (
        dni,rol_familiar,rol_social,tipus_ocupacio,situacions_desenvolupacio_rol_social_familiar,mitjans_utilitza_millorar_realitzacio,altres_manifestacions)
        values ('{dni}','{rol_familiar}','{rol_social}','{tipus_ocupacio}','{situacions}','{mitjans13}','{altres}');"""
    insertarDatosDB(consulta)


def getData13(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_ocupar_realitzar where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_14(
    dni,
    esport,
    musica,
    lectura,
    audiovisual,
    altres,
    situacions,
    quines_situacions,
    mitjans,
    altres_manifestacions,
):
    consulta = f""" insert into necessitat_esbargir (
        dni,habits_esport,habits_lectura,habits_musica,habits_audiovisual,habits_altres,situacions_influencien_interes_esbargir,quines_situacions_influencien_interes_esbargir,mitjans_utilitza_millorar_realitzacio,altres_manifestacions)
        values ('{dni}','{esport}','{lectura}','{musica}','{audiovisual}','{altres}','{situacions}','{quines_situacions}','{mitjans}','{altres_manifestacions}')"""
    insertarDatosDB(consulta)


def getData14(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_esbargir where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def rellenar_datos_15(dni, interes, perque, situacions, mitjans, altres):
    consulta = f""" insert into necessitat_aprendre (
        dni,interes_coneixer_proces_salut, perque_interes_coneixer_proces_salut, situacions_dificulten_aprenentatge, mitjans_utilitza_aprendre, altres_manifestacions) 
        values ('{dni}','{interes}','{perque}','{situacions}','{mitjans}','{altres}')"""
    insertarDatosDB(consulta)


def getData15(dni):
    db = conectarBD()
    cursor = db.cursor()
    cursor.execute(f"""SELECT * FROM necessitat_aprendre where dni = '{dni}'""")
    getData = cursor.fetchall()
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    return (field_names, getData[0])


def obtenerDatosPacienteTabla(dni, tableNum):
    userData = None
    if tableNum == 0:
        userData = getData1(dni)
    elif tableNum == 1:
        userData = getData2(dni)
    elif tableNum == 2:
        userData = getData3(dni)
    elif tableNum == 3:
        userData = getData4(dni)
    elif tableNum == 4:
        userData = getData5(dni)
    elif tableNum == 5:
        userData = getData6(dni)
    elif tableNum == 6:
        userData = getData7(dni)
    elif tableNum == 7:
        userData = getData8(dni)
    elif tableNum == 8:
        userData = getData9(dni)
    elif tableNum == 9:
        userData = getData10(dni)
    elif tableNum == 10:
        userData = getData11(dni)
    elif tableNum == 11:
        userData = getData12(dni)
    elif tableNum == 12:
        userData = getData13(dni)
    elif tableNum == 13:
        userData = getData14(dni)
    elif tableNum == 14:
        userData = getData15(dni)
    if userData == []:
        return None
    else:
        return userData
