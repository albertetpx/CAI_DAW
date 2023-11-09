



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
      // document.getElementById("quantitat_suor").value = randomInt(0.2,1);
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
    document.getElementById("posturaHabitual").value = randomElement(["Postura Correcta","Esquena Inclinada","Esquena Plana","Esquena Rodona","Esquena Defectuosa","Esquena Relaxada"]);
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
    document.getElementById("altres_manifestacions6").value = randomElement([  "Insomni",
    "Somnis agitats", "Sonambulisme", "Apnèa del son", "Ronc", "Pesadilles", "Trastorns del ritme circadià",
    "Fadiga diürna", "Somnolència excessiva", "Dificultat per conciliar el son", "Dificultat per mantenir el son",
    "Despertars freqüents durant la nit", "Alteracions en la qualitat del son", "Trastorns del son relacionats amb l'estrès", "Son confús o interromput",]);
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
    document.getElementById("altres_manifestacions7").value = randomElement([ "Irritació cutània","Alergies a teixits o materials","Desenvolupament de berrugues","Dolor de la pell","Exacerbar malalties de la pell com l'eczema",
    "Dificultats respiratòries", "Reaccions al·lèrgiques a tintes o substàncies químiques", "Desgast prematur de la roba", "Dolor muscular per roba massa ajustada", "Aparició de taques o taques a la pell",
    "Problemes de la columna vertebral per roba inadequada", "Aparició de mal olor corporal per roba que reté l'humitat", "Molesties i dolors als peus per calçat incòmode", "Problemes circulatoris per roba massa ajustada","Desenvolupament de dolor de cap per pressió al cap per part de barrets o cascs",
  ]);
    // Fi de la 11ª pagina del formulari

    // Inici de la 12ª pagina del formulari
    document.getElementById("temperatura_pell").value = randomInt(35,40);
    document.getElementById("temperatura_axilar").value = randomInt(35,40);
    document.getElementById("com_sent_temperatura_ambient").value = randomElement(["calorosa","fredolica"]);
    document.getElementById("situacions_influencien_termoregulacio_si").value = randomRadioButton("situacions_influencien_termoregulacio_si","situacions_influencien_termoregulacio_no",2);
    document.getElementById("situacions_influencien_termoregulacio_no").value = randomRadioButton("situacions_influencien_termoregulacio_si","situacions_influencien_termoregulacio_no",2);
    document.getElementById("quines_situacions_influencien_termoregulacio").value = randomElement(["deshidratació","humitat","sequedat"]);
    document.getElementById("altres_manifestacions8").value = randomElement(["Calor excessiu (sensació de calor intens)",
    "Fred excessiu (sensació de fred intens)", "Sofocs o ones de calor", "Tremolors (sensació de temblores o escalofríos)",
    "Pèrdua de sensació de temperatura (anestèsia tèrmica)", "Sensació de picor o ardor en la pell",
    "Marejos o desmais relacionats amb canvis bruscs de temperatura", "Hipersensibilitat a canvis de temperatura",
    "Transpiració excessiva (sudoració profusa)", "Sensació de fred intern (congelació)", "Pèrdua de la capacitat per regular la temperatura",
    "Mal de cap relacionat amb canvis de temperatura", "Inflamació o erupcions cutànies a causa de la temperatura", "Malestar general per canvis bruscos de temperatura",
    "Deshidratació per suor excessiu en temperatures elevades",]);
    document.getElementById("mitjans_utilitza_mantenir_temperatura").value = randomElement(["Ficar-se capes","retirar capes","hidratar-se"]);
    // Fi de la 12ª pagina del formulari

    // Inici de la 13ª pagina del formulari
    document.getElementById("condicions_higeniques_pell_mucoses").value = randomElement(["Bon estat","deteriorades"]);
    document.getElementById("descripcio_condicions_pell_mucosa").value = randomElement([  "Pell sana i suau al tacte.",
    "Mucoses humides i rosades.", "Pell amb petites taques de pigmentació.", "Mucoses pàl·lides o blanques.", "Pell amb un aspecte greixós o brillant.",
    "Mucoses amb una textura suau i uniforme.","Pell amb marques d'acne o cicatrius.","Mucoses seques i pruriginoses.",
    "Pell amb un color uniforme i sense taques.", "Mucoses inflamades o amb lesions.", "Pell amb taques de sol o hiperpigmentació.",
    "Mucoses amb secrecions o mucositat excessiva.","Pell amb rugositat o aspror.", "Mucoses amb inflor o edema.", "Pell amb erupcions cutànies o brots.",]);
    document.getElementById("habits_higene_corporal").value = randomElement(["neteja diària","aigua i sabo suaus","neteja en sec"]);
    document.getElementById("habits_higene_bucal").value = randomElement(["desprès de cada àpat","3 cops al dia","1 cop al dia","de tant en quant"]);
    document.getElementById("situacions_influencien_higene_si").value = randomRadioButton("situacions_influencien_higene_si","situacions_influencien_higene_no",2);
    document.getElementById("situacions_influencien_higene_no").value = randomRadioButton("situacions_influencien_higene_si","situacions_influencien_higene_no",2);
    document.getElementById("quines_situacions_influencien_higene").value = randomElement(["discapacitat","dificultat d'accés a aigues de sanejament","recursos limitats","problemes de salut mental","estil de vida"]);
    document.getElementById("mijans_utilitza_millorar_higene").value = randomElement(["accès a l'aigua de sanejament","educació en higiene","distribució de recursos d'higiene","adaptació a les necessitats pròpies"]);
    document.getElementById("altres_manifestacions9").value = randomElement([
      "Acumulació de bacteris i germens","Obstrucció de porus i formació de comedons",  "Infeccions cutànies", "Irritació o inflamació de la pell",
      "Pell opaca o amb aspecte brut", "Dermatitis", "Pell sebosa o greixosa","Mala olor corporal",
      "Possibles al·lèrgies a substàncies contaminants", "Increment del risc de reaccions al·lèrgiques cutànies", "Desenvolupament de taques o taques a la pell",
  
    ]);
    // Fi de la 13ª pagina del formulari

    // Inici de la 14ª pagina del formulari
    document.getElementById("coneix_mides_prevencio").value = randomElement(["si","no"]);
    document.getElementById("salubritat_medi_1").value = randomElement([ "Fuites d'aigua","Infiltracions o goteres","Presència de fongs o mores","Presència d'insectes o plagues",
    "Acumulació excessiva de pols o brutícia",  "Manca d'aireació adequada",  "Problemes amb la gestió de residus",  "Pobres condicions d'higiene personal",
    "Mala conservació dels aliments", "No disposar de detectors de fum o monòxid de carboni", "Manca de manteniment d'equips domèstics",
    "Desorden excessiu o acumulació d'objectes innecessaris"]);
    document.getElementById("salubritat_habitat_1").value = randomElement([  "Manca de neteja i higiene en les àrees de treball",
    "Mala ventilació o manca de circulació d'aire", "Presència d'agents contaminants a l'ambient", "Manca de manteniment d'equips de seguretat",
    "Pobres condicions d'il·luminació", "Manca d'espai adequat i mobiliari ergonòmic", "Problemes d'accessibilitat i sortides d'emergència bloquejades",
    "Exposició a substàncies químiques nocives sense protecció adequada","Manca de protocols de seguretat i prevenció d'accidents","Alt nivell de soroll sense protectors auriculars",
    "Manca d'instal·lacions sanitàries netes i ben mantenides","Manca de pautes de neteja i desinfecció regulars","Problemes relacionats amb el maneig inadequat de residus perillosos",
    "Pobres condicions de calefacció o refrigeració", "Inadequada gestió de riscos laborals",]);
    
    document.getElementById("lloc_treball").value = randomElement([  "Oficina","Hospital","Restaurants","Fàbrica","Botiga",
    "Escola", "Estació de policia", "Estació de bombers", "Estació de tren", "Aeroport",
    "Camp de conreu", "Platja", "Estudi de gravació", "Laboratori", "Centre comercial", "Taller mecànic",]);
    document.getElementById("situacions_circumstancies_seguretat_fisica_psicologica_social_si").value = randomRadioButton("situacions_circumstancies_seguretat_fisica_psicologica_social_si","situacions_circumstancies_seguretat_fisica_psicologica_social_no",2);
    document.getElementById("situacions_circumstancies_seguretat_fisica_psicologica_social_no").value = randomRadioButton("situacions_circumstancies_seguretat_fisica_psicologica_social_si","situacions_circumstancies_seguretat_fisica_psicologica_social_no",2);
    document.getElementById("quines_situacions_seguretat_fisica_psicologica_social").value = randomElement(["pressió social","company, Fomentar la comunicació oberta i honesta amb amics i familiars per parlar dels sentiments i problemes.",
    "Aprendre tècniques de gestió de l'estrès com la meditació o la respiració profunda.","Mantenir rutines diàries saludables que inclouen temps per a l'exercici, la dieta i el son.","Establir límits saludables en el treball, les relacions i les expectatives per evitar l'esgotament.",
    "Limitar el temps dedicat a les xarxes socials per evitar la comparació constant i la sobreexposició a notícies negatives.", "Buscar ajuda professional d'un psicòleg o psiquiatre en cas de problemes psicològics.",
    "Allotjar temps per a activitats recreatives i hobbies que generin plaer i relaxació.","Mantenir les relacions socials i buscar suport emocional en moments difícils.","Aprendre i ensenyar habilitats d'educació emocional per gestionar les emocions de manera saludable.",
    "Treballar en el desenvolupament de l'autoestima i la confiança en un mateix.","Evitar l'ús excessiu d'alcohol, drogues o altres substàncies per controlar les emocions.","Fomentar l'afrontament positiu de les adversitats i veure-les com a oportunitats d'aprenentatge.",
    "Mantenir un seguiment regular de la salut mental i buscar ajuda en cas de símptomes persistents.", "Ser conscient dels propis límits i saber quan és necessari dir no.",
    "Mantenir un equilibri adequat entre les responsabilitats laborals i les activitats fora del treballs de treball","problemes familiars","males amistats"]);
    document.getElementById("mitjans_utilitza_proteccio").value = randomElement([]);
    document.getElementById("altres_manifestacio10").value = randomElement([  "Ansietat",
    "Depressió","Estress crònic","Insomni","Pèrdua d'interès en activitats solades","Problemes de concentració",
    "Irritabilitat","Culpa excessiva","Pensaments obsessius","Retirada social","Canvis d'apetit","Baixa autoestima",
    "Pensaments o intents de suïcidi","Trastorns alimentaris","Pèrdua de la motivació",]);
    // Fi de la 14ª pagina del formulari

    // Inici de la 15ª pagina del formulari
    document.getElementById("estat_consciencia").value = randomElement([  "Vigil i alerta",
    "Somnolent o adormit", "Inconscient", "Confús o desorientat", "Lúcid i coherent",
    "Despert",  "Hipnòtic o en estat d'hipnosi",  "Estuporós o abatut",  "Delirant o agitat",
    "Inconscient però respon a estímuls",   "Amb pèrdua de memòria a curt termini",   "Trance meditatiu",
    "En estat de xoc",   "Estadística vegetativa",   "Eufòric o exaltat",]);
    document.getElementById("orientacio_temps_espai").value = randomElement(["Orientat en temps i espai","Orientat en temps, però desorientat en espai",
    "Orientat en espai, però desorientat en temps","Desorientat en temps i espai","Orientat en temps passat i present, però no en el futur",
    "Orientat en espai proper, però no en l'espai distant", "Orientat en temps futur, però no en temps passat o present", "Orientat en espai distant, però no en l'espai proper",
    "Orientat en temps i espai de manera intermitent", "Confús en temps i espai, sense orientació clara",]);
    document.getElementById("estat_sesorials").value = randomElement(["Normal, sense anomalies sensorials", "Visió alterada (visió borrosa, visió doble)", "Audiència afectada (pèrdua d'audició, zumbits a les oïdes)",
    "Alteracions gustatives (sabor estrany o falta de gust)",   "Alteracions olfactives (pèrdua de l'olfacte, olors inusuals)",   "Alteracions tàctils (sensació de formigueig, entumiment)",
    "Hipersensibilitat a estímuls sensorials (llum intensa, soroll fort)",  "Desorientació espacial (dificultat per percebre l'entorn)",  "Parestèsies (sensacions inusuals a la pell)",
    "Sensació de picor o ardor en la pell","Visió fosca o tenebrosa","Hiposmia (disminució de l'olfacte)","Hipogeusia (disminució del gust)"]);
    document.getElementById("expressio_verbal").value = randomElement(["Expressió verbal clara i coherent",
    "Dificultat per trobar les paraules adequades", "Tartamudesa o disfluència", "Afasia (pèrdua de la capacitat de parlar)",
    "Ecolàlia (repetició involuntària de les paraules dels altres)",  "Dificultat per articular les paraules correctament",  "Balbuceig o parloteig incoherent",  "Parla ràpida o atropellada",
    "Parla lenta o pausada", "Monotonia vocal (tonalitat de veu constant)", "Parla fortament o crida", "Suspirs o gemecs durant la parla",
    "Veu tremolosa o inestable",  "Parla murmurada o en un to baix",  "Vocalització incorrecta de les consonants",
    "Parla amb tonalitat nasal", "Incapacitat per formar frases coherents", "Parla amb accents o dialectes específics",
    "Retard en el desenvolupament del llenguatge", "Uso d'argot o jerga específica", "Incapacitat per comunicar-se verbalment",
    "Parla en murmuri o en veu alta sense consciència", "Expressió de sentiment o emoció a través de la veu",]);
    document.getElementById("descripccio_expressio_no_verbal").value = randomElement([ "Expressió facial relaxada i serena",
    "Somriure sincer i amigable", "Celes frunzides o mirada seriosa", "Parpelles caigudes o cansament", "Mirada evasiva o falta de contacte visual",
    "Contacte visual fort i segur",  "Postura corporal oberta i relaxada",   "Postura corporal tancada o defensiva",
    "Moviments de mans relaxats i naturals",   "Moviments de mans nerviosos o inquietos",   "Contacte físic adequat (com apretó de mà)",   "Manca de contacte físic o evitació",
    "Moure's amb confiança i seguretat",   "Moure's amb inseguretat o falta de determinació",  "Expressió de sorpresa o incredulitat",
    "Expressió de preocupació o angoixa",   "Gestos que indiquen interès o atenció", "Gestos que indiquen desinterès o distracció",
    "Expressió de relaxació i comoditat","Fregament de mans o moviments inquiets", "Mirada fixa o intensa", "Expressió de confiança i autoestima",
    "Expressió de nerviosisme o inseguretat",  "Moviments d'espatlla o encogiment",  "Contacte visual constant o penetrant",]);
    document.getElementById("situacions_influencien_comunicacio_si").value = randomRadioButton("situacions_influencien_comunicacio_si","situacions_influencien_comunicacio_no",2);
    document.getElementById("situacions_influencien_comunicacio_no").value = randomRadioButton("situacions_influencien_comunicacio_si","situacions_influencien_comunicacio_no",2);
    document.getElementById("quines_situacions_influencien_comunicacio").value = randomElement([ "Entorn tranquil i silenciós que facilita la comunicació","Entorn amb soroll excessiu o distraccions que dificulta la comunicació","Comunicació cara a cara que permet una millor comprensió",
    "Comunicació per telèfon o virtual que pot ser menys clara","Diferències culturals que poden causar malentesos","Estats emocionals intensos que poden afectar la comunicació","Falta de temps per a una comunicació adequada",
    "Comunicació en situacions d'emergència que requereix claredat i rapidesa",  "Comunicació en grups grans o multituds que pot ser caòtica",  "Comunicació amb persones amb discapacitats que requereix adaptacions",
    "Llenguatge tècnic o jerga que pot ser incomprensible per als no experts",  "Dificultats de traducció en la comunicació multilingüe",  "Comunicació escrita que permet una revisió i reflexió més gran",
    "Comunicació en un ambient de treball que pot ser formal o informal"]);
    document.getElementById("mitjans_faciliten_comunicacio").value = randomElement([ "Entorn tranquil i silenciós que afavoreix la concentració",
    "Comunicació cara a cara que permet una millor interacció", "Empatia i comprensió mútua entre les parts", "Ús d'un llenguatge clar i senzill",
    "Presència d'ajudes visuals o gràfiques per aclarir conceptes",  "Disposició a escoltar i donar temps per expressar-se",  "Foment de la confiança i una atmosfera d'obertura",
    "Empatia i comprensió mútua entre les parts",   "Llenguatge no verbal congruent amb les paraules",   "Pausa i reflexió per a una comunicació més efectiva",
    "Comunicació estructurada i ben organitzada","Ús de preguntes obertes per aprofundir en el diàleg",  "Comunicació respectuosa i considerada",
    "Clarificació de malentesos o dubtes",  "Feedback i confirmació de la comprensió",   "Adaptació del llenguatge segons l'audiència", "Ús de tecnologies de comunicació eficaces",
    "Ambient agradable i acollidor que fomenta la comunicació", "Comunicació en un entorn de treball col·laboratiu", "Comunicació en una relació interpersonal saludable",
    "Ús d'habilitats de comunicació efectives",]);
    document.getElementById("altres_manifestacions11").value = randomElement([  "Fluidez verbal sin dificultades",
    "Tartamudeo o disfluencia ocasional","Habla rápida y fluida",  "Habla lenta y pausada",  "Voz clara y bien articulada",
    "Voz nasal o entrecortada",    "Uso de un tono de voz adecuado", "Alteraciones en el ritmo del habla",
    "Repetición frecuente de palabras o frases",  "Pérdida de la voz o afonía temporal",   "Habla susurrada o en un tono bajo",
    "Dificultad para pronunciar ciertos sonidos",  "Uso excesivo de muletillas o palabras de relleno",  "Vocabulario rico y variado",
    "Dificultad para encontrar las palabras adecuadas",   "Articulación deficiente de los sonidos",   "Inclinación a hablar de manera monótona",    "Uso de jerga o argot específico",
    "Vocalización clara y precisa",]);
    // Fi de la 15ª pagina del formulari

    // Inici de la 16ª pagina del formulari
    document.getElementById("quines_creences_valors").value = randomElement([  "Creences religioses", "Creences espirituals", "Creences científiques", "Creences polítiques",
    "Creences morals o ètiques","Creences culturals o tradicionals","Creences personals o individuals","Creences filosòfiques",
    "Creences superstitioses", "Creences sobre l'amor i les relacions", "Creences sobre l'èxit i la prosperitat", "Creences sobre la salut i la malaltia",
    "Creences sobre la justícia i la igualtat", "Creences sobre la natura humana", "Creences sobre la vida després de la mort", "Creences sobre l'origen de l'univers",
    "Creences sobre la creació o l'evolució", "Creences sobre la llibertat i la lliure voluntat", "Creences sobre el destí o el karma", "Creences sobre la família i la criança",
    "Creences sobre la felicitat i el benestar",   "Creences sobre la comunitat i la societat",   "Creences sobre l'educació i l'aprenentatge",   "Creences sobre l'art i la cultura",   "Creences sobre la bellesa i l'estètica",]);
    document.getElementById("mitjans_utilitza_viure_creences_valors").value = randomElement([  "Vivint les creences religioses mitjançant la participació activa en rituales i pràctiques religioses.",
    "Manifestant les seves creences espirituals a través de la meditació i la connexió amb la natura.",
    "Aplicant les seves creences científiques mitjançant l'observació i l'exploració de fets i fenòmens naturals.",
    "Expressant les seves creences polítiques mitjançant el vot i l'activisme polític.",
    "Guiant-se per les seves creences morals i ètiques a l'hora de prendre decisions ètiques en la vida quotidiana.",
    "Celebren les seves creences culturals o tradicionals mitjançant festes i costums culturals.",
    "Demostrant les seves creences personals o individuals a través del comportament i les eleccions personals.",
    "Expliquen les seves creences filosòfiques mitjançant discussions i reflexions profundes sobre la vida i la realitat.",
    "Seguint pràctiques o supersticions basades en les seves creences superstitioses.",
    "Aplicant les seves creences sobre l'amor i les relacions a través del comportament en les relacions personals.",
    "Guiant les seves decisions financeres i empresarials segons les seves creences sobre l'èxit i la prosperitat.",
    "Tenint cura de la salut física i emocional segons les seves creences sobre la salut i la malaltia.",
    "Defensant les seves creences sobre la justícia i la igualtat mitjançant l'activisme social i polític.",
    "Aplicant les seves creences sobre la naturalesa humana en la interacció amb altres persones.",
    "Preparant-se per a la vida després de la mort segons les seves creences religioses o espirituals.",]);
    document.getElementById("altres_manifestacions12").value = randomElement(["Compartint les seves creences amb altres persones mitjançant la conversa i la comunicació.",
    "Influint en les seves eleccions de vida, com l'educació, la carrera i el lloc de residència.",
    "Defensant les seves creences en debats i discussió públiques o en xarxes socials.",
    "Participant en activitats comunitàries o grups basats en les seves creences.",
    "Realitzant accions d'ajuda i solidaritat que estan alineades amb les seves creences morals.",
    "Buscant connexió i sentit en les pràctiques i ritus relacionats amb les seves creences religioses o espirituals.",
    "Contribuint a causes i organitzacions polítiques que reflecteixen les seves creences polítiques.",
    "Complint els deures i responsabilitats familiars segons les seves creences culturals i tradicionals.",
    "Adoptant pràctiques de salut específiques basades en les seves creences sobre la salut i el benestar.",
    "Fomentant l'educació i la consciència en les seves creences filosòfiques a través d'obres literàries o artístiques.",]);
    // Fi de la 16ª pagina del formulari

    // Inici de la 17ª pagina del formulari
    document.getElementById("rol_familiar").value = randomElement([ "Pare o cap de família", "Mare o cuidadora principal",  "Fill o filla gran",
    "Avi o àvia",  "Oncle o tia","Germà o germana mitjana","Fill o filla petit",
    "Cosí o cosina","Gendre o nora",   "Nuvi o núvia",  "Padrí o madrina",  "Fill o filla adoptat",
    "Membre més jove","Fill o fillastra de matrimoni anterior", "Nuvi o núvia de matrimoni anterior",]);

    document.getElementById("rol_social").value = randomElement(["Mestre o professora",
    "Doctor o metge", "Advocat o advocada", "Policia o policia", "Bomber o bombera",
    "Cambrer o cambrera", "Empresari o empresària", "Treballador o treballadora social",
    "Artista", "Estudiant",   "Pares de família", "Esportista",
    "Periodista", "Pilot d'avió"
  ]);
    document.getElementById("tipus_ocupacio").value = randomElement(["si","no","alguns"]);
    document.getElementById("situacions_desenvolupacio_rol_social_familiar").value = randomElement([  "Naixement d'un nou fill i l'adaptació als nous rols de pares",
    "Adolescents que comencen a assumir responsabilitats i independents","La jubilació dels pares i els canvis en els rols familiars",
    "La pèrdua d'un membre de la família i l'ajustament a la nova dinàmica",  "Reubicació de la família a una nova ciutat o país i l'adaptació",
    "Divorci o separació dels pares i la redefinició dels rols familiars",   "Criança de germans més petits per part dels germans majors",
    "Famílies que cuiden de membres amb discapacitats o malalties cròniques",   "Famílies amb membres que assumeixen rols de cuidadors",
    "Desenvolupament de nous interessos i aficions familiars",   "Famílies que passen per canvis econòmics significatius i ajustaments",
    "Adopció o acollida d'un nou membre de la família i l'adaptació",   "Famílies que gestionen una empresa o negocis junts",
    "Famílies que promouen la inclusió i la diversitat en els rols",   "Transició de membres joves a adults i els seus nous rols",
    "Famílies que passen per processos de reconciliació i curació",   "Famílies que celebren esdeveniments importants com casaments i aniversaris",
    "Adaptació als canvis en les relacions entre els membres a mesura que envellixen",  "Famílies que integren nous membres per casaments o parelles",
    "Famílies que naveguen per les relacions entre padrastres i fills"]);
    document.getElementById("mitjans_millorar13").value = randomElement(["si","no","alguns"]);
    document.getElementById("altres_manifestacions13").value = randomElement([ "Família amb una distribució equitativa de responsabilitats domèstiques",
    "Pares que comparteixen activitats d'oci i esdeveniments familiars", "Rols familiars flexibles i adaptatius segons les necessitats",
    "Els avis juguen un paper actiu en la criança i l'educació dels nets",  "Famílies que promouen la coeducació i la igualtat de gènere",
    "Rols familiars basats en les habilitats i interessos individuals",   "Famílies amb membres que assumeixen múltiples rols segons les circumstàncies",
    "Famílies amb membres que col·laboren en negocis familiars o projectes",   "Criança compartida o coresponsabilitat entre familiars",
    "Famílies que promouen la independència dels fills des de joves",    "Famílies que valoren les relacions intergeneracionals",
    "Rols familiars que canvien al llarg de les etapes de la vida",    "Famílies que adapten els rols segons les necessitats dels membres",
    "Famílies amb membres que assumeixen rols de cuidador",  "Famílies amb membres que promouen l'aprenentatge contínu de tots",
    "Rols familiars que es basen en l'afecte i el suport mutu", "Famílies amb membres que promouen la preservació de la cultura i les tradicions",
    "Famílies amb membres que assumeixen rols de mentors i guies", "Famílies amb membres que es fan càrrec de familiars amb necessitats especials",
    "Famílies amb membres que fomenten la comunicació oberta i respectuosa",]);
    // Fi de la 17ª pagina del formulari

    // Inici de la 18ª pagina del formulari
    document.getElementById("HABITS_DE_DIVERSIO_I_DISTRACCIO").value = randomElement([  "Videojocs",
    "Sèries de televisió","Internet","Pel·lícules",
    "Esdeveniments esportius","Xarxes socials","Lectura de llibres",
    "Xat en línia","Passatemps","Espectacles en viu",
    "Concerts","Jocs d'atzar","Esports",]);
    document.getElementById("habits_esport").value = randomElement([  "Fer exercici físic regularment",
    "Anar al gimnàs dues vegades a la setmana","Practicar ioga cada matí","Nadar tres cops a la setmana","Jogging cada dia",
    "Practicar esport en equip els caps de setmana", "Entrenar amb peses dues vegades a la setmana", "Fer ciclisme els diumenges",
    "Assistir a classes d'arts marcials",  "Practicar esgrima com a passatemps", "Participar en maratons i carreres",  "Realitzar estiraments i flexions a diari",
    "Fer escalada de muntanya els caps de setmana", "Jugar al tennis o al pàdel amb amics",   "Practicar surf o windsurf a la platja",
    "Fer exercicis de cardio al parc",   "Participar en competicions esportives locals",
    "Entrenar amb un personal trainer",    "Fer ioga al aire lliure","Practicar pilates per millorar la flexibilitat",
    "Sedentarisme","Realitzar exercicis de força i resistència",]);
    document.getElementById("habits_musica").value = randomElement([  "Escoltar música diàriament", "Assistir a concerts i espectacles musicals",
    "Tocar un instrument musical com el piano, la guitarra o la bateria", "Practicar cant o vocalització regularment",
    "Crear música pròpia i composicions",  "Explorar diferents gèneres musicals",  "Aprendre a llegir partitures musicals",
    "Formar part d'una banda o conjunt musical","Cap", "Participar en corals o grups vocals",
    "Estudiar teoria musical i harmonia",]);
    document.getElementById("habits_lectura").value = randomElement([ "Llegir un llibre cada setmana",
    "Dedicar temps diàriament a la lectura", "Fer una llista de llibres per llegir durant l'any",
    "Visitar regularment una biblioteca", "Participar en un club de lectura",
    "Explorar diferents gèneres literaris",   "Llegir notícies i articles en línia",
    "Escollir llibres basats en les recomanacions d'amics","Llegir llibres en diverses llengües",
    "Crear un racó de lectura acollidor a casa", "Compartir llibres amb altres persones",
    "Llegir a l'aire lliure o en la naturalesa","Cap"]);
    document.getElementById("habits_audiovisual").value = randomElement([ "Mirar una pel·lícula o sèrie cada nit",
    "Fer maratons de sèries els caps de setmana", "Assistir a projeccions de cinema regularment",
    "Seguir les últimes notícies i tendències de cinema i televisió", "Crear llistes de les pròximes pel·lícules i sèries per veure",
    "Explorar diferents gèneres audiovisuals, com la ciència-ficció o el drama",  "Consumir documentals i pel·lícules de no-ficció per aprendre nous temes",
    "Fomentar la discussió i el debat sobre pel·lícules i sèries vistes","Cap",  "Subscriure's a plataformes de streaming per accedir a contingut divers",
    "Explorar pel·lícules i sèries d'altres països i cultures"]);
    document.getElementById("habits_altres").value = randomElement(["Sortir amb amics a fer activitats socials",
    "Organitzar i assistir a festes i esdeveniments socials", "Explorar llocs nous i viatjar per a descobrir noves cultures",
    "Realitzar activitats d'oci com senderisme o ciclisme", "Practicar esports i jocs recreatius amb amics",
    "Visitar parcs d'atraccions i parcs temàtics", "Anar al cinema o al teatre regularment",
    "Participar en jocs de taula i jocs de cartes", "Assistir a concerts i espectacles en viu",
    "Passar temps a la naturalesa, com a la platja o la muntanya"]);
    document.getElementById("situacions_influencien_interes_esbargir_si").value = randomRadioButton("situacions_influencien_interes_esbargir_si","situacions_influencien_interes_esbargir_no",2);
    document.getElementById("situacions_influencien_interes_esbargir_no").value = randomRadioButton("situacions_influencien_interes_esbargir_si","situacions_influencien_interes_esbargir_no",2);
    document.getElementById("quines_situacions_influencien_interes_esbargir").value = randomElement(["si","no","alguns"]);
    document.getElementById("mitjans_utilitza_millorar_realitzacio").value = randomElement(["si","no","alguns"]);
    document.getElementById("altres_manifestacions14").value = randomElement(["Disminució de la concentració","Pèrdua de la productivitat","Increment del temps de procrastinació",
    "Estress i ansietat per les tasques pendents","Dificultat per complir terminis", "Baix rendiment acadèmic o laboral","Problemes de relacions interpersonals", "Pèrdua d'oportunitats d'aprenentatge",
    "Canvis en el patró de son i insomni","Pèrdua de temps i recursos","Sensació de culpa o frustració", "Desorganització i caos en la vida diària"]);
    // Fi de la 18ª pagina del formulari

    // Inici de la 19ª pagina del fromulari
    document.getElementById("interes_coneixer_proces_salut_si").value = randomRadioButton("interes_coneixer_proces_salut_si","interes_coneixer_proces_salut_no",2);
    document.getElementById("interes_coneixer_proces_salut_no").value = randomRadioButton("interes_coneixer_proces_salut_si","interes_coneixer_proces_salut_no",2);
    document.getElementById("perque_interes_coneixer_proces_salut").value = randomElement(["Vivir una vida més llarga i saludable", "Prevenir malalties i trastorns de salut", "Tenir energia i vitalitat per fer les coses que m'agraden",
    "Mantenir un pes saludable i evitar problemes de pes","Millorar la meva resistència i condició física", "Tindre una millor qualitat de vida en la meva vellesa",
    "Reducir el risc de malalties cardíaques i diabetis",  "Aconseguir una pell més radiant i una aparença saludable",  "Reduir l'estrès i millorar la salut mental",
    "Dormir millor i tenir un son reparador",  "Tenir una millor salut mental i emocional",]);
    document.getElementById("situacions_dificulten_aprenentatge").value = randomElement([ "Manca de motivació o interès en el tema d'estudi","Distractions i interrupcions constants mentre s'estudia",
    "Estudi en un entorn sorollós o poc adequat", "Pressió i estrès excessiu per obtenir bons resultats", "Problemes de salut que afecten la concentració",
    "Manca de recursos d'estudi o materials adients", "Mètodes d'estudi ineficaços o inadecuats", "Manca d'orientació i suport acadèmic",  "Dificultats d'aprenentatge o discapacitats","Manca de temps degut a responsabilitats laborals o familiars",
    "Manca de connexió amb el professor o els companys","Falta d'accessibilitat a l'educació i la informació",]);
    document.getElementById("mitjans_utilitza_aprendre").value = randomElement(["Llibres de text i materials d'estudi impresos","Classes presencials a l'escola o la universitat",
    "Recursos en línia com llocs web educatius","Plataformes d'aprenentatge en línia i cursos a distància",
    "Vídeos educatius i tutorials a través de plataformes com YouTube","Audiollibres i podcasts educatius",
    "Sessions de tutoria o assessorament acadèmic","Aplicacions mòbils i jocs educatius",
    "Biblioteques i recursos de lectura","Laboratoris i entorns d'aprenentatge pràctic"]);
    document.getElementById("altres_manifestacions15").value = randomElement([ "Aprenentatge basat en la resolució de problemes",
    "Aprenentatge mitjançant la pràctica i l'experimentació", "Aprenentatge a través de la col·laboració i el treball en equip",
    "Aprenentatge autodidacta i autoaprenentatge",  "Aprenentatge a través de l'observació i la imitació",
    "Aprenentatge basat en la investigació i la recerca",  "Aprenentatge a través del joc i l'aprenentatge actiu",
    "Aprenentatge reflexiu i autoavaluació",  "Aprenentatge basat en la interacció social",
    "Aprenentatge mitjançant la narració i la història",   "Aprenentatge contextual i basat en l'experiència"]);
    
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





