const escribir=document.querySelectorAll("input");
escribir[0].addEventListener("input",(event)=>{
    let cambio=document.querySelectorAll("p")
    texto=event.target.value
    if(texto.length < 6){
        cambio[0].textContent="El nombre debe tener al menos 6 caracteres"
    }
    else{
         cambio[0].textContent="El nombre es adecuado"
    }
})
escribir[1].addEventListener("input",(event)=>{
    let cambio=document.querySelectorAll("p")
    texto2=event.target.value
    if(texto2.length <12 || (!texto2.includes("@gmail.com"))){
        cambio[1].textContent="El correo debe tener al menos 12 caracteres y debe incluir @gmail.com" 
    }
    else{
        cambio[1].textContent="El correo cumple con las condiciones adecuadas"
    }
})
escribir[2].addEventListener("input",(event)=>{
    let cambio=document.querySelectorAll("p")
    texto3=event.target.value
    if(texto3.length<12){
        cambio[2].textContent="La contraseña debe tener al menos 12 caracteres"
    }
    else{
        cambio[2].textContent="La contraseña cumple con las condiciones adecuadas"
    }
})


function mostrarTexto() {
    let texto1 = document.getElementById("input1").value;
    let texto2 = document.getElementById("input2").value;
    let texto3 = document.getElementById("input3").value;

    document.getElementById("resultado").innerText = "Nombre: " + texto1 + " | Correo: " + texto2+"| Contraseña: " + texto3;
  }