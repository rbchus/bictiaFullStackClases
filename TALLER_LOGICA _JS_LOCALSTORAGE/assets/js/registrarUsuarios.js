
console.log (" - taller logica II - Registrar Usuarios ");


const botonRegistroIn = document.getElementById('botonRegistroIn');
const formularioRegistro = document.getElementById('formularioRegistro');
const alerta = document.getElementById('alerta');
const alertaMensaje = document.getElementById('alertaMensaje');



let listaUsuarios = [];
let existe;


formularioRegistro.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    const usuarioIn = document.getElementById('usuarioIn');
    const apellidoIn = document.getElementById('apellidoIn');
    const correoIn = document.getElementById('correoIn');
    const telefonoIn = document.getElementById('telefonoIn');
    const nicknameIn = document.getElementById('nicknameIn');
    const passwordIn = document.getElementById('passwordIn');

    const nuevoUsuario ={
        name: usuarioIn.value,
        last: apellidoIn.value,
        mail: correoIn.value,
        phone: telefonoIn.value,
        nick: nicknameIn.value,
        pass: passwordIn.value
        }
    
    console.log("usuario nuevo " + nuevoUsuario.nick) ;

    comprobarUsuario(nuevoUsuario.nick);
    
    if (!existe)
       {
           console.log(" el usario " + nuevoUsuario.name + " no existe  ")
           guardarUsuario(nuevoUsuario);

           usuarioIn.value="";
           apellidoIn.value="";
           correoIn.value="";
           telefonoIn.value="";
           nicknameIn.value="";
           passwordIn.value="";

          alerta.classList.add('ocultar') ;
           
           
       } else {
          
        console.log(" el usario " + nuevoUsuario.name + " existe  ")
        alerta.classList.remove('ocultar') 
        alertaMensaje.innerText = " El usuario " + nuevoUsuario.name + " ya existe";



       }

  

});


const guardarUsuario = (usuario) => {
    //console.log (usuario);
    if(localStorage.getItem('usuarios') == null){
        listaUsuarios.push(usuario)
        const usuariosString = JSON.stringify(listaUsuarios)
        localStorage.setItem('usuarios', usuariosString)
    }else{
        usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
        listaUsuarios.push(usuario)
        const usuariosString = JSON.stringify(listaUsuarios)
        localStorage.setItem('usuarios', usuariosString)
    }
}


const comprobarUsuario  = (nickname)=>{
    const usuarioEnStorage = JSON.parse(localStorage.getItem('usuarios'))
    existe = false;
    for(let i = 0; i<usuarioEnStorage.length; i += 1 ){
        if (usuarioEnStorage[i].nick === nickname)
            existe = true;
    }

}

