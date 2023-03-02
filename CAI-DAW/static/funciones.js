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

// Funciones a ejecutar en el windows load
window.onload = () => {
  // Configuración del menú de navegación
  let index = function inicio() {
    location.replace("/");
  };

  let registro = function registrar() {
    location.replace("/registrar");
  };

  let lista = function listaPaciente() {
    location.replace("/lista_paciente");
  };


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
  
  // Montar AJAX
  queryData(currentDNI, currentSlide, currentModal)

  
}

function queryData(currentDNI, currentSlide, currentModal){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(currentModal) {
    userData = this.response;
    updateModalElements(currentModal,userData)
    }
  xhttp.open("POST", "/consultarDatosPaciente", true);
  payload = `dni=${currentDNI}&tableNum=${currentSlide}`;
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(payload);
  return
}

function updateModalElements(currentModal,userData){
  // Update modal
  console.log(userData);  
  return
}