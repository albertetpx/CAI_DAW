function ocultarBotonRegistrar(){
  let butonFinal = document.getElementById("butonFinal");
  butonFinal.style.display = "block";
}

function showForm(id){
  //Ocultamos todos los forms
  let forms = Array.from(document.getElementsByClassName("form"));
  forms.forEach((value,index)=>{
    value.style.display = "none";
  })
  //Mostramos el form activo
  let form = document.getElementById(`part${id}`);
  form.style.display = "flex";
  //Actualizamos botonera
  Array.from(document.getElementsByClassName("botoneraActive"))[0].classList.remove('botoneraActive');
  document.getElementById(`botonera${id}`).classList.add('botoneraActive');

  //Si es último form, mostramos botón de SUBMIT
  if(id == 19){
    let butonFinal = document.getElementById("butonFinal");
    butonFinal.style.display = "block";
  }

  //Scroll a la parte de arriba de window
  window.scrollTo({
    top: -100,
    behavior: 'smooth'
  });
}


// DEPRECATED FUNCIONS ////////////////////////////////////////////////////////////////////////////

// ******
// Para subir cada vez al principio del todo 
// ******
// document.addEventListener("DOMContentLoaded", function() {
//   for (let i = 1; i <= 14; i++) {
//     const button = document.getElementById(`button${i}_siguiente`);
//     const button_conGion = document.getElementById(`button${i}_1_siguiente`);
//     button.addEventListener("click", function() {
//       window.scrollTo({
//         top: -100,
//         behavior: 'smooth'
//       });
//     });
//     button_conGion.addEventListener("click", function() {
//       window.scrollTo({
//         top: -100,
//         behavior: 'smooth'
//       });
//     });
//   }
// });

function pasarForm1() {

  let form1 = document.getElementById("part1");
  form1.style.display = "none";

  let form1_1 = document.getElementById("part1_1");
  form1_1.style.display = "flex";

  let buton1_siguiente = document.getElementById("button1_siguiente");
  buton1_siguiente.style.display = "none";

  let buton1_1_siguiente = document.getElementById("button1_1_siguiente");
  buton1_1_siguiente.style.display = "block";

  // Atras 
  let buton1_atras = document.getElementById("button1_atras");
  buton1_atras.style.display = "block";

  document.getElementById("botonera1").classList.remove('active');
  document.getElementById("botonera2").classList.add('active');
}

function pasarForm1_1() {
  let form1_1 = document.getElementById("part1_1");
  form1_1.style.display = "none";

  let form2 = document.getElementById("part2");
  form2.style.display = "flex";

  let buton1_1_siguiente = document.getElementById("button1_1_siguiente");
  buton1_1_siguiente.style.display = "none";

  let button2_siguiente = document.getElementById("button2_siguiente");
  button2_siguiente.style.display = "block";

  // atras
  let button1_1_atras = document.getElementById("button1_1_atras");
  button1_1_atras.style.display = "block";

  let buton1_atras = document.getElementById("button1_atras");
  buton1_atras.style.display = "none";

  document.getElementById("botonera2").classList.remove('active');
  document.getElementById("botonera3").classList.add('active');

  // Karlen: qué hace esta función aquí??
  function crear(){
    // llevar arriba  de la pantalla 
    document.getElementById("button1_siguiente").addEventListener("click", function(){
       window.scrollTo({
         top: -100,
         behavior: 'smooth'
        });
      });
      
    }
    crear();
}

function pasarForm2() {
  let form2 = document.getElementById("part2");
  form2.style.display = "none";

  let form2_1 = document.getElementById("part2_1");
  form2_1.style.display = "flex";

  let button2_siguiente = document.getElementById("button2_siguiente");
  button2_siguiente.style.display = "none";

  let button2_1_siguiente = document.getElementById("button2_1_siguiente");
  button2_1_siguiente.style.display = "block";

  // atras
  
  let button2_atras = document.getElementById("button2_atras");
  button2_atras.style.display = "block";


  let button1_1_atras = document.getElementById("button1_1_atras");
  button1_1_atras.style.display = "none";

  document.getElementById("botonera3").classList.remove('active');
  document.getElementById("botonera4").classList.add('active');
}

