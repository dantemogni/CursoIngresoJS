function mostrar()
{
    var sexo;
    sexo = prompt("Indique su sexo");

    while(!(sexo == "f" || sexo == "m"))
    {
        sexo = prompt("Error, especifique correctamente su sexo.");
    }
        document.getElementById("Sexo").value = sexo;
}