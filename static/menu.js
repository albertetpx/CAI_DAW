function inicio() {
  location.replace("/");
};

function registrar() {
  console.log("Boton registrar clicado")
  location.replace("/registrar");
};

function listarPacientes() {
  location.replace("/lista_paciente");
};

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
    linea1.style.backgroundColor = "#223645";
    linea2.style.backgroundColor = "#223645";
    linea3.style.backgroundColor = "#223645";
  } else {
    menu.style.width = "100%";
    linea1.style.backgroundColor = "white";
    linea2.style.backgroundColor = "white";
    linea3.style.backgroundColor = "white";
  }
}