function pasarForm2_1() {
  let form2_1 = document.getElementById("part2_1");
  form2_1.style.display = "none";

  let form3 = document.getElementById("part3");
  form3.style.display = "flex";

  let button2_1_siguiente = document.getElementById("button2_1_siguiente");
  button2_1_siguiente.style.display = "none";

  let button3_siguiente = document.getElementById("button3_siguiente");
  button3_siguiente.style.display = "block";
  

  // atras 
  let button2_1_atras = document.getElementById("button2_1_atras");
  button2_1_atras.style.display = "block";

  let button2_atras = document.getElementById("button2_atras");
  button2_atras.style.display = "none";

  document.getElementById("botonera4").classList.remove('active');
  document.getElementById("botonera5").classList.add('active');
}

function pasarForm3() {
  let form3 = document.getElementById("part3");
  form3.style.display = "none";

  let form3_1 = document.getElementById("part3_1");
  form3_1.style.display = "flex";

  let button3_siguiente = document.getElementById("button3_siguiente");
  button3_siguiente.style.display = "none";

  let button3_1_siguiente = document.getElementById("button3_1_siguiente");
  button3_1_siguiente.style.display = "block";

  // atras 

  let button3_atras = document.getElementById("button3_atras");
  button3_atras.style.display = "block";

  let button2_1_atras = document.getElementById("button2_1_atras");
  button2_1_atras.style.display = "none";

  document.getElementById("botonera5").classList.remove('active');
  document.getElementById("botonera6").classList.add('active');
}

function pasarForm3_1() {
  let form3_1 = document.getElementById("part3_1");
  form3_1.style.display = "none";

  let form4 = document.getElementById("part4");
  form4.style.display = "flex";

  let button3_1_siguiente = document.getElementById("button3_1_siguiente");
  button3_1_siguiente.style.display = "none";

  let button4_siguiente = document.getElementById("button4_siguiente");
  button4_siguiente.style.display = "block";
  //  atras 

  let button3_1_atras = document.getElementById("button3_1_atras");
  button3_1_atras.style.display = "block";

  let button3_atras = document.getElementById("button3_atras");
  button3_atras.style.display = "none";

  document.getElementById("botonera6").classList.remove('active');
  document.getElementById("botonera7").classList.add('active');

}

function pasarForm4() {
  let form4 = document.getElementById("part4");
  form4.style.display = "none";

  let form4_1 = document.getElementById("part4_1");
  form4_1.style.display = "flex";

  let button4_siguiente = document.getElementById("button4_siguiente");
  button4_siguiente.style.display = "none";

  let button4_1_siguiente = document.getElementById("button4_1_siguiente");
  button4_1_siguiente.style.display = "block";

  // atras 
  let button4_atras = document.getElementById("button4_atras");
  button4_atras.style.display = "block";

  let button3_1_atras = document.getElementById("button3_1_atras");
  button3_1_atras.style.display = "none";

  document.getElementById("botonera7").classList.remove('active');
  document.getElementById("botonera8").classList.add('active');

}

function pasarForm4_1() {
  let form4_1 = document.getElementById("part4_1");
  form4_1.style.display = "none";

  let form5 = document.getElementById("part5");
  form5.style.display = "flex";

  let button4_1_siguiente = document.getElementById("button4_1_siguiente");
  button4_1_siguiente.style.display = "none";

  let button5_siguiente = document.getElementById("button5_siguiente");
  button5_siguiente.style.display = "block";

  // atras 

  let button4_1_atras = document.getElementById("button4_1_atras");
  button4_1_atras.style.display = "block";

  let button4_atras = document.getElementById("button4_atras");
  button4_atras.style.display = "none";

  document.getElementById("botonera8").classList.remove('active');
  document.getElementById("botonera9").classList.add('active');
}

function pasarForm5() {
  let form5 = document.getElementById("part5");
  form5.style.display = "none";

  let form6 = document.getElementById("part6");
  form6.style.display = "flex";

  let button5_siguiente = document.getElementById("button5_siguiente");
  button5_siguiente.style.display = "none";

  let button6_siguiente = document.getElementById("button6_siguiente");
  button6_siguiente.style.display = "block";

  // atras
  let button5_atras = document.getElementById("button5_atras");
  button5_atras.style.display = "block";

  let button4_1_atras = document.getElementById("button4_1_atras");
  button4_1_atras.style.display = "none";

  document.getElementById("botonera9").classList.remove('active');
  document.getElementById("botonera10").classList.add('active');

}

