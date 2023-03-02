// Variables globales //////////////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var modal = document.getElementById("paciente-details");
var span = document.getElementsByClassName("close")[0];
var currentUser = "";

// Configuración del menú de navegación
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


// Funciones a ejecutar en el windows load
window.onload = () => {
   // Configuración del swiper
  var card = Array.from(document.getElementsByClassName("card"));
  var swiperButtonPrev = Array.from(document.getElementsByClassName("swiper-button-prev"));
  var swiperButtonNext = Array.from(document.getElementsByClassName("swiper-button-next"));

  card.forEach(function (item) {
    item.onclick = displayModal;
  });

  swiperButtonPrev.forEach(function (item) {
    item.onclick = swipeSlide;
  });

  swiperButtonNext.forEach(function (item) {
    item.onclick = swipeSlide;
  });
};

window.onclick = function (event) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// Funciones del menú de navegación ////////////////////////////////////////////////////////////////
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

//Funciones de interactividad del swiper ///////////////////////////////////////////////////////////
function displayModal() {
  currentUser = this.id;
  getDataForModal();
  modal.style.display = "block";
}

function swipeSlide() {
  getDataForModal();
  modal.style.display = "block";
}

function getDataForModal(card) {
  currentDNI = currentUser;
  currentSlide = swiper.realIndex;
  currentModal = swiper.slides[swiper.realIndex];
  // console.log(currentModal);
  // Montar AJAX
  queryData(currentDNI, currentSlide, currentModal)
}

function queryData(currentDNI, currentSlide, currentModal) {
  const xhttp = new XMLHttpRequest(); 
  xhttp.onload = function () {
    userData = JSON.parse(this.responseText);
    updateModalElements(currentModal, userData)
  }
  xhttp.open("POST", "/consultarDatosPaciente", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  payload = `dni=${currentDNI}&tableNum=${currentSlide}`;
  xhttp.send(payload);
  return
}

function updateModalElements(currentModal, userData) {
  // Update modal
  // console.log(currentModal);
  let modalContent = currentModal.children[0]
  // modalContent.innerHTML = userData;
  createTable(modalContent,userData)
  return
}

function createTable(modalContent,userData){
  let tables = document.getElementsByClassName("dataTable")[0];
  if (tables != undefined){
    tables.remove();  
  }

  //Creamos tabla
  let table = document.createElement('table');
  table.classList.add("dataTable");
  let rowHeading = document.createElement('tr');
  let rowData = document.createElement('tr');
  // console.log(userData[0]);
  //Crear celdas de encabezado
  for (let heading of userData[0]){
    // console.log(heading)
    let th = document.createElement('th');
    th.innerHTML = heading;
    rowHeading.append(th)
  }
  //Crear celdas de datos
  for (let data of userData[1]){
    // console.log(data)
    let td = document.createElement('td');
    td.innerHTML = data;
    rowData.append(td)
  }
  //Montamos tabla
  table.append(rowHeading);
  table.append(rowData);
  modalContent.append(table);

}