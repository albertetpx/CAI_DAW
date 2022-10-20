import mysql.connector
from flask import Flask, redirect, render_template, request, url_for

db=mysql.connector.connect(host='localhost',
                       user='root',
                       password='el.moounirejh1',
                       database='formulario_cai'
                       )

#FUNCIONES PARA INTRODUCIR DATOS A MYSQL

def rellenar_datos(nom,edad,sexe,llocNaixament,llocResidencia,Desde,viuSol,medicament):
      
    q = f"""insert into lista_paciente (
        Paciente,Edad,Sexe,LLoc_naixement,Lloc_residencia,Hi_viu_desde,Viu_sol,Medicaments_que_pren) 
    values ('{nom}',{edad},'{sexe}','{llocNaixament}','{llocResidencia}',{Desde},'{viuSol}','{medicament}')
        """
    # print(q)
    cursor= db.cursor()
    cursor.execute(q)
    db.commit()
    
    # return redirect(url_for(""))

def rellenar_datos_7(significat_roba,tipus_roba,capacitat,situacions,quines,mitjans,altres):

    septimo = f""" insert into necessitat_vestir_desvestir(
        significat_roba,tipus_roba,capacitat_vestir_desvestir,situacions_influencien_vestimenta,
        quines_situacions_influencien_vestimenta,mitjans_millorar_satisfaccio_vestir_desvestir,altres_manifestacions)
        values ('{significat_roba}','{tipus_roba}','{capacitat}','{situacions}','{quines}','{mitjans}','{altres}') """
    
    cursor= db.cursor()
    cursor.execute(septimo)
    db.commit()

def rellenar_datos_8(temperatura_pell,temperatura_axilar,com_sent,situacions,quines,altres,mitjans):

    octava = f""" insert into necessitat_mantenir_temperatura_corporal_limits_normals (
        temperatura_pell,temperatura_axilar,com_sent_temperatura_ambient,situacions_influencien_termoregulacio,
        quines_situacions_influencien_termoregulacio,altres_manifestacions,mitjans_utilitza_mantenir_temperatura)
        values ('{temperatura_pell}','{temperatura_axilar}','{com_sent}','{situacions}','{quines}','{altres}','{mitjans}')"""
    
    cursor= db.cursor()
    cursor.execute(octava)
    db.commit()

def rellenar_datos_9(condicions,descripcio,habits_corporal,habits_bucal,situacions,quines,mitjans,altres):

    novena = f""" insert necessitat_estar_net_polt_protegir_teguments (
        condicions_higeniques_pell_mucoses,descripcio_condicions_pell_mucosa,habits_higene_corporal,habits_higene_bucal,
        situacions_influencien_higene,quines_situacions_influencien_higene,mijans_utilitza_millorar_higene,altres_manifestacions)
        values ('{condicions}','{descripcio}','{habits_corporal}','{habits_bucal}','{situacions}','{quines}','{mitjans}','{altres}',)"""
    
    cursor= db.cursor()
    cursor.execute(novena)
    db.commit()

def rellenar_datos_10(coneix_mides,salubritat,situacions,quines,mitjans,altres):

    decima = f""" insert necessitat_evitar_perills (
        coneix_mides_prevencio,salubritat_habitat_1,situacions_circumstancies_seguretat_fisica_psicologica_social,
        quines_situacions_seguretat_fisica_psicologica_social,mitjans_utilitza_proteccio,altres_manifestacio)
        values ('{coneix_mides}','{salubritat}','{situacions}','{quines}','{mitjans}','{altres}',)"""

    cursor= db.cursor()
    cursor.execute(decima)
    db.commit()

def rellenar_datos_11(estat_consciencia,orientacio,estat_sesorial,descripcio,expressio_no_verbal,situacions,quines,mitjans):

    decimo_primera = f""" insert into necessitat_comunicar(
        estat_consciencia,orientacio_temps_espai,estat_sesorials,expressio_verbal,descripccio_expressio_no_verbal,
        situacions_influencien_comunicacio,quines_situacions_influencien_comunicacio,mitjans_faciliten_comunicacioaltres_maniestacions)
        values ('{estat_consciencia}','{orientacio}','{estat_sesorial}','{descripcio}','{expressio_no_verbal}','{situacions}','{quines}','{mitjans}')"""
    
    cursor= db.cursor()
    cursor.execute(decimo_primera)
    db.commit()

