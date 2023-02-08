function abrirMenu() {
  // Utilizar variables
  icono = document.getElementById("menu");
  menu = document.getElementById("myNav");
  linea1 = document.getElementById("bar1");
  linea2 = document.getElementById("bar2");
  linea3 = document.getElementById("bar3");

  //Cambiamos el icono
  icono.classList.toggle("change");

  if (menu.style.width == "100%") {
    menu.style.width = "0%";
    linea1.style.backgroundColor = "#223645"
    linea2.style.backgroundColor = "#223645";
    linea3.style.backgroundColor = "#223645";
  } else {
    menu.style.width = "100%";
    linea1.style.backgroundColor = "white"
    linea2.style.backgroundColor = "white";
    linea3.style.backgroundColor = "white";
  }
}

let index = function inicio() {
  location.replace("/");
}

let registro = function registrar() {
  location.replace("/registrar");
}

let lista = function listaPaciente() {
  location.replace("/lista_paciente");
}


// Get the modal
var modal = document.getElementById("paciente-details");

//activar listener de los cardView
var card = document.querySelectorAll(".card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Para cada card qué ha sido pulsado, utilizamos la función
card.forEach(function (item) {
	item.onclick = displayModal;
})

// When the user clicks on the button, open the modal
function displayModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

