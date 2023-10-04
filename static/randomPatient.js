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
      document.getElementById("habitualment_menja_CASA").value = randomRadioButtonRange5("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_FEINA").value = randomRadioButtonRange5("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_RESTAURANT").value = randomRadioButtonRange5("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_SOL").value = randomRadioButtonRange5("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("habitualment_menja_ACOMPANYAT").value = randomRadioButtonRange5("habitualment_menja_CASA","habitualment_menja_FEINA","habitualment_menja_RESTAURANT","habitualment_menja_SOL","habitualment_menja_ACOMPANYAT",5);
      document.getElementById("situacions_influencien_habits_alimentalis_si").value = randomRadioButton("situacions_influencien_habits_alimentalis_si","situacions_influencien_habits_alimentalis_no",2);
      document.getElementById("situacions_influencien_habits_alimentalis_no").value = randomRadioButton("situacions_influencien_habits_alimentalis_si","situacions_influencien_habits_alimentalis_no",2);
      document.getElementById("quines_situacions").value = randomElement(['problemes de salut','distraccións amb el telèfon',"reunions d'ultima hora",'cap']);
      document.getElementById("mitjans_utilitza_millorar").value = randomElement(['medicació adequada pels signes i simptomes', "desconexió de la tecnología a l'hora dels àpats", 'saber demanar una pausa per menjar','cap']);
      document.getElementById("altres_manifestacions3").value = randomElement(['cap']);
      // Fi de la 6ª pagina del formulari

      // Inici de la 7ª pagina del formulari
      document.getElementById("frequencia_orina").value = randomInt(2,10);
      document.getElementById("quantitat_orinar").value = randomInt(0.5,3);
      document.getElementById("aspecte_orina").value = randomElement(['groguenca', 'blanca', 'enturbiada', 'roja','olorosa']);
      document.getElementById("frequencia_femtes").value = randomInt(2,6);
      document.getElementById("quantitat_femtes").value = randomInt(0.5,3);
      document.getElementById("aspecte_femtes").value = randomElement(['marrò', 'negra', 'roja', 'líquida','dura','tova']);
      document.getElementById("suor_si").value = randomRadioButton("suor_si","suor_no",2);
      document.getElementById("suor_no").value = randomRadioButton("suor_si","suor_no",2);
      document.getElementById("quantitat_suor").value = randomInt(0.2,1);
      document.getElementById("aspecte_suor").value = randomElement(['poc olorosa', 'sense olor', 'pudenta']);
      document.getElementById("regla_si").value = randomRadioButton("regla_si","regla_no",2);
      document.getElementById("regla_no").value = randomRadioButton("regla_si","regla_no",2);
    // Fi de la 7ª pagina del formulari

    // Inici de la 8ª pagina del formulari
    document.getElementById("situacions_influencien_habits_eliminacio_si").value = randomRadioButton("situacions_influencien_habits_eliminacio_si","situacions_influencien_habits_eliminacio_no",2);
    document.getElementById("situacions_influencien_habits_eliminacio_no").value = randomRadioButton("situacions_influencien_habits_eliminacio_si","situacions_influencien_habits_eliminacio_no",2);
    document.getElementById("quines_influencien4").value = randomElement(["situació d'estrés", 'medicació', 'vida sedentaria','poca fibra']);
    document.getElementById("mitjans_utilitzar_eliminar_millor").value = randomElement(["meditació", 'aliments rics en fibra', 'prendre aliments amb proviotics naturals','fer exercici']);
    document.getElementById("altres_manifestacions4").value = randomElement(["sang en femtes", 'incontinència fecal', 'canvis en la consistència','eliminacións doloroses',"síndrome de l'intestí irritable"]);
    // Fi de la 8ª pagina del formulari

    // Inici de la 9ª pagina del formulari
    document.getElementById("pot_moure_totes_parts_cos_si").value = randomRadioButton("pot_moure_totes_parts_cos_si","pot_moure_totes_parts_cos_no",2);
    document.getElementById("pot_moure_totes_parts_cos_no").value = randomRadioButton("pot_moure_totes_parts_cos_si","pot_moure_totes_parts_cos_no",2);
    // No te sentit preguntar quines parts pot moure i el perque serà tot el contrari
    document.getElementById("quines_parts").value = randomElement(["cama dreta", "cama esquerra", "braç dret", "braç esquerra","cap"]);
    document.getElementById("perque_pot_moure").value = randomElement(["amputació", "paraplègia", "tetraplègia", "esguinç"]);
    document.getElementById("esEsquerra").value = randomRadioButton("esEsquerra","esDreta",2);
    document.getElementById("esDreta").value = randomRadioButton("esEsquerra","esDreta",2);
    document.getElementById("posturaHabitual").value = randomElement(["?","¿","¿?"]);
    document.getElementById("activitatsFisiques").value = randomElement(["passejat", "bicicleta", "natació", "aquagim"]);
    document.getElementById("situacions_interfereixen_mobilitat_si").value = randomRadioButton("situacions_interfereixen_mobilitat_si","situacions_interfereixen_mobilitat_no",2);
    document.getElementById("situacions_interfereixen_mobilitat_no").value = randomRadioButton("situacions_interfereixen_mobilitat_si","situacions_interfereixen_mobilitat_no",2);
    document.getElementById("quines_situacions_interfreixen_mobilitat").value = randomElement(["marejos", "desequilibri", "paràlisi temporal"]);
    document.getElementById("mitjans_utilitza_moure_millor_mantenir_postura_adequada").value = randomElement(["repòs", "respirar profundament", "prendre glucosa"]);
    document.getElementById("altres_manifestacions5").value = randomElement(["tremolors", "fatiga"]);
    // Fi de la 9ª pagina del formulari

    // Inici de la 10ª pagina del formulari
    document.getElementById("hores_dorm").value = randomInt(6,10);
    document.getElementById("migdiadaSi").value = randomRadioButton("migdiadaSi","migdiadaNo",2);
    document.getElementById("migdiadaNo").value = randomRadioButton("migdiadaSi","migdiadaNo",2);
    document.getElementById("qualitatSonTranquil").value = randomRadioButtonRange3("qualitatSonTranquil","qualitatSonMalsons","qualitatSonInterrupcions",3);
    document.getElementById("qualitatSonMalsons").value = randomRadioButtonRange3("qualitatSonTranquil","qualitatSonMalsons","qualitatSonInterrupcions",3);
    document.getElementById("qualitatSonInterrupcions").value = randomRadioButtonRange3("qualitatSonTranquil","qualitatSonMalsons","qualitatSonInterrupcions",3);
    document.getElementById("situacions_influencien_son_si").value = randomRadioButton("situacions_influencien_son_si","situacions_influencien_son_no",2);
    document.getElementById("situacions_influencien_son_no").value = randomRadioButton("situacions_influencien_son_si","situacions_influencien_son_no",2);
    document.getElementById("quienes_situacions_influencien_son").value = randomElement(["set","dolors","tos"]);
    document.getElementById("mitjans_utilitza_dormir_millor_reposar").value = randomElement(["tenir aigua a prop","prendre medicació","so de fons"]);
    document.getElementById("altres_manifestacions6").value = randomElement(["?","¿","¿?"]);
    // Fi de la 10ª pagina del formulari

    // Inici de la 11ª pagina del formulari
    document.getElementById("significat_roba").value = randomElement(["Expressió personal","Estatus","religiós","proteccio i funcinalitat"]);
    document.getElementById("tipus_roba").value = randomElement(["Teixits fins","teixits gruixuts","maniga curta","maniga llarga", "falda", "vestit","texà","vermudes","sabates","bambes","espardenyes","mitjóns","mitjes"]);
    document.getElementById("capacitat_vestir_desvestir_si").value = randomRadioButton("capacitat_vestir_desvestir_si","capacitat_vestir_desvestir_no",2);
    document.getElementById("capacitat_vestir_desvestir_no").value = randomRadioButton("capacitat_vestir_desvestir_si","capacitat_vestir_desvestir_no",2);
    document.getElementById("situacions_influencien_vestimenta_si").value = randomRadioButton("situacions_influencien_vestimenta_si","situacions_influencien_vestimenta_no",2);
    document.getElementById("situacions_influencien_vestimenta_no").value = randomRadioButton("situacions_influencien_vestimenta_si","situacions_influencien_vestimenta_no",2);
    document.getElementById("quines_situacions_influencien_vestimenta").value = randomElement(["desequilibri","transtorns de conducta","pèrdua de memria","dolor als moviments amplis"]);
    document.getElementById("mitjans_millorar_satisfaccio_vestir_desvestir").value = randomElement(["premis","castics"]);
    document.getElementById("altres_manifestacions7").value = randomElement(["¿?","¿","?"]);
    // Fi de la 11ª pagina del formulari

    // Inici de la 12ª pagina del formulari
    document.getElementById("temperatura_pell").value = randomInt(35,40);
    document.getElementById("temperatura_axilar").value = randomInt(35,40);
    document.getElementById("com_sent_temperatura_ambient").value = randomElement(["calorosa","fredolica"]);
    document.getElementById("situacions_influencien_termoregulacio_si").value = randomRadioButton("situacions_influencien_termoregulacio_si","situacions_influencien_termoregulacio_no",2);
    document.getElementById("situacions_influencien_termoregulacio_no").value = randomRadioButton("situacions_influencien_termoregulacio_si","situacions_influencien_termoregulacio_no",2);
    document.getElementById("quines_situacions_influencien_termoregulacio").value = randomElement(["deshidratació","humitat","sequedat"]);
    document.getElementById("altres_manifestacions8").value = randomElement(["¿?","¿","?"]);
    document.getElementById("mitjans_utilitza_mantenir_temperatura").value = randomElement(["Ficar-se capes","retirar capes","hidratar-se"]);
    // Fi de la 12ª pagina del formulari

    // Inici de la 13ª pagina del formulari
    document.getElementById("condicions_higeniques_pell_mucoses").value = randomElement(["Bon estat","deteriorades"]);
    document.getElementById("descripcio_condicions_pell_mucosa").value = randomElement(["¿?","¿","?"]);
    document.getElementById("habits_higene_corporal").value = randomElement(["neteja diària","aigua i sabo suaus","neteja en sec"]);
    document.getElementById("habits_higene_bucal").value = randomElement(["desprès de cada àpat","3 cops al dia","1 cop al dia","de tant en quant"]);
    document.getElementById("situacions_influencien_higene_si").value = randomRadioButton("situacions_influencien_higene_si","situacions_influencien_higene_no",2);
    document.getElementById("situacions_influencien_higene_no").value = randomRadioButton("situacions_influencien_higene_si","situacions_influencien_higene_no",2);
    document.getElementById("quines_situacions_influencien_higene").value = randomElement(["discapacitat","dificultat d'accés a aigues de sanejament","recursos limitats","problemes de salut mental","estil de vida"]);
    document.getElementById("mijans_utilitza_millorar_higene").value = randomElement(["accès a l'aigua de sanejament","educació en higiene","distribució de recursos d'higiene","adaptació a les necessitats pròpies"]);
    document.getElementById("altres_manifestacions9").value = randomElement(["¿?","¿","?"]);
    // Fi de la 13ª pagina del formulari

    // Inici de la 14ª pagina del formulari
    document.getElementById("coneix_mides_prevencio").value = randomElement(["si","no"]);
    document.getElementById("salubritat_medi_1").value = randomElement(["¿?","¿","?"]);
    document.getElementById("salubritat_habitat_1").value = randomElement(["¿?","¿","?"]);
    document.getElementById("lloc_treball").value = randomElement(["si","no","alguns"]);
    document.getElementById("situacions_circumstancies_seguretat_fisica_psicologica_social_si").value = randomRadioButton("situacions_circumstancies_seguretat_fisica_psicologica_social_si","situacions_circumstancies_seguretat_fisica_psicologica_social_no",2);
    document.getElementById("situacions_circumstancies_seguretat_fisica_psicologica_social_no").value = randomRadioButton("situacions_circumstancies_seguretat_fisica_psicologica_social_si","situacions_circumstancies_seguretat_fisica_psicologica_social_no",2);
    document.getElementById("quines_situacions_seguretat_fisica_psicologica_social").value = randomElement(["pressió social","companys de treball","problemes familiars","males amistats"]);
    document.getElementById("mitjans_utilitza_proteccio").value = randomElement(["selecció selectiva de les companyies","?","¿"]);
    document.getElementById("altres_manifestacio10").value = randomElement(["¿?","¿","?"]);
    // Fi de la 14ª pagina del formulari
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
    function randomRadioButtonRange3(id1, id2, id3, size) {
      const randomIndex = Math.floor(Math.random() * size);
  
      if (randomIndex === 0) {
          document.getElementById(id1).checked = true;
          document.getElementById(id2).checked = false;
          document.getElementById(id3).checked = false;
      } else if (randomIndex === 1) {
          document.getElementById(id1).checked = false;
          document.getElementById(id2).checked = true;
          document.getElementById(id3).checked = false;
      }
      else {
          document.getElementById(id1).checked = false;
          document.getElementById(id2).checked = false;
          document.getElementById(id3).checked = true;
      }
}
    function randomRadioButtonRange5(id1, id2, id3, id4, id5, size) {
      const randomIndex = Math.floor(Math.random() * size);

      if (randomIndex === 0) {
          document.getElementById(id1).checked = true;
          document.getElementById(id2).checked = false;
          document.getElementById(id3).checked = false;
          document.getElementById(id4).checked = false;
          document.getElementById(id5).checked = false;
      } 
      else if (randomIndex === 1) {
          document.getElementById(id1).checked = false;
          document.getElementById(id2).checked = true;
          document.getElementById(id3).checked = false;
          document.getElementById(id4).checked = false;
          document.getElementById(id5).checked = false;
      }
      else if (randomIndex === 2) {
        document.getElementById(id1).checked = false;
        document.getElementById(id2).checked = false;
        document.getElementById(id3).checked = true;
        document.getElementById(id4).checked = false;
        document.getElementById(id5).checked = false;
      } 
      else if (randomIndex === 3) {
        document.getElementById(id1).checked = false;
        document.getElementById(id2).checked = false;
        document.getElementById(id3).checked = false;
        document.getElementById(id4).checked = true;
        document.getElementById(id5).checked = false;
      }
      else {
          document.getElementById(id1).checked = false;
          document.getElementById(id2).checked = false;
          document.getElementById(id3).checked = false;
          document.getElementById(id4).checked = false;
          document.getElementById(id5).checked = true;
      }
    }





