function mostrar()
{
    var planetas;
    planetas = prompt("Ingrese un planeta:");
    
    switch(planetas)
    {
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
        break;
        case "tierra":
            alert("Acá vivimos");
        break;
        case "marte":
        case "jupiter":
        case "urano":
        case "pluton":
        case "saturno":
        case "neptuno":
            alert("Acá hace más frío")
        break;
        default: 
            alert("El planeta no existe");    
    }
}
