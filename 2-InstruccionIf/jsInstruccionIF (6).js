function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    
    if(edad >= 18)
    {
        alert("La persona es mayor de edad");
    }

if(edad >= 13)
    {
            if(edad <= 17)
        {
            alert("La persona es adolescente");
        }
    }

if(edad < 13)
    {
        alert("La persona es un niño");
    }
}//FIN DE LA FUNCIÓN