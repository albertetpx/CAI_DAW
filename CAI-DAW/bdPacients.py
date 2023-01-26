import mysql.connector

# FUNCIONES PARA INTRODUCIR DATOS A MYSQL


def conectardb(consulta):
    db = mysql.connector.connect(host='localhost',
                        user='root',
                        password='Ahinoa@21',
                        database="formulario_cai"
                        )
    cursor = db.cursor()
    cursor.execute(consulta)
    db.commit()
    db.close()
    return


def obtenerDatos(consulta):
    db = mysql.connector.connect(host='localhost',
                        user='root',
                        password='Ahinoa@21',
                        database="formulario_cai"
                        )
    cursor = db.cursor()
    cursor.execute(consulta)
    data = cursor.fetchall()
    return data


def obtenerNumPacientes(consulta):
    db = mysql.connector.connect(host='localhost',
                        user='root',
                        password='Ahinoa@21',
                        database="formulario_cai"
                        )
    cursor = db.cursor()
    cursor.execute(consulta)
    numPacient = cursor.fetchall()[0][0]
    return numPacient

def rellenar_datos_1(nom,edad,sexe,llocNaixament,llocResidencia,tempsResidencia,familiaOrigenPare,familiaOrigenMare,familiaOrigenGermans,familiaProcreacio,rolOcupa,membresIntegren,viuSol,problemaSalutActual,prenMedicamentsCasa,quinsMedicament):
    
    consulta =  f"""insert into info_general (nom,edat,sexe,Lloc_naixement,Lloc_residencia,temps_residencia,familia_origen_pare,familia_origen_mare,familia_origen_germans,familia_procreacio,rol_ocupa,membres_integren,viu_sol,problema_salut_actual,pren_medicaments_casa,quins_medicaments) 
    values ('{nom}',{edad},'{sexe}',{llocNaixament},'{llocResidencia}',{tempsResidencia},'{familiaOrigenPare}','{familiaOrigenMare}','{familiaOrigenGermans}','{familiaProcreacio}','{rolOcupa}','{membresIntegren}','{viuSol}','{problemaSalutActual}','{prenMedicamentsCasa}','{quinsMedicament}')"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(primer)
    # db.commit()

def rellenar_datos_2(ritme,frequencia_cardiaca,frequencia_r,pa,amplitud,tipus_respiracio,orifisis_nasals_permeables,coloracio_mucoses,coloracio_pell,respiracio,tos,tos_descripcio,mucositat,mucositat_descripcio,expectoracio,altres_manifestacions,situacions_influencien_respiracio,quines_influencien,mitja_utilitza_respirar_millor,fuma,cigars_dia):
    consulta = f"""insert into necessitat_respirar (ritme,frequencia_cardiaca,frequencia_r,pa,amplitud,tipus_respiracio,orifisis_nasals_permeables,coloracio_mucoses,coloracio_pell,respiracio,tos,tos_descripcio,mucositat,mucositat_descripcio,expectoracio,altres_manifestacions,situacions_influencien_respiracio,quines_influencien,mitja_utilitza_respirar_millor,fuma,cigars_dia) 
    values ('{ritme}',{frequencia_cardiaca},{frequencia_r},{pa},{amplitud},'{tipus_respiracio}','{orifisis_nasals_permeables}','{coloracio_mucoses}','{coloracio_pell}','{respiracio}','{tos}','{tos_descripcio}','{mucositat}','{mucositat_descripcio}','{expectoracio}','{altres_manifestacions}','{situacions_influencien_respiracio}','{quines_influencien}','{mitja_utilitza_respirar_millor}','{fuma}',{cigars_dia});"""
    conectardb(consulta)
    # print(q)
    # cursor= db.cursor()
    # cursor.execute(segundo)
    # db.commit()

def rellenar_datos_3(pes,talla,numero_dents_realitzar_funcio,protesi_dental,masticacio,caracteriques_deglucio,tipus_dieta,esmorzar,dinar,berenar,sopar,altres,sensacio_habitual_respecte_menjar,aliments_solits_liquids_no_agraden_intolera_restriccio,habitualment_menja,situacions_influencien_habits_alimentalis,quines_situacions,mitjans_utilitza_millorar,altres_manifestacions):
    consulta = f"""insert into necessitat_menjar_beure (pes,talla,numero_dents_realitzar_funcio,protesi_dental,caracteriques_deglucio,tipus_dieta,esmorzar,dinar,berenar,sopar,altres,sensacio_habitual_respecte_menjar,aliments_solits_liquids_no_agraden_intolera_restriccio,habitualment_menja,situacions_influencien_habits_alimentalis,quines_situacions,mitjans_utilitza_millorar,altres_manifestacions,masticacio)
    values ({pes},'{talla}',{numero_dents_realitzar_funcio},'{protesi_dental}','{masticacio}','{caracteriques_deglucio}','{tipus_dieta}','{esmorzar}','{dinar}','{berenar}','{sopar}','{altres}','{sensacio_habitual_respecte_menjar}','{aliments_solits_liquids_no_agraden_intolera_restriccio}','{habitualment_menja}','{situacions_influencien_habits_alimentalis}','{quines_situacions}','{mitjans_utilitza_millorar}','{altres_manifestacions}');"""
    conectardb(consulta)
    # print(q)
    # cursor= db.cursor()
    # cursor.execute(tercera)
    # db.commit()

def rellenar_datos_4(frequencia_orina,quantitat_orina,aspecte_orina,frequencia_femtes,quantitat_femtes,aspecte_femtes,frequencia_suor,quantitat_suor,aspecte_suor,frequencia_regla,situacions_influencien_habits_eliminacio,quines_influencien,mitjans_utilitzar_eliminar_millor,altres_manifestacions):
    consulta = f"""insert into necessitat_eliminar (frequencia_orina,quantitat_orina,aspecte_orina,frequencia_femtes,quantitat_femtes,aspecte_femtes,frequencia_suor,quantitat_suor,aspecte_suor,frequencia_regla,situacions_influencien_habits_eliminacio,quines_influencien,mitjans_utilitzar_eliminar_millor,altres_manifestacions) 
    values ({frequencia_orina},{quantitat_orina},'{aspecte_orina}',{frequencia_femtes},{quantitat_femtes},'{aspecte_femtes}','{frequencia_suor}',{quantitat_suor},'{aspecte_suor}','{frequencia_regla}','{situacions_influencien_habits_eliminacio}','{quines_influencien}','{mitjans_utilitzar_eliminar_millor}','{altres_manifestacions}');"""
    conectardb(consulta)
    # print(q)
    # cursor= db.cursor()
    # cursor.execute(quarta)
    # db.commit()

def rellenar_datos_5(pot_moure_totes_parts_cos,quines_parts,perque_pot_moure,es,postura_habitual,activitats_fisiques,situacions_interfereixen_mobilitat,quines_situacions_interfreixen_mobilitat,mitjans_utilitza_moure_millor_mantenir_postura_adequada,altres_manifestacions):
    consulta = f"""insert into necessitat_moure_mantenir_postura_adequada (pot_moure_totes_parts_cos,quines_parts,perque_pot_moure,es,postura_habitual,activitats_fisiques,situacions_interfereixen_mobilitat,quines_situacions_interfreixen_mobilitat,mitjans_utilitza_moure_millor_mantenir_postura_adequada,altres_manifestacions) 
    values ('{pot_moure_totes_parts_cos}','{quines_parts}','{perque_pot_moure}','{es}','{postura_habitual}','{activitats_fisiques}','{situacions_interfereixen_mobilitat}','{quines_situacions_interfreixen_mobilitat}','{mitjans_utilitza_moure_millor_mantenir_postura_adequada}','{altres_manifestacions}');"""
    conectardb(consulta)
    # print(q)
    # cursor= db.cursor()
    # cursor.execute(quinta)
    # db.commit()

def rellenar_datos_6(hores_dorm,migdia,qualitat_son,situacions_influencien,quines_situacions_influencien,mitjans_dormir,altres_manifestacions):   
    consulta = f"""insert into necesitat_dormir_reposar (hores_dorm,migdia,qualitat_son,situacions_influencien_son,quienes_situacions_influencien_son,mitjans_utilitza_dormir_millor_reposar,altres_manifestacions) 
    values ({hores_dorm},'{migdia}','{qualitat_son}','{situacions_influencien}','{quines_situacions_influencien}','{mitjans_dormir}','{altres_manifestacions}');"""
    conectardb(consulta)
    # # print(q)
    # cursor= db.cursor()
    # cursor.execute(quinta)
    # db.commit()

def rellenar_datos_7(significat_roba,tipus_roba,capacitat,situacions,quines,mitjans,altres):

    consulta = f""" insert into necessitat_vestir_desvestir(
        significat_roba,tipus_roba,capacitat_vestir_desvestir,situacions_influencien_vestimenta,
        quines_situacions_influencien_vestimenta,mitjans_millorar_satisfaccio_vestir_desvestir,altres_manifestacions)
        values ('{significat_roba}','{tipus_roba}','{capacitat}','{situacions}','{quines}','{mitjans}','{altres}'); """
    conectardb(consulta)
     # cursor= db.cursor()
    # cursor.execute(septimo)
    # db.commit()

def rellenar_datos_8(temperatura_pell,temperatura_axilar,com_sent,situacions,quines,altres,mitjans):

    consulta = f""" insert into necessitat_mantenir_temperatura_corporal_limits_normals (
        temperatura_pell,temperatura_axilar,com_sent_temperatura_ambient,situacions_influencien_termoregulacio,
        quines_situacions_influencien_termoregulacio,altres_manifestacions,mitjans_utilitza_mantenir_temperatura)
        values ({temperatura_pell},{temperatura_axilar},'{com_sent}','{situacions}','{quines}','{altres}','{mitjans}');"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(octava)
    # db.commit()

