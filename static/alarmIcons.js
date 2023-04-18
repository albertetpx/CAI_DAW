window.onload = function () {
    cargasAlarmas();
}

function cargasAlarmas() {
    // Cojo todas las cards
    let cards = Array.from(document.getElementsByClassName("text-card"));

    cards.forEach(function (element) {
        dni = element.children[0].children[0].innerHTML;
        pedirAlarmasPaciente(dni, element);
    });
}


function pedirAlarmasPaciente(dni, element) {
    const xmlhhtp = new XMLHttpRequest();

    xmlhhtp.open('POST', '/consultarAlarmasPaciente', true);

    xmlhhtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const data = JSON.parse(this.responseText);
            const pacient = data.pacientes[0];


            var alarma = element.querySelectorAll('.alarmes > div');

            if (pacient.tos === "a") {
                alarma[0].classList.add('activa');
            }
            if (pacient.expectoracio === "a") {
                alarma[1].classList.add('activa');
            }
            if (pacient.influencia_respiracio === "a") {
                alarma[2].classList.add('activa');
            }
            if (pacient.fuma === "a") {
                alarma[3].classList.add('activa');
            }
            if (pacient.influencia_aliments === "a") {
                alarma[4].classList.add('activa');
            }
            if (pacient.influencia_eliminacio === "a") {
                alarma[5].classList.add('activa');
            }
            if (pacient.influencia_moure_cos === "a") {
                alarma[6].classList.add('activa');
            }
            if (pacient.influencia_son === "a") {
                alarma[7].classList.add('activa');
            }
            if (pacient.influencia_vestimenta === "a") {
                alarma[8].classList.add('activa');
            }
            if (pacient.influencien_termoregulacio === "a") {
                alarma[9].classList.add('activa');
            }
            if (pacient.influencien_higene === "a") {
                alarma[10].classList.add('activa');
            }
            if (pacient.influencien_seguretat === "a") {
                alarma[11].classList.add('activa');
            }
            if (pacient.influencien_comunicacio === "a") {
                alarma[12].classList.add('activa');
            }
        }

    }

    xmlhhtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    payload = `dni=${dni}`
    xmlhhtp.send(payload);
}


// function conectionBD(dni) {
//     const mysql = require('mysql');

//     // Configuración de la conexión a la base de datos
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'el.moounirejh1',
//         database: 'formulario_cai'
//     });

//     // Conexión a la base de datos
//     connection.connect((err) => {
//         if (err) {
//             console.error('Error de conexión:', err.stack);
//             return;
//         }
//         console.log('Conexión establecida con ID:', connection.threadId);
//     });

//     // Consulta SELECT
//     connection.query(`SELECT * FROM alarma where dni="${dni}"`, (err, res) => {
//         if (err) {
//             throw err;
//         } else {
//             return res;
//         }
//     });

//     // Cerrar la conexión a la base de datos
//     connection.end((err) => {
//         if (err) {
//             console.error('Error al cerrar la conexión:', err.stack);
//             return;
//         }
//         console.log('Conexión cerrada.');
//     });

// }

// function createAlarmElement() {
//     div = document.createElement('div');
// }