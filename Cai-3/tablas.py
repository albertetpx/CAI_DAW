import mysql.connector


def conectardb():
    db = mysql.connector.connect(host='localhost',
                                 user='root',
                                 password='el.moounirejh1',
                                 database="formulario_cai"
                                 )
    return db


def countPacients():
    db=conectardb()
    consulta = "select count(*) from info_general;"
    cursor = db.cursor()
    cursor.execute(consulta)
    numPacient = cursor.fetchall()[0][0]
    return numPacient


    # consulta = "select count(*) from info_general;"
    # cursor = db.cursor()
    # cursor.execute(consulta)
    # numPacient = cursor.fetchall()[0][0]
    # return render_template("index.html", numPacient=numPacient)
def consultaTablaEjemplo():
    db = conectardb()
    consulta_sel = "SELECT nom, edat, LLoc_naixement, Lloc_residencia, temps_residencia, viu_sol, quins_medicaments FROM info_general LIMIT 5;"
    cursor = db.cursor()
    cursor.execute(consulta_sel)
    data = cursor.fetchall()
    return data
