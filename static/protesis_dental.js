// formulario 5
window.onload = () => {
  // apartado b
  let siRadioButton = document.getElementById("siRadio");
  siRadioButton.addEventListener('change', habilitarParcialTotalB);

  // apartado a
  let noRadioButton = document.getElementById("noRad");
  noRadioButton.addEventListener('change', habilitarParcialTotalA);
}

function habilitarParcialTotalB() {
  let parcialRadioButton = document.getElementById("parcialRadio");
  let totalRadioButton = document.getElementById("totalRadio");
  parcialRadioButton.disabled = false;
  totalRadioButton.disabled = false;
}

function habilitarParcialTotalA() {
  let piezashabilescamponumerico = document.getElementById("totalnumber");
  piezashabilescamponumerico.disabled = false;
}
