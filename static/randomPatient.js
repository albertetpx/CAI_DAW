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
    document.getElementById("pressioArterial").value = randomInt(50,120);

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

     //tos_descripcioS
     document.getElementById("tos_descripcio").value = randomElement(['Tos seca','Tos productiva','Tos crònica o aguda','Tos psicògena',]);
     
    //mucositat
     document.getElementById("mucositat").value = randomElement(['Mucositat clara', 'Mucositat gruixuda', 'Mucositat groga', 'Mucositat amb sang', 'Mucositat excessiva', 
     'Mucositat nasal', 'Mucositat bronquial', 'Mucositat oral']);
    
     //mucositat_descripcio
     document.getElementById("mucositat_descripcio").value = randomElement(['Mucositat transparent i fluida', 'Mucositat espessa i viscosa', 'Mucositat de color groc o verd', 
     'Mucositat amb sang', 'Quantitat anormalment alta de mucositat', 'Mucositat a la narina', 'Mucositat als bronquis', 'Mucositat a la boca']);

    // Expectoració
     document.getElementById("expectoracio_si").value = randomRadioButton("expectoracio_si","expectoracio_no",2);
     document.getElementById("expectoracio_no").value = randomRadioButton("expectoracio_si","expectoracio_no",2);
     //altres_manifestacions2
      document.getElementById("altres_manifestacions2").value = randomElement(['Espiracions amb mucositat', 'Dificultat per expulsar la mucositat', 'Garganta irritada', 'Nas congestionat', 
      'Tos persistente', 'Mucositat en les vies respiratòries', 'Expectoració', 'Mucositat en la boca']);

      //situacions_influencien_respiracio
      document.getElementById("situacions_influencien_respiracio_si").value = randomRadioButton("situacions_influencien_respiracio_si","situacions_influencien_respiracio_no",2);
      document.getElementById("situacions_influencien_respiracio_no").value = randomRadioButton("situacions_influencien_respiracio_si","situacions_influencien_respiracio_no",2);

      //quines_influencien2
      document.getElementById("quines_influencien2").value = randomElement(['Exercici intens', 'Allèrgies', 'Infecció respiratòria', 'Fum de tabac', 'Pol·lució atmosfèrica', 'Canvis de temperatura', 'Estrès', 'Consum alcohol']);
      
      //mitja_utilitza_respirar_millor
      document.getElementById("mitja_utilitza_respirar_millor").value = randomElement(['Inhalador', 'Hidratant nasal', 'Gargarejos amb aigua salada', 'Respiració profunda',
       'Umidificador', 'Medicaments antial·lèrgics', 'Estiraments', 'Màscara oxigen']);

       //fuma
       document.getElementById("fuma_si").value = randomRadioButton("fuma_si","fuma_no",2);
       document.getElementById("fuma_no").value = randomRadioButton("fuma_si","fuma_no",2);
      // Inici 5ª pagina del formulari
      // Menjar i beure
      document.getElementById("pes").value = randomInt(50,120);
      document.getElementById("talla").value = randomInt(140,210);
      document.getElementById("pecesDentals").value = randomInt(0,32);
      // Tipus de dentadura
      document.getElementById("Parcial").value = randomRadioButton("Parcial","Total",2);
      document.getElementById("Total").value =  randomRadioButton("Parcial","Total",2);
      // Masticació
      document.getElementById("Lenta").value = randomRadioButton("Lenta","Rapida",2);
      document.getElementById("Rapida").value =  randomRadioButton("Lenta","Rapida",2);
      // Deglució
      document.getElementById("tipusDeglucio").value = randomElement(['Deglució voluntaria', 'Deglució involuntaria / Fase Oral', 'Deglució involuntaria / Fase Faríngia', 'Deglució involuntaria / Fase Espfàgica']);
      document.getElementById("tipusDieta").value = randomElement(['Dieta Basal', 'Dieta líquida clara', 'Dieta líquida completa', 'Dieta tova o poca fibra', 'DIeta baixa en sodi', 'Dieta baixa en greixos', 'Dieta baixa en sucres', 'Dieta sense gluten', 'Dieta Vegana', 'Dieta enteral', 'Dieta parenteral']);
      // Àpats
      document.getElementById("esmorzar").value = randomElement(['pa', 'cereals', 'fruita', 'cafe','iogurt','fruits secs','embotit','formatge']);
      document.getElementById("dinar").value = randomElement(['amanida', 'arròs', 'pasta', 'llegums', 'carn', 'peix', 'ous','iogurt','fruita']);
      // Final 5ª pagina del formulari

      // Inici 6ª pagina del formulari
      document.getElementById("berenar").value = randomElement(['pa', 'cereals', 'fruita', 'cafe','iogurt','fruits secs','embotit','formatge']);
      document.getElementById("sopar").value = randomElement(['amanida', 'arròs', 'pasta', 'llegums', 'carn', 'peix', 'ous','iogurt','fruita']);
      document.getElementById("altres").value = randomElement(['cervesa', 'vi', 'te', 'bolleria', 'Bitter Kas']);
      document.getElementById("sensacioRespecteAlMenjar").value = randomElement(['plaer', 'degustació', 'sacietat', 'fam', 'repugnància','cansament']);
      document.getElementById("restriccio").value = randomElement(['lactosa', 'gluten', 'marisc', 'ou', 'llegums','peixos']);
      document.getElementById("habitualment_menja_CASA").value = randomRadioButton("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_FEINA").value = randomRadioButton("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_RESTAURANT").value = randomRadioButton("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_SOL").value = randomRadioButton("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_ACOMPANYAT").value = randomRadioButton("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("situacions_influencien_habits_alimentalis_si").value = randomRadioButton("situacions_influencien_habits_alimentalis_si","situacions_influencien_habits_alimentalis_no",2);
      document.getElementById("situacions_influencien_habits_alimentalis_no").value = randomRadioButton("situacions_influencien_habits_alimentalis_si","situacions_influencien_habits_alimentalis_no",2);
      document.getElementById("quines_situacions").value = randomElement(['problemes de salut','distraccións amb el telèfon',"reunions d'ultima hora",'cap']);
      document.getElementById("mitjans_utilitza_millorar").value = randomElement(['medicació adequada pels signes i simptomes', "desconexió de la tecnología a l'hora dels àpats", 'saber demanar una pausa per menjar','cap']);
      document.getElementById("altres_manifestacions3").value = randomElement(['cap']);
      // Fi de la 6ª pagina del formulari
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





