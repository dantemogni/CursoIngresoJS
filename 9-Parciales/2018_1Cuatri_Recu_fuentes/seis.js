function mostrar()
{
    var notas;
    notas = prompt("Ingresar una nota");

    switch(notas) 
    {
        case "0":
        case "1":
        case "2":
        case "3":
            alert("La proxima se puede");
        break;
        case "4":
        case "5":
        case "6":
            alert("raspando");
        break;
        case "7":
        case "8":
        case "9":
        case "10":
            alert("aprobó")
        break;
        default:
            alert("la nota no es valida");        
    }
    if(notas > 7)
    {
        alert("muy bien");
    } else if (notas == 4 || notas == 5) 
    {
        alert("debes preocuparte más")
    }
}
