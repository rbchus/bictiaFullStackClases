/* const dark = document.getElementById('dark')
const light = document.getElementById('light')
const pink = document.getElementById('pink')

dark.addEventListener('click', ()=>{
   localStorage.setItem("tema","dark")
   asignarTema()
})

light.addEventListener('click', ()=>{
    localStorage.setItem("tema","light")
    asignarTema()
 })

 pink.addEventListener('click', ()=>{
    localStorage.setItem("tema","pink")
    asignarTema()
 }) */



 const seleccinarTema = (Tema)=>{
    localStorage.setItem("tema",Tema)
    asignarTema()
 }


const asignarTema = ()=>{
    let tema = localStorage.getItem('tema')
    switch (tema) {
        case 'light':
            document.getElementById('container').classList.remove('dark')  
            document.getElementById('container').classList.remove('pink')
        break;
        case 'dark':
            document.getElementById('container').classList.remove('pink')
            document.getElementById('container').classList.add('dark')  
            
        break;   
        
        case 'pink':
            document.getElementById('container').classList.remove('dark')  
            document.getElementById('container').classList.add('pink')  
        break; 

        default:
            
            break;
   
      }
      //window.location.reload()
    }

    asignarTema()