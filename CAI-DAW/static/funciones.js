function abrirMenu() {
  // Utilizar variables
  icono = document.getElementById("menu");
  menu = document.getElementById("myNav");
  lineas = document.getElementsByClassName("bar1");

  //Cambiamos el icono
  icono.classList.toggle("change");

  if (menu.style.width == "100%") {
    menu.style.width = "0%";
  } else {
    menu.style.width = "100%";
    lineas.style.color = "white";
  }
}

// function cerrarMenu() {
//   document.getElementById("myNav").style.width = "0%";
//   document.getElementById("caja-menu").style.display = "block";
// }
