// formulario 5
window.onload = () => {
    // apartado b
    let siRadioButton = document.getElementById("siRadio");
    siRadioButton.addEventListener('change', habilitarParcialTotal);
  }
  
  function habilitarParcialTotal() {
    // console.log("siRadioButton seleccionado");
    let parcialRadioButton = document.getElementById("parcialRadio");
    let totalRadioButton = document.getElementById("totalRadio");
    parcialRadioButton.disabled = false;
    totalRadioButton.disabled = false;
  }

  window.onload = () =>{
    // apartado a
   let siRadioButton = document.getElementById("noRad");
   siRadioButton.addEventListener('change',habilitarParcialTotal);
  }
  
  function habilitarParcialTotal(){
   // console.log("siRadioButton seleccionado");
   let piezashabilescamponumerico = document.getElementById("totalnumber");
   piezashabilescamponumerico.disabled = false;
  }