function pasarForm6() {
  let form6 = document.getElementById("part6");
  form6.style.display = "none";

  let form7 = document.getElementById("part7");
  form7.style.display = "flex";

  let button6_siguiente = document.getElementById("button6_siguiente");
  button6_siguiente.style.display = "none";

  let button7_siguiente = document.getElementById("button7_siguiente");
  button7_siguiente.style.display = "block";
  // atras
  let button6_atras = document.getElementById("button6_atras");
  button6_atras.style.display = "block";

  let button5_atras = document.getElementById("button5_atras");
  button5_atras.style.display = "none";

  document.getElementById("botonera10").classList.remove('active');
  document.getElementById("botonera11").classList.add('active');

}

function pasarForm7() {
  let form7 = document.getElementById("part7");
  form7.style.display = "none";

  let form8 = document.getElementById("part8");
  form8.style.display = "flex";

  let button7_siguiente = document.getElementById("button7_siguiente");
  button7_siguiente.style.display = "none";

  let button8_siguiente = document.getElementById("button8_siguiente");
  button8_siguiente.style.display = "block";

  // atras
  let buton7_atras = document.getElementById("button7_atras");
  buton7_atras.style.display = "block";
  
  let buton6_atras = document.getElementById("button6_atras");
  buton6_atras.style.display = "none";

  document.getElementById("botonera11").classList.remove('active');
  document.getElementById("botonera12").classList.add('active');
}

function pasarForm8() {
  let form8 = document.getElementById("part8");
  form8.style.display = "none";

  let form9 = document.getElementById("part9");
  form9.style.display = "flex";

  let button8_siguiente = document.getElementById("button8_siguiente");
  button8_siguiente.style.display = "none";
  
  let button9_siguiente = document.getElementById("button9_siguiente");
  button9_siguiente.style.display = "block";

  // atras
  let button8_atras = document.getElementById("button8_atras");
  button8_atras.style.display = "block";

  let button7_atras = document.getElementById("button7_atras");
  button7_atras.style.display = "none";

  document.getElementById("botonera12").classList.remove('active');
  document.getElementById("botonera13").classList.add('active');

}

function pasarForm9() {
  let form9 = document.getElementById("part9");
  form9.style.display = "none";

  let form10 = document.getElementById("part10");
  form10.style.display = "flex";

  let button9_siguiente = document.getElementById("button9_siguiente");
  button9_siguiente.style.display = "none";
  
  let button10_siguiente = document.getElementById("button10_siguiente");
  button10_siguiente.style.display = "block";
  
  // atras
  let button9_atras = document.getElementById("button9_atras");
  button9_atras.style.display = "block";

  let button8_atras = document.getElementById("button8_atras");
  button8_atras.style.display = "none";

  document.getElementById("botonera13").classList.remove('active');
  document.getElementById("botonera14").classList.add('active');
}

function pasarForm10() {
  let form10 = document.getElementById("part10");
  form10.style.display = "none";

  let form11 = document.getElementById("part11");
  form11.style.display = "flex";

  let button10_siguiente = document.getElementById("button10_siguiente");
  button10_siguiente.style.display = "none";

  let button11_siguiente = document.getElementById("button11_siguiente");
  button11_siguiente.style.display = "block";

  // atras
  let button10_atras = document.getElementById("button10_atras");
  button10_atras.style.display = "block";

  let button9_atras = document.getElementById("button9_atras");
  button9_atras.style.display = "none";

  document.getElementById("botonera14").classList.remove('active');
  document.getElementById("botonera15").classList.add('active');
}

function pasarForm11() {

  let form11 = document.getElementById("part11");
  form11.style.display = "none";

  let form12 = document.getElementById("part12");
  form12.style.display = "flex";

 let button11_siguiente = document.getElementById("button11_siguiente");
  button11_siguiente.style.display = "none";

let button12_siguiente = document.getElementById("button12_siguiente");
  button12_siguiente.style.display = "block";
  
// atras
let button11_atras = document.getElementById("button11_atras");
button11_atras.style.display = "block";

let button10_atras = document.getElementById("button10_atras");
button10_atras.style.display = "none";

document.getElementById("botonera15").classList.remove('active');
document.getElementById("botonera16").classList.add('active');
}

