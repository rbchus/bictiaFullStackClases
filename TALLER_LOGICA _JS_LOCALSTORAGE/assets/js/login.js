
console.log (" - taller logica II - Login ");

const botonIn = document.getElementById('botonIn');
const formularioLogin = document.getElementById('formularioLogin');
const alerta = document.getElementById('alerta');
const alertaMensaje = document.getElementById('alertaMensaje');


let listaUsuarios = [];
let existe;
let indice;


formularioLogin.addEventListener('submit', (e)=>{ 

    e.preventDefault();
    const usuLogeado = document.getElementById('registroUsuarioIn');
    const pasLogeado = document.getElementById('registroContrasenaIn');

 
    if(localStorage.getItem('usuarios') == null){
       
        alerta.classList.remove('ocultar') 
        alertaMensaje.innerText = " No hay Usuarios Registrados Local Storage";

    }else{
        // descargarmos la lista de usuarios del local storage
        usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))

        //verificamos si el usuario existe
        existe = false;
        for(let i = 0; i<usuariosRegistrados.length; i += 1 ){
            if (usuariosRegistrados[i].nick === usuLogeado.value)
                existe = true;
                indice=i;
        }

        if (existe) {
            if (usuariosRegistrados[indice].pass=== pasLogeado.value){
    
               localStorage.setItem('nameLogeado',usuariosRegistrados[indice].name);
               localStorage.setItem('apellidoLogeado',usuariosRegistrados[indice].last);

               alerta.classList.add('ocultar')
               usuLogeado.value=""
               pasLogeado.value=""

               window.location="perfil.html";

             }else {
                alerta.classList.remove('ocultar') 
                alertaMensaje.innerText = "Contraseña errada para " + usuLogeado.value;
            }
    
        }else {
            alerta.classList.remove('ocultar') 
            alertaMensaje.innerText = " El Usuario no esta registrado ";
        }





    }

});