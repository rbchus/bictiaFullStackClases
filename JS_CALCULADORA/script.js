


const calculadora = (operacion)=>{
 
    let valorA = parseInt(document.getElementById("valorA").value)
    let valorB = parseInt(document.getElementById("valorB").value)
    let resultado = document.getElementById("resultado")
    let respuesta

    switch (operacion) {
        case 'suma':
            console.log ("suma");
            respuesta  = valorA + valorB;
        break;
        case 'resta':
            console.log ("resta");
            respuesta = valorA - valorB;
        break;
        case 'multiplica':
            console.log ("multiplica");
            respuesta = valorA * valorB;
        break;
        case 'divide':
            console.log ("divide");
            respuesta = valorA / valorB ;
        break;

        case 'limpia':
            valorA.value = "";
            valorB.value = "";
            respuesta=""
        break;

        default:
            break;
   
      }

      
      resultado.innerText = respuesta
     
 //return;

}


//suma.addEventListener('click', calculadora('suma'));
//resta.addEventListener('click', calculadora('resta'));
//multiplica.addEventListener('click', calculadora('multiplica'));
//divide.addEventListener('click', calculadora('divide'));