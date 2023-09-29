// Hem generat un botó i implementant un listener activem el formulari aleatori.
    document.getElementById("botoneraRandom").addEventListener("click",randomitzarFormulari)
    function randomitzarFormulari () {
    // Espai dedicat al canvi d'ordre a procedir
    // sexe = document.getElementById("sexe").value = randomElement(["H","D"]);
    // if (sexe === "H"){
    //   paisOrigen = document.getElementById("Lloc_naixement").value = randomPaisOrigen();
    //   if (paisOrigen === "España") {
    //     document.getElementById("familia_origen_pare").value = origenPare();
    //     document.getElementById("familia_origen_mare").value = origenMare();
    //   }
    //   else if (paisOrigen === "Brasil") {

    //   }
    //   else if (paisOrigen === "Armenia") {

    //   }
    //   else if (paisOrigen === "Marruecos") {

    //   }
    //   else if (paisOrigen === "Ecuador") {

    //   }
    // }
    // else { // Cas de ser dona
    //   paisOrigen = document.getElementById("Lloc_naixement").value = randomPaisOrigen();
    //   if (paisOrigen === "España") {

    //   }
    //   else if (paisOrigen === "Brasil") {

    //   }
    //   else if (paisOrigen === "Armenia") {

    //   }
    //   else if (paisOrigen === "Marruecos") {

    //   }
    //   else if (paisOrigen === "Ecuador") {
        
    //   }
    // }

    // Fins ara només està implementat el Form 1 
    // Form 1 
    document.getElementById("dni").value = rand_dni();
    document.getElementById("nom").value = randomName();
    document.getElementById("edat").value = randomInt(70,100);
    document.getElementById("sexe").value = randomElement(['H','D']);
    document.getElementById("LLoc_naixement").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador']);
    document.getElementById("Lloc_residencia").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador']);
    //viu_sol
    document.getElementById("familia_origen_pare").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador']);
    document.getElementById("familia_origen_mare").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador']);
    document.getElementById("familia_origen_germans").value = randomElement(['España','Brasil','Armenia','Marruecos','Ecuador']);
    document.getElementById("rol_ocupa").value = randomElement(['Pare','Mare','Avi','Àvia','Cap']);
    document.getElementById("membres_integren").value = randomInt(2,4);
    //pren_medicaments_casa
    document.getElementById("temps_residencia").value = randomInt(10,60);
    document.getElementById("pren_medicaments_casa_si").value = randomRadioButton("pren_medicaments_casa_si","pren_medicaments_casa_no",2);
    document.getElementById("pren_medicaments_casa_no").value = randomRadioButton("pren_medicaments_casa_si","pren_medicaments_casa_no",2);
    document.getElementById("quins_medicaments").value = randomElement(['Danacol','Sintrom','Nolotil','NS/NC']);
    document.getElementById("problema_salut_actual").value = randomElement(['Diabetes','Hipertensió','Artrosi','Cap','Colesterol'])
    //familia_procreacio
    document.getElementById("familia_procreacio_si").value = randomRadioButton("familia_procreacio_si","familia_procreacio_no",2);
    document.getElementById("familia_procreacio_no").value = randomRadioButton("familia_procreacio_si","familia_procreacio_no",2);
    //ritme
    document.getElementById("ritme").value = randomInt(50,120);
    //frequencia_r
    document.getElementById("frequencia_r").value = randomInt(50,100);
    //amplitud
    document.getElementById("amplitud").value = randomInt(50,100);
    //respiració
    document.getElementById("tipus_respiracio_bucal").value = randomRadioButton("tipus_respiracio_bucal","tipus_respiracio_nasal",2);
    document.getElementById("tipus_respiracio_nasal").value =  randomRadioButton("tipus_respiracio_bucal","tipus_respiracio_nasal",2);
    //orifisis_nasals_permeables
    document.getElementById("orifisis_nasals_permeables").value = randomElement(['Obert','Taponat']);
    //frequencia_cardiaca
    document.getElementById("frequencia_cardiaca").value = randomInt(50,120);
    //pa 
    document.getElementById("pa").value = randomInt(50,120);

    //coloracio_mucoses
    document.getElementById("coloracio_mucoses").value = randomElement(['Verda','Blava','Lila','Vermella']);
    //coloracio_pell
    document.getElementById("coloracio_pell").value = randomElement(['Clara','Morena','Fosca']);
     //respiració
     document.getElementById("tipus_respiracio_silenciosa").value = randomRadioButton("tipus_respiracio_silenciosa","tipus_respiracio_sorollosa",2);
     document.getElementById("tipus_respiracio_sorollosa").value = randomRadioButton("tipus_respiracio_silenciosa","tipus_respiracio_sorollosa",2);

     //Tos
     document.getElementById("tos_si").value = randomRadioButton("tos_si","tos_no",2);
     document.getElementById("tos_no").value = randomRadioButton("tos_si","tos_no",2);

     //tos_descripcio
     document.getElementById("tos_descripcio").value = randomElement(['Tos seca','Tos productiva','Tos crònica o aguda','Tos psicògena',]);

     
    



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
  function randomRadioButton(id1, id2, size) {
    const randomIndex = Math.floor(Math.random() * size);

    if (randomIndex === 0) {
        document.getElementById(id1).checked = true;
        document.getElementById(id2).checked = false;
    } else {
        document.getElementById(id1).checked = false;
        document.getElementById(id2).checked = true;
    }
}