function pasarForm12() {
  let form12 = document.getElementById("part12");
  form12.style.display = "none";

  let form13 = document.getElementById("part13");
  form13.style.display = "flex";

  let button12_siguiente = document.getElementById("button12_siguiente");
  button12_siguiente.style.display = "none";

  let button13_siguiente = document.getElementById("button13_siguiente");
  button13_siguiente.style.display = "block";

  // atras
  let button12_atras = document.getElementById("button12_atras");
  button12_atras.style.display = "block";

  let button11_atras = document.getElementById("button11_atras");
  button11_atras.style.display = "none";

  document.getElementById("botonera16").classList.remove('active');
  document.getElementById("botonera17").classList.add('active');
}

function pasarForm13() {
  let form13 = document.getElementById("part13");
  form13.style.display = "none";

  let form14 = document.getElementById("part14");
  form14.style.display = "flex";

  let button13_siguiente = document.getElementById("button13_siguiente");
  button13_siguiente.style.display = "none";

  let button14_siguiente = document.getElementById("button14_siguiente");
  button14_siguiente.style.display = "block";

  // atras
  let button13_atras = document.getElementById("button13_atras");
  button13_atras.style.display = "block";

  let buton12_atras = document.getElementById("button12_atras");
  buton12_atras.style.display = "none";

  document.getElementById("botonera17").classList.remove('active');
  document.getElementById("botonera18").classList.add('active');

}

function pasarForm14() {
  let form14 = document.getElementById("part14");
  form14.style.display = "none";

  let form15 = document.getElementById("part15");
  form15.style.display = "flex";
 
  let button14_siguiente = document.getElementById("button14_siguiente");
  button14_siguiente.style.display = "none";

  // let buton18 = document.getElementById("button18");
  // buton18.style.display = "flex";

  let butonFinal = document.getElementById("butonFinal");
    butonFinal.style.display = "block";

  // atras
  let button14_atras = document.getElementById("button14_atras");
  button14_atras.style.display = "block";

  let button13_atras = document.getElementById("button13_atras");
  button13_atras.style.display = "none";

  document.getElementById("botonera18").classList.remove('active');
  document.getElementById("botonera19").classList.add('active');

}


// Boton atras 

function pasarForm1_atras() {

  let form1 = document.getElementById("part1");
  form1.style.display = "flex";

  let form1_1 = document.getElementById("part1_1");
  form1_1.style.display = "none";

  // atras 
  let buton1_atras = document.getElementById("button1_atras");
  buton1_atras.style.display = "none";

  let button1_1_atras = document.getElementById("button1_1_atras");
  button1_1_atras.style.display = "none";

  // siguiente 
  let buton1_siguiente = document.getElementById("button1_siguiente");
  buton1_siguiente.style.display = "block";

  let buton2_siguiente = document.getElementById("button2_siguiente");
  buton2_siguiente.style.display = "none";

  let buton1_1_siguiente = document.getElementById("button1_1_siguiente");
  buton1_1_siguiente.style.display = "none";

}


function pasarForm1_1_atras() {
  
  let form2 = document.getElementById("part2");
  form2.style.display = "none";
  
  let form1_1 = document.getElementById("part1_1");
  form1_1.style.display = "flex";

  
  let button2_atras = document.getElementById("button2_atras");
  button2_atras.style.display = "none";

  let button1_atras = document.getElementById("button1_atras");
  button1_atras.style.display = "block";

  let button1_1_atras = document.getElementById("button1_1_atras");
  button1_1_atras.style.display = "none";

// siguiente 
let buton1_1_siguiente = document.getElementById("button1_1_siguiente");
buton1_1_siguiente.style.display = "block";

let button2_1_siguiente = document.getElementById("button2_1_siguiente");
button2_1_siguiente.style.display = "none";

let button2_siguiente = document.getElementById("button2_siguiente");
button2_siguiente.style.display = "none";
  // echo 
}

