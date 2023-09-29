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


////diccionario para modificar _CC
const diccionarioTablas = {
  t1:"info_general" , 
  t2:"necesitat_dormir_reposar",
  t3:"necesitat_aprendre",
  t4:"necesitat_comunicar",
  t5:"necesitat_eliminar",
  t6:"necesitat_esbargir",
  t7:"necesitat_estar_net_polt_protegir_teguments",
  t8:"necesitat_evitar_perills",
  t9:"necesitat_mantenir_temperatura_corporal_limits_normals",
  t10:"necesitat_menjar_beure",
  t11:"necesitat_moure_mantenir_postura_adequada",
  t12:"necesitat_ocupar_realitzar",
  t13:"necesitat_respirar",
  t14:"necesitat_vestir_desvestir",
  t15:"necesitat_viure_creences_valors"
}

// Funciones a ejecutar en el windows load
window.onload = () => {
  // Leer alarmas
  cargasAlarmas();

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

//Funciones de interactividad del swiper ///////////////////////////////////////////////////////////
function displayModal() {
  currentUser = this.id;
  swiper.realIndex = 0;
  swiper.activeIndex = 0;
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
  currentModal = swiper.slides[swiper.activeIndex];
  // console.log(`active: ${swiper.activeIndex}, real: ${swiper.realIndex}`)
  // console.log(currentModal);
  // Montar AJAX
  queryData(currentDNI, currentSlide, currentModal)
}

function queryData(currentDNI, currentSlide, currentModal) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    userData = JSON.parse(this.responseText);
    console.log(userData);
    updateModalElements(currentModal, userData)
  }
  xhttp.open("POST", "/consultarDatosPaciente", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  payload = `dni=${currentDNI}&tableNum=${currentSlide}`;
  xhttp.send(payload);
}

///UPDATE PAAR MODIFICAR DATOS BD
function saveToDataBase(currentDNI, currentSlide) { 
  currentDNI=dni
}


function updateModalElements(currentModal, userData) {
  // Update modal
  // console.log(currentModal);
  let modalContent = currentModal.children[0]
  //  modalContent.innerHTML = userData;
  createTable(modalContent, userData)
}

function createTable(modalContent, userData) {
  let tables = document.getElementsByClassName("dataTable")[0];
  if (tables != undefined) {
    tables.remove();
  }


  //Creamos tabla
  let table = document.createElement('div');
  table.classList.add("dataTable");
  //Crear celdas de encabezado
  userData[0].forEach(function(value,index){
    // console.log(heading)


    // crear button para cada modificar el valor de cada celda
    let modifyButton = document.createElement('button');
    modifyButton.classList.add("buttonmodify");
    modifyButton.innerHTML="Modificar";
    // añadir evento al button
    // modifyButton.addEventListener("click", modificarValorFormulario,false);


    //  añadir evento al button
    modifyButton.addEventListener("click", function () {
      // función para editar el valor
      editValue(dataCell, userData[1][index]);


    });


// crear los elementos de cada cela
    let cell = document.createElement('div');
    cell.classList.add("cell");
    let headingCell = document.createElement('div');
    headingCell.classList.add("headingCell");
    let dataCell = document.createElement('div');
    dataCell.classList.add("dataCell");
    headingCell.innerHTML = value;
    dataCell.innerHTML = userData[1][index];
    cell.append(headingCell);
    cell.append(dataCell);
    table.append(cell);


    // Append para agregar el button en el heading cell
    headingCell.append(modifyButton);
  })
  modalContent.append(table);
}

function editValue(cell, initialValue) {
  const editingValue = document.createElement("input");
  editingValue.type = "text";
  editingValue.value = initialValue;

  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Guardar";

  saveButton.addEventListener("click", function () {
    // conseguir el valor modificado que el usuario ingresa como input
    const modifiedValue = editingValue.value;

    // actualizar el dato modificado en la celda
    cell.innerHTML = modifiedValue;

    // Elimina el input y el botón guardar
    saveButton.remove();
  });

  cell.innerHTML = '';
  cell.appendChild(editingValue);
  cell.appendChild(saveButton);
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

          if (pacient.tos === "SI") {
              alarma[0].classList.add('activa');
          }
          if (pacient.expectoracio === "SI") {
              alarma[1].classList.add('activa');
          }
          if (pacient.influencia_respiracio === "SI") {
              alarma[2].classList.add('activa');
          }
          if (pacient.fuma === "SI") {
              alarma[3].classList.add('activa');
          }
          if (pacient.influencia_aliments === "SI") {
              alarma[4].classList.add('activa');
          }
          if (pacient.influencia_eliminacio === "SI") {
              alarma[5].classList.add('activa');
          }
          if (pacient.influencia_moure_cos === "SI") {
              alarma[6].classList.add('activa');
          }
          if (pacient.influencia_son === "SI") {
              alarma[7].classList.add('activa');
          }
          if (pacient.influencia_vestimenta === "SI") {
              alarma[8].classList.add('activa');
          }
          if (pacient.influencien_termoregulacio === "SI") {
              alarma[9].classList.add('activa');
          }
          if (pacient.influencien_higene === "SI") {
              alarma[10].classList.add('activa');
          }
          if (pacient.influencien_seguretat === "SI") {
              alarma[11].classList.add('activa');
          }
          if (pacient.influencien_comunicacio === "SI") {
              alarma[12].classList.add('activa');
          }
      }

  }

  xmlhhtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  payload = `dni=${dni}`
  xmlhhtp.send(payload);
}
