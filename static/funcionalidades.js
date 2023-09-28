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


window.onload = () =>{
    let siRadioButton = document.getElementById("noRad");
    siRadioButton.addEventListener('change',habilitarParcialTotal);
}

function habilitarParcialTotal(){
    // console.log("siRadioButton seleccionado");
    let piezashabilescamponumerico = document.getElementById("totalnumber");
    piezashabilescamponumerico.disabled = false;
}
