// Hem de generar ub botó i canviar l'event window.onload per un click buton
    document.getElementById("botoneraRandom").addEventListener("click",randomitzarFormulari)
    function randomitzarFormulari () {
    // Fins ara només està implementat el Form 1 
    // Form 1 
    document.getElementById("dni").value = rand_dni();
    document.getElementById("nom").value = randomName();
    document.getElementById("edat").value = randomInt(70,100);
    document.getElementById("sexe").value = randomElement(['H','D']);
    document.getElementById("LLoc_naixement").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador'])
    document.getElementById("Lloc_residencia").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador'])
    //viu_sol
    document.getElementById("familia_origen_pare").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador'])
    document.getElementById("familia_origen_mare").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador'])
    document.getElementById("familia_origen_germans").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador'])
    document.getElementById("rol_ocupa").value = randomElement(['Pare','Mare','Avi','Àvia','Cap'])
    document.getElementById("membres_integren").value = randomInt(2,4);
    //pren_medicaments_casa
    document.getElementById("temps_residencia").value = randomInt(10,60);
    document.getElementById("quins_medicaments").value = randomElement(['Danacol','Sintrom','Nolotil','NS/NC'])
    document.getElementById("problema_salut_actual").value = randomElement(['Diabetes','Hipertensió','Artrosi','Cap','Colesterol'])
    //familia_procreacio
    document.getElementById("familia_procreacio_si").value = randomRadioButton();
    document.getElementById("familia_procreacio_no").value = randomRadioButton();
    //ritme
    document.getElementById("ritme").value = randomInt(50,120);
    //frequencia_r
    document.getElementById("frequencia_r").value = randomInt(50,100);
    //amplitud
    document.getElementById("amplitud").value = randomInt(50,100)
    //respiració
    document.getElementById("familia_procreacio_bucal").value = randomRespiracio();
    document.getElementById("familia_procreacio_nasal").value = randomRespiracio();
    


    


}


function formatNumberLength(num, length) {
    var r = "" + num;
    while ( r.length < length ) {
      r = "0" + r;
    }
    return r;
  }
  
  function charDNI(dni) {
    var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
    var pos = dni % 23;
    var letter = chain.substring( pos, pos + 1 );
    return letter;
  }
  
  function rand_dni() {
    num = Math.floor( ( Math.random() * 100000000 ) );
    sNum = formatNumberLength( num, 8 );
    return sNum + charDNI( sNum );
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomElement(array){
    return array[Math.floor(Math.random() * array.length)];
  }

  function randomName(){
    names = ['Albert','Maria','Joan','Mohammed','Jair','Hayk','Fatima','Carles','Rosa']
    surnames = ['Garcia','Gonzalez','Alaoui','Hassan','Perez','Brown','Silva','Sargsyan','Roberto',
    'López','Hakobyan','Idrissi','León','Sánchez']
    return randomElement(names) + ' ' + randomElement(surnames) + ' ' + randomElement(surnames)

  }
  function randomRadioButton() {
    const options = ['SI', 'NO'];

    const randomIndex = Math.floor(Math.random() * options.length);

    if (randomIndex === 0) {
        document.getElementById("familia_procreacio_si").checked = true;
        document.getElementById("familia_procreacio_no").checked = false;
    } else {
        document.getElementById("familia_procreacio_si").checked = false;
        document.getElementById("familia_procreacio_no").checked = true;
    }
}

function randomRespiracio() {
  const options = ['BUCAL', 'NASAL'];

  const randomIndex = Math.floor(Math.random() * options.length);

  if (randomIndex === 0) {
      document.getElementById("tipus_respiracio_bucal").checked = true;
      document.getElementById("tipus_respiracio_nasal").checked = false;
  } else {
      document.getElementById("tipus_respiracio_bucal").checked = false;
      document.getElementById("tipus_respiracio_nasal").checked = true;
  }
}


