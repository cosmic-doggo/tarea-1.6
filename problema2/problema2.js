var x= document.getElementById("x");
var y=document.getElementById("y");
var boton=document.getElementById("boton");
var res=document.getElementById("resultado");

boton.addEventListener("click", coordenada);
function coordenada()
{
    x=parseInt(x.value);
    y=parseInt(y.value);
    resultado.innerHTML="<hr>";
    if(x==0 & y==0){resultado.innerHTML="<hr> Estas en el punto de origen";}
    else
    {
        if(x>0){
            if(y>0)
            {
                resultado.innerHTML="<hr> Esta en Q1";
            }
            else
            {
                resultado.innerHTML="<hr> Esta en Q4";
            }   
        }
        else{
            if(y<0)
            {
                resultado.innerHTML="<hr> Estas en Q2";    
            }
            else{
                resultado.innerHTML="<hr> Estas en Q3";
            }
        }
    }
    


}