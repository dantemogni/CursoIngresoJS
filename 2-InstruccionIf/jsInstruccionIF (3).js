function mostrar()
{
//tomo la edad  
    var mayor;
    mayor = document.getElementById("edad").value;
    mayor = parseInt(mayor);
if(mayor>=18)
    {
        alert("La persona es mayor de edad");
    }
if(mayor<18)
    {
        alert("La persona es menor de edad");
    }
}//FIN DE LA FUNCIÓN