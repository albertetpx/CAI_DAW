import mysql.connector
from flask import Flask, redirect, render_template, request, url_for

db=mysql.connector.connect(host='localhost',
                       user='root',
                       password='Karlen-1999',
                       database='lista_paciente'
                       )

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
     
app = Flask(__name__)

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
def recibirDatosPaciente():
    try:
        if request.method == 'POST':
            respuesta = request.form
            print(respuesta)
            nom =respuesta['nom']
            edad =respuesta['edad']
            sexe =respuesta['sexe']
            llocNaixament =respuesta['llocNaixament']
            llocResidencia =respuesta['llocResidencia']
            Desde =respuesta['Desde']
            viuSol =respuesta['viuSol']
            medicament =respuesta['medicament']
            resultado=  rellenar_datos(nom, edad, sexe, llocNaixament, llocResidencia, Desde, viuSol, medicament)
            
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