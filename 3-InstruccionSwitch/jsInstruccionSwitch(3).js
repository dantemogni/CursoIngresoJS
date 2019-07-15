function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Este mes tiene 30 días o más");
        break;
    case "Febrero":
        alert("Este mes no tiene más de 29 días");
}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN