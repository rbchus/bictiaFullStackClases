console.log ("*** Hola que tal ***");

//*********************************************************** */
//*****************      1 ejercicio ************************ */
//*********************************************************** */


const botonIn = document.getElementById('botonIn');


let usuarios = [];
let usuariosOrdenado = [];
let existe;


botonIn.addEventListener('click', ()=>{ 

    const texto = document.getElementById('textoIn');
    const textoIn = texto.value;
    console.log ( "valor Digitado: " + textoIn);

    if (textoIn != "" ) {
       // si el texto es diferente de vacio se ejecuta
        
    existeUsuario(textoIn)
            if(!existe) {
                usuarios.push(textoIn);
                console.log (usuarios);
                
            } else {
                alert (" El usuario " + textoIn + " ya existe");
            }
    }else {
        
        usuarios.sort();
        pintarArray()
         }
         texto.value = "";

})



const existeUsuario = (userIn)=>{ 
    existe=false;
    for (user of usuarios){
        if (user === userIn)
        existe = true 
     }
}


const pintarArray = ()=>{ 
    for (user of usuarios){
    var etiqueta = document.createElement("li");
    etiqueta.textContent = user;
    lista.appendChild(etiqueta);
     }
}


//*********************************************************** */
//*****************      2 ejercicio ************************ */
//*********************************************************** */

const botonFraseIn = document.getElementById('botonFraseIn');
const  tamano = document.getElementById("tamano");
const  espacios = document.getElementById("espacios");
const  reves = document.getElementById("reves");



botonFraseIn.addEventListener('click', ()=>{ 

    const fraseIn = document.getElementById('fraseIn').value;
    let ArrayFrase = fraseIn.split("");
    let contador = 0;
  
    

    for (let i=0 ; i< ArrayFrase.length  ; i+=1){
         if (ArrayFrase[i] == " ")  
               contador = contador + 1  
         
        }

    
        tamano.innerText = " Tamano: " + ArrayFrase.length;
        espacios.innerText = " Espacios: " + contador;
        reves.innerText = ArrayFrase.reverse();


})


//*********************************************************** */
//*****************      3 ejercicio ************************ */
//*********************************************************** */


const botonCadenaIn = document.getElementById('botonCadenaIn');
const  salida = document.getElementById("salida");



botonCadenaIn.addEventListener('click', ()=>{ 

    
    const cadenaIn = document.getElementById('cadenaIn').value;
    let cadena = cadenaIn.split("");
    let palabra = "";

    for (let i=0 ; i< cadena.length  ; i+=1){
         
        cadena[i]= cadena[i]+"-";
        palabra = palabra + cadena[i];
        
       }

   
    salida.innerText = palabra;


})