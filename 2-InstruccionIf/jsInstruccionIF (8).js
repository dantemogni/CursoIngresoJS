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

}//FIN DE LA FUNCIÓN