def rellenar_datos_12(quines,mitjans,altres):

    decimo_segunda = f""" insert necessitat_viure_creences_valors (
        quines_creences_valors, mitjans_utilitza_viure_creences_valors,altres_manifestacions)
        values ('{quines}','{mitjans}','{altres}')"""
    
    cursor= db.cursor()
    cursor.execute(decimo_segunda)
    db.commit()

def rellenar_datos_13(rol_familiar,rol_social,tipus_ocupacio,situacions,altres):

    decimo_tercer = f""" insert into necessitat_ocupar_realitzar (
        rol_familiar,rol_social,tipus_ocupacio,situacions_desenvolupacio_rol_social_familiar,altres_manifestacions)
        values ('{rol_familiar}','{rol_social}','{tipus_ocupacio}','{situacions}','{altres}')"""
    cursor= db.cursor()
    cursor.execute(decimo_tercer)
    db.commit()

def rellenar_datos_14(esport,musica,lectura,audiovisual,altres,situacions,quines_situacions,mitjans,altres_manifestacions):

    decimo_quarta = f""" insert into necessitat_esbargir (
        habits_esport,habits_musica,habits_lectura,habits_audiovisual,habits_altres,situacions_influencien_interes_esbargir,
        quines_situacions_influencien_interes_esbargir,mitjans_utilitza_millorar_realitzacio,altres_manifestacions)
        values ('{esport}','{musica}','{lectura}','{audiovisual}','{altres}','{situacions}','{quines_situacions}','{mitjans}','{altres_manifestacions}')"""
    cursor= db.cursor()
    cursor.execute(decimo_quarta)
    db.commit()

def rellenar_datos_15(interes,perque,situacions,mitjans,altres):

    decimo_quinta = f""" insert into necessitat_aprendre (
        interes_coneixer_proces_salut, perque_interes_coneixer_proces_salut, situacions_dificulten_aprenentatge, mitjans_utilitza_aprendre, altres_manifestacions) 
        values ('{interes}','{perque}','{situacions}','{mitjans}','{altres}')"""
    
    cursor= db.cursor()
    cursor.execute(decimo_quinta)
    db.commit()


app = Flask("_name_")

@app.route("/")
def principalTabla_inicio():
    consulta = "select count(*) from lista_paciente;"
    cursor = db.cursor()
    cursor.execute(consulta)
    numPacient = cursor.fetchall()[0][0]
    return render_template("index.html", numPacient=numPacient)


@app.route("/lista_paciente")
def lista_paciente():
    consulta_sel = "select * from lista_paciente;"
    cursor = db.cursor()
    cursor.execute(consulta_sel)
    data = cursor.fetchall() 
    return render_template("lista_paciente.html", data = data)

@app.route("/registrar",methods=['GET'])
def registrar():
    
    return render_template("registrar.html")
    
@app.route("/recibirDatosPaciente",methods=['POST'])   