def rellenar_datos_9(condicions,descripcio,habits_corporal,habits_bucal,situacions,quines,mitjans,altres):

    consulta = f""" insert necessitat_estar_net_polt_protegir_teguments (
        condicions_higeniques_pell_mucoses,descripcio_condicions_pell_mucosa,habits_higene_corporal,habits_higene_bucal,
        situacions_influencien_higene,quines_situacions_influencien_higene,mijans_utilitza_millorar_higene,altres_manifestacions)
        values ('{condicions}','{descripcio}','{habits_corporal}','{habits_bucal}','{situacions}','{quines}','{mitjans}','{altres}')"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(novena)
    # db.commit()

def rellenar_datos_10(coneix_mides,salubritat,situacions,quines,mitjans,altres):

    consulta = f""" insert necessitat_evitar_perills (
        coneix_mides_prevencio,salubritat_habitat_1,situacions_circumstancies_seguretat_fisica_psicologica_social,
        quines_situacions_seguretat_fisica_psicologica_social,mitjans_utilitza_proteccio,altres_manifestacio)
        values ('{coneix_mides}','{salubritat}','{situacions}','{quines}','{mitjans}','{altres}');"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decima)
    # db.commit()

def rellenar_datos_11(estat_consciencia,orientacio,estat_sesorial,descripcio,expressio_no_verbal,situacions,quines,mitjans,altres_manifestacions13):

    consulta = f""" insert into necessitat_comunicar(
        estat_consciencia,orientacio_temps_espai,estat_sesorials,expressio_verbal,descripccio_expressio_no_verbal,
        situacions_influencien_comunicacio,quines_situacions_influencien_comunicacio,mitjans_faciliten_comunicacio,altres_maniestacions)
        values ('{estat_consciencia}','{orientacio}','{estat_sesorial}','{expressio_no_verbal}','{descripcio}','{situacions}','{quines}','{mitjans}','{altres_manifestacions13}');"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decimo_primera)
    # db.commit()

def rellenar_datos_12(quines,mitjans,altres):

    consulta = f""" insert necessitat_viure_creences_valors (
        quines_creences_valors, mitjans_utilitza_viure_creences_valors,altres_manifestacions)
        values ('{quines}','{mitjans}','{altres}')"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decimo_segunda)
    # db.commit()