function pasarForm2_atras() {
  let part2_1 = document.getElementById("part2_1");
  part2_1.style.display = "none";

  let form2 = document.getElementById("part2");
  form2.style.display = "flex";


  let button2_1_atras = document.getElementById("button2_1_atras");
  button2_1_atras.style.display = "none";

  let button1_1_atras = document.getElementById("button1_1_atras");
  button1_1_atras.style.display = "block";
  
  let button2_atras = document.getElementById("button2_atras");
  button2_atras.style.display = "none";
  
  // siguiente 
let button2_siguiente = document.getElementById("button2_siguiente");
button2_siguiente.style.display = "block";

let button3_siguiente = document.getElementById("button3_siguiente");
button3_siguiente.style.display = "none";

let button2_1_siguiente = document.getElementById("button2_1_siguiente");
button2_1_siguiente.style.display = "none";
  // echo 
}

function pasarForm2_1_atras() {
  let form3 = document.getElementById("part3");
  form3.style.display = "none";

  let form2_1 = document.getElementById("part2_1");
  form2_1.style.display = "flex";


  let button3_atras = document.getElementById("button3_atras");
  button3_atras.style.display = "none";

  let button2_atras = document.getElementById("button2_atras");
  button2_atras.style.display = "block";

  let button2_1_atras = document.getElementById("button2_1_atras");
  button2_1_atras.style.display = "none";

  // siguiente
  let button2_siguiente = document.getElementById("button2_1_siguiente");
  button2_siguiente.style.display = "block";
  
  let button3_1_siguiente = document.getElementById("button3_1_siguiente");
  button3_1_siguiente.style.display = "none";
  
  let button3_siguiente = document.getElementById("button3_siguiente");
  button3_siguiente.style.display = "none";

}

function pasarForm3_atras() {

  let form3_1 = document.getElementById("part3_1");
  form3_1.style.display = "none";

  let form3 = document.getElementById("part3");
  form3.style.display = "flex";

  let button3_1_atras = document.getElementById("button3_1_atras");
  button3_1_atras.style.display = "none";

  let button2_1_atras = document.getElementById("button2_1_atras");
  button2_1_atras.style.display = "block";
  
  let button3_atras = document.getElementById("button3_atras");
  button3_atras.style.display = "none";

  // siguiente
  let button3_siguiente = document.getElementById("button3_siguiente");
  button3_siguiente.style.display = "block";
  
  let button4_siguiente = document.getElementById("button4_siguiente");
  button4_siguiente.style.display = "none";
  
  let button3_1_siguiente = document.getElementById("button3_1_siguiente");
  button3_1_siguiente.style.display = "none";

}

function pasarForm3_1_atras() {
  let form4 = document.getElementById("part4");
  form4.style.display = "none";

  let form4_1 = document.getElementById("part3_1");
  form4_1.style.display = "flex";

  let button4_atras = document.getElementById("button4_atras");
  button4_atras.style.display = "none";

  let button3_atras = document.getElementById("button3_atras");
  button3_atras.style.display = "block";

  let button3_1_atras = document.getElementById("button3_1_atras");
  button3_1_atras.style.display = "none";

    // siguiente
    let button3_1_siguiente = document.getElementById("button3_1_siguiente");
    button3_1_siguiente.style.display = "block";
    
    let button4_1_siguiente = document.getElementById("button4_1_siguiente");
    button4_1_siguiente.style.display = "none";
    
    let button4_siguiente = document.getElementById("button4_siguiente");
    button4_siguiente.style.display = "none";
}

function pasarForm4_atras() {
  let form4_1 = document.getElementById("part4_1");
  form4_1.style.display = "none";

  let form4 = document.getElementById("part4");
  form4.style.display = "flex";

  let button4_1_atras = document.getElementById("button4_1_atras");
  button4_1_atras.style.display = "none";

  let button3_1_atras = document.getElementById("button3_1_atras");
  button3_1_atras.style.display = "block";

  let button4_atras = document.getElementById("button4_atras");
  button4_atras.style.display = "none";

  // siguiente
  let button4_siguiente = document.getElementById("button4_siguiente");
  button4_siguiente.style.display = "block";
  
  let button5_siguiente = document.getElementById("button5_siguiente");
  button5_siguiente.style.display = "none";
  
  let button4_1_siguiente = document.getElementById("button4_1_siguiente");
  button4_1_siguiente.style.display = "none";
  
}

