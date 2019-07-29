
function mostrar()
{
    var ancho;
    var alto;
    var perimetro;
    
    ancho = prompt("Ingrese el ancho del rectángulo");
    ancho = parseInt(ancho);
    alto = prompt("Ingrese el alto del rectángulo");
    alto = parseInt(alto);
    perimetro = (ancho * 2) + (alto * 2);
    alert("El perímetro del rectángulo es " + perimetro);

}
