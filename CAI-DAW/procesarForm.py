from bdPacients import rellenar_datos_1,rellenar_datos_2,rellenar_datos_3,rellenar_datos_4
from bdPacients import rellenar_datos_5,rellenar_datos_6,rellenar_datos_7,rellenar_datos_8
from bdPacients import rellenar_datos_9,rellenar_datos_10,rellenar_datos_11,rellenar_datos_12
from bdPacients import rellenar_datos_13,rellenar_datos_14,rellenar_datos_15

def procesarFormulario(request):
    respuesta = request.form
    
    # LEER PRIMERA PARTE FORM
    dni = respuesta['dni']
    nom = respuesta['nom']
    edat = respuesta['edat']
    sexe = respuesta['sexe']
    
    LLoc_naixement = respuesta['LLoc_naixement']
    Lloc_residencia = respuesta['Lloc_residencia']
    viu_sol = respuesta['viu_sol']
    
    familia_origen_pare = respuesta['familia_origen_pare']
    familia_origen_mare = respuesta['familia_origen_mare']
    familia_origen_germans = respuesta['familia_origen_germans']
    rol_ocupa = respuesta['rol_ocupa']
    membres_integren = respuesta['membres_integren']
    
    temps_residencia =respuesta['temps_residencia']
    pren_medicaments_casa =respuesta['pren_medicaments_casa']
    quins_medicaments =respuesta['quins_medicaments']
    problema_salut_actual =respuesta['problema_salut_actual']
    familia_procreacio =respuesta['familia_procreacio']
  
    resultado =  rellenar_datos_1(dni,nom, edat, sexe, LLoc_naixement,Lloc_residencia,temps_residencia,familia_origen_pare,familia_origen_mare,familia_origen_germans,familia_procreacio,rol_ocupa,membres_integren,viu_sol,problema_salut_actual,pren_medicaments_casa,quins_medicaments)
    # print(resultado)

    # LEER SEGUNDA PARTE

    ritme = respuesta['ritme']
    frequencia_r = respuesta['frequencia_r']
    amplitud = respuesta['amplitud']
    tipus_respiracio=respuesta['tipus_respiracio']
    orifisis_nasals_permeables=respuesta['orifisis_nasals_permeables']
    frequencia_cardiaca = respuesta['frequencia_cardiaca']
    pa = respuesta['pa']
    coloracio_mucoses = respuesta['coloracio_mucoses']
    coloracio_pell = respuesta['coloracio_pell']
    respiracio = respuesta['respiracio']   
    tos = respuesta['tos']
    tos_descripcio = respuesta['tos_descripcio']
    mucositat = respuesta['mucositat']
    mucositat_descripcio = respuesta['mucositat_descripcio']
    expectoracio = respuesta['expectoracio']
    altres_manifestacions2 = respuesta['altres_manifestacions2']        
    situacions_influencien_respiracio = respuesta['situacions_influencien_respiracio']
    quines_influencien = respuesta['quines_influencien2']
    mitja_utilitza_respirar_millor = respuesta['mitja_utilitza_respirar_millor']
    fuma = respuesta['fuma']
    cigars_dia = respuesta['cigars_dia']

    resultado = rellenar_datos_2(dni,ritme,frequencia_cardiaca,frequencia_r,pa,amplitud,tipus_respiracio,orifisis_nasals_permeables,coloracio_mucoses,coloracio_pell,respiracio,tos,tos_descripcio,mucositat,mucositat_descripcio,expectoracio,altres_manifestacions2,situacions_influencien_respiracio,quines_influencien,mitja_utilitza_respirar_millor,fuma,cigars_dia)
    # print(resultado)

    # LEER TERCERA PARTE
    
    pes=respuesta['pes']
    talla=respuesta['talla']
    numero_dents_realitzar_funcio=respuesta['numero_dents_realitzar_funcio']
    protesi_dental=respuesta['protesi_dental']
    masticacio=respuesta['masticacio']
    caracteriques_deglucio=respuesta['caracteriques_deglucio']
    tipus_dieta = respuesta['tipus_dieta']
    esmorzar=respuesta['esmorzar']
    
    dinar=respuesta['dinar']
    berenar=respuesta['berenar']
    sopar=respuesta['sopar']
    altres=respuesta['altres']
    sensacio_habitual_respecte_menjar=respuesta['sensacio_habitual_respecte_menjar']
    aliments_solits_liquids_no_agraden_intolera_restriccio = respuesta['aliments_solits_liquids_no_agraden_intolera_restriccio']
    habitualment_menja=respuesta['habitualment_menja']
    situacions_influencien_habits_alimentalis=respuesta['situacions_influencien_habits_alimentalis']
    quines_situacions=respuesta['quines_situacions']
    mitjans_utilitza_millorar=respuesta['mitjans_utilitza_millorar']
    altres_manifestacions=respuesta['altres_manifestacions3']
    resultado =  rellenar_datos_3(dni,pes,talla,numero_dents_realitzar_funcio,protesi_dental,masticacio,caracteriques_deglucio,tipus_dieta,esmorzar,dinar,berenar,sopar,altres,sensacio_habitual_respecte_menjar,aliments_solits_liquids_no_agraden_intolera_restriccio,habitualment_menja,situacions_influencien_habits_alimentalis,quines_situacions,mitjans_utilitza_millorar,altres_manifestacions)
    # print(resultado)

    # # LEER CUARTA PARTE

    frequencia_orina=respuesta['frequencia_orina']
    quantitat_orina=respuesta['quantitat_orinar']
    aspecte_orina=respuesta['aspecte_orina']
    frequencia_femtes=respuesta['frequencia_femtes']
    quantitat_femtes=respuesta['quantitat_femtes']
    aspecte_femtes=respuesta['aspecte_femtes']
    frequencia_suor=respuesta['frequencia_suor']
    quantitat_suor=respuesta['quantitat_suor']
    aspecte_suor=respuesta['aspecte_suor']
    frequencia_regla = respuesta['frequencia_regla']
    situacions_influencien_habits_eliminacio=respuesta['situacions_influencien_habits_eliminacio']
    quines_influencien=respuesta['quines_influencien4']
    mitjans_utilitzar_eliminar_millor=respuesta['mitjans_utilitzar_eliminar_millor']
    altres_manifestacions=respuesta['altres_manifestacions4']
    
    resultado =  rellenar_datos_4(dni,frequencia_orina,quantitat_orina,aspecte_orina,frequencia_femtes,quantitat_femtes,aspecte_femtes,frequencia_suor,quantitat_suor,aspecte_suor,frequencia_regla,situacions_influencien_habits_eliminacio,quines_influencien,mitjans_utilitzar_eliminar_millor,altres_manifestacions)
    # print(resultado)

    # # LEER QUINTA PARTE

    pot_moure_totes_parts_cos=respuesta['pot_moure_totes_parts_cos']
    quines_parts=respuesta['quines_parts']
    perque_pot_moure=respuesta['perque_pot_moure']
    es=respuesta['es']
    postura_habitual=respuesta['postura_habitual']
    activitats_fisiques=respuesta['activitats_fisiques']
    situacions_interfereixen_mobilitat=respuesta['situacions_interfereixen_mobilitat']
    quines_situacions_interfreixen_mobilitat=respuesta['quines_situacions_interfreixen_mobilitat']
    mitjans_utilitza_moure_millor_mantenir_postura_adequada=respuesta['mitjans_utilitza_moure_millor_mantenir_postura_adequada']
    altres_manifestacions=respuesta['altres_manifestacions5']

    resultado =  rellenar_datos_5(dni,pot_moure_totes_parts_cos, quines_parts, perque_pot_moure, es, postura_habitual, activitats_fisiques, situacions_interfereixen_mobilitat, quines_situacions_interfreixen_mobilitat, mitjans_utilitza_moure_millor_mantenir_postura_adequada, altres_manifestacions)
    print(resultado)            

    # # LEER SEXTA PARTE

    hores_dorm=respuesta['hores_dorm']
    migdia=respuesta['migdia']
    qualitat_son=respuesta['qualitat_son']
    situacions_influencien_son=respuesta['situacions_influencien_son']
    quienes_situacions_influencien_son=respuesta['quienes_situacions_influencien_son']    
    
    mitjans_dormir=respuesta['mitjans_utilitza_dormir_millor_reposar']
    altres_manifestacions=respuesta['altres_manifestacions6']

    resultado =  rellenar_datos_6(dni,hores_dorm,migdia,qualitat_son,situacions_influencien_son,quienes_situacions_influencien_son,mitjans_dormir,altres_manifestacions)
    # print(resultado)

    # # LEER SEPTIMA PARTE

    significat_roba =respuesta['significat_roba']
    tipus_roba =respuesta['tipus_roba']
    capacitat =respuesta['capacitat_vestir_desvestir']
    situacions =respuesta['situacions_influencien_vestimenta']
    quines =respuesta['quines_situacions_influencien_vestimenta']
    mitjans =respuesta['mitjans_millorar_satisfaccio_vestir_desvestir']
    altres =respuesta['altres_manifestacions7']
    resultado= rellenar_datos_7(dni,significat_roba,tipus_roba,capacitat,situacions,quines,mitjans,altres)
    # print(resultado)

    # # LEER OCATAVA PARTE

    temperatura_pell =respuesta['temperatura_pell']
    temperatura_axilar =respuesta['temperatura_axilar']
    com_sent =respuesta['com_sent_temperatura_ambient']
    situacions =respuesta['situacions_influencien_termoregulacio']
    quines =respuesta['quines_situacions_influencien_termoregulacio']
    altres =respuesta['altres_manifestacions8']
    mitjans =respuesta['mitjans_utilitza_mantenir_temperatura']

    resultado= rellenar_datos_8(dni,temperatura_pell,temperatura_axilar,com_sent,situacions,quines,altres,mitjans)
    # print(resultado)

    # # LEER NOVENA PARTE

    condicions =respuesta['condicions_higeniques_pell_mucoses']
    descripcio =respuesta['descripcio_condicions_pell_mucosa']
    habits_corporal =respuesta['habits_higene_corporal']
    habits_bucal =respuesta['habits_higene_bucal']
    situacions =respuesta['situacions_influencien_higene']
    quines =respuesta['quines_situacions_influencien_higene']
    mitjans =respuesta['mijans_utilitza_millorar_higene']
    altres =respuesta['altres_manifestacions9']

    resultado= rellenar_datos_9(dni,condicions,descripcio,habits_corporal,habits_bucal,situacions,quines,mitjans,altres)
    # print(resultado)

    # # LEER DECIMA PARTE

    coneix_mides =respuesta['coneix_mides_prevencio']
    salubritat_habitat =respuesta['salubritat_habitat_1']
    situacions =respuesta['situacions_circumstancies_seguretat_fisica_psicologica_social']
    quines =respuesta['quines_situacions_seguretat_fisica_psicologica_social']
    mitjans =respuesta['mitjans_utilitza_proteccio']
    altres =respuesta['altres_manifestacio10']

    resultado= rellenar_datos_10(dni,coneix_mides,salubritat_habitat,situacions,quines,mitjans,altres)
    # print(resultado)

    # # LEER DECIMO PRIMERA PARTE

    estat_consciencia =respuesta['estat_consciencia']
    orientacio =respuesta['orientacio_temps_espai']
    estat_sesorial =respuesta['estat_sesorials']
    expressio_verbal =respuesta['expressio_verbal']
    descripcio =respuesta['descripccio_expressio_no_verbal']
    situacions =respuesta['situacions_influencien_comunicacio']
    quines =respuesta['quines_situacions_influencien_comunicacio']
    mitjans =respuesta['mitjans_faciliten_comunicacio']
    altres_manifestacions11 = respuesta['altres_manifestacions11']

    resultado= rellenar_datos_11(dni,estat_consciencia,orientacio,estat_sesorial,expressio_verbal,descripcio,situacions,quines,mitjans,altres_manifestacions11)
    # print(resultado)

    # # LEER DECIMO SEGUNDA PARTE FORM

    quines =respuesta['quines_creences_valors']
    mitjans =respuesta['mitjans_utilitza_viure_creences_valors']
    altres =respuesta['altres_manifestacions12']
    resultado= rellenar_datos_12(dni,quines,mitjans,altres)
    # print(resultado)

    # # LEER DECIMO TERCERA PARTE FORM
    
    rol_familiar =respuesta['rol_familiar']
    rol_social =respuesta['rol_social']
    tipus_ocupacio =respuesta['tipus_ocupacio']
    situacions =respuesta['situacions_desenvolupacio_rol_social_familiar']
    mitjans13 = respuesta['mitjans_millorar13']
    altres =respuesta['altres_manifestacions13']
    resultado13= rellenar_datos_13(dni,rol_familiar,rol_social,tipus_ocupacio,situacions,mitjans13,altres)
    # print(resultado13)

    # # LEER DECIMO CUARTA PARTE FORM
    
    esport = respuesta['habits_esport']
    musica = respuesta['habits_musica']
    lectura = respuesta['habits_lectura']
    audiovisual = respuesta['habits_audiovisual']
    altres14 = respuesta['habits_altres']
    situacions14 = respuesta['situacions_influencien_interes_esbargir']
    quines_situacions = respuesta['quines_situacions_influencien_interes_esbargir']
    mitjans14 = respuesta['mitjans_utilitza_millorar_realitzacio']
    altres_manifestacions = respuesta['altres_manifestacions14']
    
    resultado14 =  rellenar_datos_14(dni,esport,lectura,musica,audiovisual,altres14,situacions14,quines_situacions,mitjans14,altres_manifestacions)
    # print(resultado14)

    # # LEER DECIMO QUINTA PARTE FORM

    interes = respuesta['interes_coneixer_proces_salut']
    perque = respuesta['perque_interes_coneixer_proces_salut']
    situacions = respuesta['situacions_dificulten_aprenentatge']
    mitjans = respuesta['mitjans_utilitza_aprendre']
    altres = respuesta['altres_manifestacions15']

    resultado15 = rellenar_datos_15(dni,interes,perque,situacions,mitjans,altres)
    # print(resultado15)
    return