function pasarForm4_1_atras() {
  let form5 = document.getElementById("part5");
  form5.style.display = "none";

  let form4_1 = document.getElementById("part4_1");
  form4_1.style.display = "flex";

  let button5_atras = document.getElementById("button5_atras");
  button5_atras.style.display = "none";

  let button4_atras = document.getElementById("button4_atras");
  button4_atras.style.display = "block";

  let button4_1_atras = document.getElementById("button4_1_atras");
  button4_1_atras.style.display = "none";

  // siguiente
  let button4_1_siguiente = document.getElementById("button4_1_siguiente");
  button4_1_siguiente.style.display = "block";
  
  let button6_siguiente = document.getElementById("button6_siguiente");
  button6_siguiente.style.display = "none";
  
  let button5_siguiente = document.getElementById("button5_siguiente");
  button5_siguiente.style.display = "none";
}

function pasarForm5_atras() {
  let form6 = document.getElementById("part6");
  form6.style.display = "none";

  let form5 = document.getElementById("part5");
  form5.style.display = "flex";

  let button6_atras = document.getElementById("button6_atras");
  button6_atras.style.display = "none";

  let button4_1_atras = document.getElementById("button4_1_atras");
  button4_1_atras.style.display = "block";

  let button5_atras = document.getElementById("button5_atras");
  button5_atras.style.display = "none";

    // siguiente
    let button5_siguiente = document.getElementById("button5_siguiente");
    button5_siguiente.style.display = "block";
    
    let button7_siguiente = document.getElementById("button7_siguiente");
    button7_siguiente.style.display = "none";
    
    let button6_siguiente = document.getElementById("button6_siguiente");
    button6_siguiente.style.display = "none";

}

function pasarForm6_atras() {
  let form7 = document.getElementById("part7");
  form7.style.display = "none";

  let form6 = document.getElementById("part6");
  form6.style.display = "flex";

  let button7_atras = document.getElementById("button7_atras");
  button7_atras.style.display = "none";

  let button5_atras = document.getElementById("button5_atras");
  button5_atras.style.display = "block";

  let button6_atras = document.getElementById("button6_atras");
  button6_atras.style.display = "none";

   // siguiente
   let button6_siguiente = document.getElementById("button6_siguiente");
   button6_siguiente.style.display = "block";
   
   let button8_siguiente = document.getElementById("button8_siguiente");
   button8_siguiente.style.display = "none";
   
   let button7_siguiente = document.getElementById("button7_siguiente");
   button7_siguiente.style.display = "none";
  
}

function pasarForm7_atras() {
  let form8 = document.getElementById("part8");
  form8.style.display = "none";

  let form7 = document.getElementById("part7");
  form7.style.display = "flex";

  let button8_atras = document.getElementById("button8_atras");
  button8_atras.style.display = "none";

  let button6_atras = document.getElementById("button6_atras");
  button6_atras.style.display = "block";

  let button7_atras = document.getElementById("button7_atras");
  button7_atras.style.display = "none";


     // siguiente
     let button7_siguiente = document.getElementById("button7_siguiente");
     button7_siguiente.style.display = "block";
     
     let button9_siguiente = document.getElementById("button9_siguiente");
     button9_siguiente.style.display = "none";
     
     let button8_siguiente = document.getElementById("button8_siguiente");
     button8_siguiente.style.display = "none";
}

function pasarForm8_atras() {
  let form9 = document.getElementById("part9");
  form9.style.display = "none";

  let form8 = document.getElementById("part8");
  form8.style.display = "flex";

  let buton9 = document.getElementById("button9_atras");
  buton9.style.display = "none";
  
  let button7_atras = document.getElementById("button7_atras");
  button7_atras.style.display = "block";

  let button8_atras = document.getElementById("button8_atras");
  button8_atras.style.display = "none";
  

   // siguiente
   let button8_siguiente = document.getElementById("button8_siguiente");
   button8_siguiente.style.display = "block";
   
   let button10_siguiente = document.getElementById("button10_siguiente");
   button10_siguiente.style.display = "none";
   
   let button9_siguiente = document.getElementById("button9_siguiente");
   button9_siguiente.style.display = "none";
}

