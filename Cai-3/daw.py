from flask import Flask, redirect, render_template, request, url_for
from procesarForm import procesarFormulario


app = Flask(__name__)

@app.route("/")
def principalTabla_inicio():
    # consulta = "select count(*) from info_general;"
    # cursor = db.cursor()
    # cursor.execute(consulta)
    # numPacient = cursor.fetchall()[0][0]
    # return render_template("index.html", numPacient=numPacient)
    return render_template("index.html")

@app.route("/lista_paciente")
def lista_paciente():
    consulta_sel = "select * from info_general;"
    # cursor = db.cursor()
    # cursor.execute(consulta_sel)
    # data = cursor.fetchall() 
    return render_template("lista_paciente.html", data = data)

@app.route("/registrar",methods=['GET'])
def registrar():

    return render_template("registrar.html")

@app.route("/recibirDatosPaciente",methods=['POST'])
def registrarPacientes():
    try:
        if request.method == 'POST':
            procesarFormulario(request)
            return redirect(url_for("ex_pagina_exit"))
        else:
            return render_template("registrar.html")    
            
    except:
        return render_template("registro_error.html")    


@app.route("/pagina_exit", methods=["GET", "POST"])
def ex_pagina_exit():
    return render_template("pagina_exit.html")


@app.route("/registro_error", methods=["GET", "POST"])
def ex_pagina_error():
    return render_template("registro_error.html")
        
app.run(host='localhost',port=5000,debug=False)