// ECMAScript 6
/* 
const mensajeAlerta = ()=>{
    
    alert("Hola Mundo");
   
}

const cajaTexto = ()=>{
    
    var nombre=prompt('Digite Nombre');
    document.write ("<h1> su nombre es  " + nombre + "</h1>")
   
}


const confirmar = ()=>{
    
    var respuesta = confirm("si o no ");
       if (respuesta)
           alert (" true ");
        else
        alert (" false ");
   
}


const consola = ()=>{
    
   console.log (" blablabalbla");
   
}


//--------------------

var imagen =  document.getElementById('logo');
//imagen.addEventListener('click', funcion);

imagen.addEventListener('click',() => {
  
     //alert (" ----- batman ------");
    imagen.style.width = '100px';

});

imagen.addEventListener('dblclick',() => {
  
   // alert (" ----- batman ------");
   imagen.style.width = '500px';

});

var caja =  document.getElementById('box');
caja.addEventListener('mouseenter',() => {
  
   caja.classList.replace('box','cambio');
 
 });

 caja.addEventListener('click',() => {
  
    caja.classList.replace('cambio','box');
  
  });

  caja.addEventListener('mouseleave',() => {
  
    caja.classList.replace('cambio','box');
  
  });

  //teclaldo

  var teclado =  document.getElementById('teclado');
  teclado.addEventListener('keydown',() => {
  
    console.log (" digitado tecla ")
  
  });

  teclado.addEventListener('keypress',() => {
  
    console.log ("  tecla sostenida ")
  
  }); 

  teclado.addEventListener('keyup',(e) => {
  
    console.log (e.key)
  
  });
*/

var padre = document.getElementById('padre');



padre.addEventListener("click",(e)=>{
 //console.log(e.target.textContent)

 var num = Math.round(Math.random()*10) 
 console.log(num)

 e.target.classList.add('color'+ num)
})


var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");

agregar.addEventListener('click', ()=>{
    
    var texto = document.getElementById("texto").value;

    var etiqueta = document.createElement("li");
    etiqueta.textContent = texto;
    lista.appendChild(etiqueta);

})