function pasarForm9_atras() {
  let form10 = document.getElementById("part10");
  form10.style.display = "none";

  let form9 = document.getElementById("part9");
  form9.style.display = "flex";

  let button10_atras = document.getElementById("button10_atras");
  button10_atras.style.display = "none";

  let button8_atras = document.getElementById("button8_atras");
  button8_atras.style.display = "block";

  let button9_atras = document.getElementById("button9_atras");
  button9_atras.style.display = "none";

   // siguiente
   let button9_siguiente = document.getElementById("button9_siguiente");
   button9_siguiente.style.display = "block";
   
   let button11_siguiente = document.getElementById("button11_siguiente");
   button11_siguiente.style.display = "none";
   
   let button10_siguiente = document.getElementById("button10_siguiente");
   button10_siguiente.style.display = "none";
  
}

function pasarForm10_atras() {
  let form11 = document.getElementById("part11");
  form11.style.display = "none";

  let form10 = document.getElementById("part10");
  form10.style.display = "flex";

  let button11_atras = document.getElementById("button11_atras");
  button11_atras.style.display = "none";

  let button9_atras = document.getElementById("button9_atras");
  button9_atras.style.display = "block";

  let button10_atras = document.getElementById("button10_atras");
  button10_atras.style.display = "none";
 
   // siguiente
   let button10_siguiente = document.getElementById("button10_siguiente");
   button10_siguiente.style.display = "block";
   
   let button12_siguiente = document.getElementById("button12_siguiente");
   button12_siguiente.style.display = "none";
   
   let button11_siguiente = document.getElementById("button11_siguiente");
   button11_siguiente.style.display = "none";
}

function pasarForm11_atras() {
  let form12 = document.getElementById("part12");
  form12.style.display = "none";

  let form11 = document.getElementById("part11");
  form11.style.display = "flex";

  let button12_atras = document.getElementById("button12_atras");
  button12_atras.style.display = "none";

  let button10_atras = document.getElementById("button10_atras");
  button10_atras.style.display = "block";
  
  let button11_atras = document.getElementById("button11_atras");
  button11_atras.style.display = "none";

  // siguiente
  let button11_siguiente = document.getElementById("button11_siguiente");
  button11_siguiente.style.display = "block";
  
  let button13_siguiente = document.getElementById("button13_siguiente");
  button13_siguiente.style.display = "none";
  
  let button12_siguiente = document.getElementById("button12_siguiente");
  button12_siguiente.style.display = "none";
  
}

function pasarForm12_atras() {
  let form13 = document.getElementById("part13");
  form13.style.display = "none";

  let form12 = document.getElementById("part12");
  form12.style.display = "flex";

  let button13_atras = document.getElementById("button13_atras");
  button13_atras.style.display = "none";

  let button11_atras = document.getElementById("button11_atras");
  button11_atras.style.display = "block";

  let button12_atras = document.getElementById("button12_atras");
  button12_atras.style.display = "none";
   // siguiente
   let button12_siguiente = document.getElementById("button12_siguiente");
   button12_siguiente.style.display = "block";
   
   let button14_siguiente = document.getElementById("button14_siguiente");
   button14_siguiente.style.display = "none";
}

function pasarForm13_atras() {
  let form14 = document.getElementById("part14");
  form14.style.display = "none";

  let form13 = document.getElementById("part13");
  form13.style.display = "flex";

  let button14_atras = document.getElementById("button14_atras");
  button14_atras.style.display = "none";

  let button12_atras = document.getElementById("button12_atras");
  button12_atras.style.display = "block";

  let button13_atras = document.getElementById("button13_atras");
  button13_atras.style.display = "none";

   // siguiente
   let button13_siguiente = document.getElementById("button13_siguiente");
   button13_siguiente.style.display = "block";
 
   
   let button14_siguiente = document.getElementById("button14_siguiente");
   button14_siguiente.style.display = "none";
}

function pasarForm14_atras() {
  let form15 = document.getElementById("part15");
  form15.style.display = "none";

  let form14 = document.getElementById("part14");
  form14.style.display = "flex";

  
  let button13_atras = document.getElementById("button13_atras");
  button13_atras.style.display = "block";

  let button14_atras = document.getElementById("button14_atras");
  button14_atras.style.display = "none";
 
  let button14_siguiente = document.getElementById("button14_siguiente");
  button14_siguiente.style.display = "block";

  // let buton18 = document.getElementById("button18");
  // buton18.style.display = "flex";
  let butonFinal = document.getElementById("butonFinal");
    butonFinal.style.display = "none";
}