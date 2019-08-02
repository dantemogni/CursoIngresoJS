function mostrar()
{
    var nombre = 0;
    var cantPags;
    var cantVentas;
    var tema;
    var rta = true;
    var impares = 0;
    var pares = 0;
    var ceros = 0;
    var promedio;
    var acumulador=0;
    var programacion = 0;

    while(rta==true)
    {
        nombre = prompt("Ingrese el nombre del libro");
        cantPags = prompt("Ingrese la cantidad de páginas");
        cantPags = parseInt(cantPags);
        while(isNaN(cantPags))
        {
            cantPags=prompt("Error, ingrese números validos");
        }
        cantVentas = prompt("Ingrese la cantidad de ventas");
        cantVentas=parseInt(cantVentas);
        while(isNaN(cantVentas) || cantVentas < 0)
        {
            cantVentas=prompt("Error, ingrese números válidos");
        }
        tema = prompt("Ingrese el tema del libro");
        while(!(isNaN(tema)))
        {
            tema = prompt("Error, ingrese un tema válido");
        }
        rta = confirm("Desea seguir ingresando datos?");

    if(cantPags %2 != 0) {
        impares++;
    } 
    if(cantPags %2 == 0)
    {
        pares++;
    }
    if(cantVentas==0)
    {
        ceros++;
    }
    acumulador++;
    promedio=cantVentas/acumulador;

    if(tema=="programacion"){
        programacion= cantPags + programacion;
    }
}
    
    document.write("La cantidad de libros con páginas pares es de " + pares + "<br>");
    document.write("La cantidad de libros con páginas impares es de " + impares + "<br>");
    document.write("La cantidad de ceros ventas es de " + ceros + "<br>");
    document.write("El promedio de todas las ventas ingresadas es de " + promedio + "<br>");
    document.write("La suma de todas las páginas de los de programación es de " + programacion + "<br>");
}
