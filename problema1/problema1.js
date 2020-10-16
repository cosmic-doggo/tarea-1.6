var r= document.getElementById("radio");
var boton= document.getElementById("boton");
var resultado=document.getElementById("resultado");
var res=0;
boton.addEventListener("click",volumen);

function volumen()
{
 r=parseInt(radio.value);   
 res=(4/3)*(3.14159)*(Math.pow(r,3));

    resultado.innerHTML="VOLUME: "+res;
}