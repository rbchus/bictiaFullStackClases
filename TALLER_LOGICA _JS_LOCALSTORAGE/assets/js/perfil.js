
console.log (" - taller logica II - Perfil ");


const formularioTarea = document.getElementById('formularioTarea');

const welcome = document.getElementById('welcome');
const name =  localStorage.getItem('nameLogeado');
const last =  localStorage.getItem('apellidoLogeado');
const lista = document.getElementById("lista");

welcome.innerText= "Bienvenido " + name + " " + last;

formularioTarea.addEventListener('submit', (e)=>{ 

    e.preventDefault();

    let textoIn = document.getElementById("textoIn");
    let etiqueta = document.createElement("li");
    
    etiqueta.textContent = textoIn.value;
    lista.appendChild(etiqueta);
    textoIn.value = "";

})