def insertar_datos_7():
    try:
        if request.method == 'POST':
            respuesta = request.form
            significat_roba =respuesta['significat_roba']
            tipus_roba =respuesta['tipus_roba']
            capacitat =respuesta['capacitat_vestir_desvestir']
            situacions =respuesta['situacions_influencien_vestimenta']
            quines =respuesta['quines_situacions_influencien_vestimenta']
            mitjans =respuesta['mitjans_millorar_satisfaccio_vestir_desvestir']
            altres =respuesta['altres_manifestacions']
            resultado= rellenar_datos_7(significat_roba,tipus_roba,capacitat,situacions,quines,mitjans,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_8():
    try:
        if request.method == 'POST':
            respuesta = request.form
            temperatura_pell =respuesta['temperatuta_pell']
            temperatura_axilar =respuesta['temperatura_axilar']
            com_sent =respuesta['com_sent_temperatura_ambient']
            situacions =respuesta['situacions_influencien_termoregulacio']
            quines =respuesta['quines_situacions_influencien_termoregulacio']
            altres =respuesta['altres_manifestacions']
            mitjans =respuesta['mitjans_utilitza_mantenir_temperatura']
            resultado= rellenar_datos_8(temperatura_pell,temperatura_axilar,com_sent,situacions,quines,altres,mitjans)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_9():
    try:
        if request.method == 'POST':
            respuesta = request.form
            condicions =respuesta['condicions_higeniques_pell_mucoses']
            descripcio =respuesta['descripcio_condicions_pell_mucosa']
            habits_corporal =respuesta['habits_higene_corporal']
            habits_bucal =respuesta['habits_higene_bucal']
            situacions =respuesta['situacions_influencien_higene']
            quines =respuesta['quines_situacions_influencien_higene']
            mitjans =respuesta['mitjans_utilitza_millorar_higene']
            altres =respuesta['altres_manifestacions']
            resultado= rellenar_datos_9(condicions,descripcio,habits_corporal,habits_bucal,situacions,quines,mitjans,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_10():
    try:
        if request.method == 'POST':
            respuesta = request.form
            coneix_mides =respuesta['coneix_mides_prevencio']
            salubritat =respuesta['salubritat_habitat_1']
            situacions =respuesta['situacions_circumstancies_seguretat_fisica_psicologica_social']
            quines =respuesta['quines_situacions_seguretat_fisica_psicologica_social']
            mitjans =respuesta['mitjans_utilitza_proteccio']
            altres =respuesta['altres_manifestacio']
            resultado= rellenar_datos_10(coneix_mides,salubritat,situacions,quines,mitjans,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_11():
    try:
        if request.method == 'POST':
            respuesta = request.form
            estat_consciencia =respuesta['estat_consciencia']
            orientacio =respuesta['orientacio_temps_espai']
            estat_sesorial =respuesta['estat_sesorial']
            expressio_verbal =respuesta['expressio_verbal']
            descripcio =respuesta['descripcio_expressio_no_verbal']
            situacions =respuesta['situacions_influencien_comunicacio']
            quines =respuesta['quines_situacions_influencien_comunicacio']
            mitjans =respuesta['mitjans_faciliten_comunicacioaltres_maniestacions']
            resultado= rellenar_datos_11(estat_consciencia,orientacio,estat_sesorial,expressio_verbal,descripcio,situacions,quines,mitjans)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_12():
    try:
        if request.method == 'POST':
            respuesta = request.form
            quines =respuesta['quines_creences_valors']
            mitjans =respuesta['mitjans_utilitza_viure_creences_valors']
            altres =respuesta['altres_manifestacions']
            resultado= rellenar_datos_12(quines,mitjans,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_13():
    try:
        if request.method == 'POST':
            respuesta = request.form
            rol_familiar =respuesta['rol_familiar']
            rol_social =respuesta['rol_social']
            tipus_ocupacio =respuesta['tipus_ocupacio']
            situacions =respuesta['situacions_desenvolupacio_rol_social_familiar']
            altres =respuesta['altres_manifestacions']
            resultado= rellenar_datos_13(rol_familiar,rol_social,tipus_ocupacio,situacions,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_14():
    try:
        if request.method == 'POST':
            respuesta = request.form
            esport =respuesta['habits_esport']
            musica =respuesta['habits_musica']
            lectura =respuesta['habits_lectura']
            audiovisual =respuesta['habits_audiovisual']
            altres =respuesta['habits_altres']
            situacions =respuesta['situacions_influencien_interes_esbargir']
            quines_situacions =respuesta['quines_situacions_influencien_interes_esbargir']
            mitjans =respuesta['mitjans_utilitza_millorar_realitzacio']
            altres_manifestacions =respuesta['altres_manifestacions']
            resultado=  rellenar_datos_14(esport,musica,lectura,audiovisual,altres,situacions,quines_situacions,mitjans,altres_manifestacions)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

def insertar_datos_15():
    try:
        if request.method == 'POST':
            respuesta = request.form
            interes =respuesta['interes_coneixer_proces_salut']
            perque =respuesta['perque_interes_coneixer_proces_salut']
            situacions =respuesta['situacions_dificulten_aprenentatge']
            mitjans =respuesta['mitjans_utilitza_aprendre']
            altres =respuesta['altres_manifestacions']
            resultado=  rellenar_datos_15(interes,perque,situacions,mitjans,altres)

            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
    
    except:
            return render_template("registro_error.html")

   
    #     return redirect(url_for("ex_pagina_exit"))
    # else:
        
    #     return render_template("registrar.html") 

@app.route("/pagina_exit", methods=["GET", "POST"])
def ex_pagina_exit():
    return render_template("pagina_exit.html")


@app.route("/registro_error", methods=["GET", "POST"])
def ex_pagina_error():
    return render_template("registro_error.html")
        
app.run(host='localhost',port=5000,debug=False)