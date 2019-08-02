function mostrar()
{
    var diaSem;

    diaSem = prompt("Ingresar un dia de la semana");
    switch(diaSem) 
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("a trabajar");
        break;
        case "sabado":
        case "domingo":
            alert("buen finde");
        break;
        default:
            alert("no es un dia valido");
    }
}
