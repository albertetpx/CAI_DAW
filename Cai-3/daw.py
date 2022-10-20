import mysql.connector
from flask import Flask, redirect, render_template, request, url_for

db=mysql.connector.connect(host='localhost',
                       user='root',
                       password='Karlen-1999',
                       database='formulario_cai'
                       )         #  rELLENAR DATOS 1                       
def rellenar_datos_1(nom,edat,sexe,LLoc_naixement,Lloc_residencia,familia_origen_pare,familia_origen_mare,familia_origen_germans,rol_ocupa,membres_integren,temps_residencia,pren_medicaments_casa,quins_medicaments,problema_salut_actual,familia_procreacio):
      
    q = f"""insert into lista_paciente (
        nom,edat,sexe,Lloc_residencia,Lloc_residencia,familia_origen_pare,familia_origen_mare,familia_origen_germans,rol_ocupa,membres_integren,temps_residencia,pren_medicaments_casa,quins_medicaments,problema_salut_actual,familia_procreacio) 
    values ('{nom}',{edat},'{sexe}','{Lloc_residencia}','{Lloc_residencia}',{familia_origen_pare},'{familia_origen_mare}','{familia_origen_germans}','{rol_ocupa}','{membres_integren}','{temps_residencia}','{pren_medicaments_casa}','{quins_medicaments}','{problema_salut_actual}','{familia_procreacio}')"""
    # print(q)
    cursor= db.cursor()
    cursor.execute(q)
    db.commit()
# RELENAR DATOS  2                                                                                                               
def rellenar_datos_2(ritme,frequencia_r,amplitud,tipus_respiracio,orifisis_nasals_permeables,familia_origen_pare,familia_origen_mare,familia_origen_germans,rol_ocupa,membres_integren,temps_residencia,pren_medicaments_casa,quins_medicaments,problema_salut_actual,familia_procreacio):
    q = f"""insert into lista_paciente (nom,edat,sexe,Lloc_residencia,Lloc_residencia,frequencia_cardiaca,pa.,coloracio_mucoses,coloracio_pell,respiracio,tos,tos_descripcio,mucositat,mucositat_descripcio,expectoracio,altres_manifestacions,situacions_influencien_respiracio,quines_influencien,mitja_utilitza_respirar_millor,fuma,cigars_dia) 
    values ('{nom}',{edat},'{sexe}','{Lloc_residencia}','{Lloc_residencia}',{familia_origen_pare},'{familia_origen_mare}','{familia_origen_germans}','{rol_ocupa}','{membres_integren}','{temps_residencia}','{pren_medicaments_casa}','{quins_medicaments}','{problema_salut_actual}','{familia_procreacio}')"""
    # print(q)
    cursor= db.cursor()
    cursor.execute(q)
    db.commit()                                                
# NMUSH ORIGINAL 
# def rellenar_datos(nom,edad,sexe,llocNaixament,llocResidencia,Desde,viuSol,medicament):
      
#     q = f"""insert into lista_paciente (
#         Paciente,Edad,Sexe,LLoc_naixement,Lloc_residencia,Hi_viu_desde,Viu_sol,Medicaments_que_pren) 
#     values ('{nom}',{edad},'{sexe}','{llocNaixament}','{llocResidencia}',{Desde},'{viuSol}','{medicament}')
#         """
#     # print(q)
#     cursor= db.cursor()
#     cursor.execute(q)
#     db.commit()
    # return redirect(url_for(""))      
     
app = Flask(__name__)



@app.route("/") 
def principalTabla_inicio():
    consulta = "select count(*) from info_general;"
    cursor = db.cursor()
    cursor.execute(consulta)
    numPacient = cursor.fetchall()[0][0]
    return render_template("index.html", numPacient=numPacient)


@app.route("/lista_paciente")
def lista_paciente():
    consulta_sel = "select * from info_general;"
    cursor = db.cursor()
    cursor.execute(consulta_sel)
    data = cursor.fetchall() 
    return render_template("lista_paciente.html", data = data)

@app.route("/registrar",methods=['GET'])
def registrar():
    
    return render_template("registrar.html")
    
@app.route("/recibirDatosPaciente",methods=['POST'])  
def recibirDatosPaciente():
    try:
        if request.method == 'POST':
            respuesta = request.form
            print(respuesta)
            nom =respuesta['nom']
            edat =respuesta['edat']
            sexe =respuesta['sexe']
            LLoc_naixement =respuesta['LLoc_naixement']
            Lloc_residencia =respuesta['Lloc_residencia']
            familia_origen_pare =respuesta['familia_origen_pare']
            familia_origen_mare =respuesta['familia_origen_mare']
            familia_origen_germans =respuesta['familia_origen_germans']
            rol_ocupa =respuesta['rol_ocupa']
            membres_integren =respuesta['membres_integren']
            temps_residencia =respuesta['temps_residencia']
            pren_medicaments_casa =respuesta['pren_medicaments_casa']
            quins_medicaments =respuesta['quins_medicaments']
            problema_salut_actual =respuesta['problema_salut_actual']
            familia_procreacio =respuesta['familia_procreacio']
            resultado=  rellenar_datos(nom, edat, sexe, LLoc_naixement, Lloc_residencia, familia_origen_pare, familia_origen_mare, familia_origen_germans,rol_ocupa,membres_integren,temps_residencia,pren_medicaments_casa,quins_medicaments,problema_salut_actual,familia_procreacio)
            
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