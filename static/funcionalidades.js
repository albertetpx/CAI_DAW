window.onload = () =>{
    let siRadioButton = document.getElementById("siRadio");
    siRadioButton.addEventListener('change',habilitarParcialTotal);
}

function habilitarParcialTotal(){
    // console.log("siRadioButton seleccionado");
    let parcialRadioButton = document.getElementById("parcialRadio");
    let totalRadioButton = document.getElementById("totalRadio");
    parcialRadio.disabled = false;
    totalRadio.disabled = false;
}

// // Obtén una referencia al radio button "SI" y al contenedor de campos "Parcial" y "Total"
//   const siRadio = document.getElementById("siRadio");
//   const camposParcialTotal = document.getElementById("camposParcialTotal");

//   // Agrega un event listener para escuchar los cambios en el radio button "SI"
//   siRadio.addEventListener("change", function() {
//     if (siRadio.checked) {
//       // Si se selecciona "SI", muestra los campos "Parcial" y "Total"
//       camposParcialTotal.style.display = "block";
//     } else {
//       // Si no se selecciona "SI", oculta los campos "Parcial" y "Total"
//       camposParcialTotal.style.display = "none";
//     }
//   });