def rellenar_datos_13(rol_familiar,rol_social,tipus_ocupacio,situacions,mitjans13,altres):

    consulta = f""" insert into necessitat_ocupar_realitzar (
        rol_familiar,rol_social,tipus_ocupacio,situacions_desenvolupacio_rol_social_familiar,mitjans_utilitza_millorar_realitzacio,altres_manifestacions)
        values ('{rol_familiar}','{rol_social}','{tipus_ocupacio}','{situacions}','{mitjans13}','{altres}');"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decimo_tercer)
    # db.commit()

def rellenar_datos_14(esport,musica,lectura,audiovisual,altres,situacions,quines_situacions,mitjans,altres_manifestacions):

    consulta = f""" insert into necessitat_esbargir (
        habits_esport,habits_lectura,habits_musica,habits_audiovisual,habits_altres,situacions_influencien_interes_esbargir,quines_situacions_influencien_interes_esbargir,mitjans_utilitza_millorar_realitzacio,altres_manifestacions)
        values ('{esport}','{lectura}','{musica}','{audiovisual}','{altres}','{situacions}','{quines_situacions}','{mitjans}','{altres_manifestacions}')"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decimo_quarta)
    # db.commit()

def rellenar_datos_15(interes,perque,situacions,mitjans,altres):

    consulta = f""" insert into necessitat_aprendre (
        interes_coneixer_proces_salut, perque_interes_coneixer_proces_salut, situacions_dificulten_aprenentatge, mitjans_utilitza_aprendre, altres_manifestacions) 
        values ('{interes}','{perque}','{situacions}','{mitjans}','{altres}')"""
    conectardb(consulta)
    # cursor= db.cursor()
    # cursor.execute(decimo_quinta)
    # db.commit()

