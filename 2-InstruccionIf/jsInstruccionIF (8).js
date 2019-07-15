function mostrar()
{
//tomo la edad  
    var edad;
    var estcivil;
    edad = document.getElementById("edad").value;
    estcivil = document.getElementById("estadoCivil").value;

    if(edad >= 18)
{
    if(estcivil == "Soltero")
    {
        alert("Es soltero y no es menor");
    }
}
//o tmb puede ser
//if(edad>=18 && estcivil=="soltero")


}//FIN DE LA FUNCIÓN