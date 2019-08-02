function mostrar()
{
    var precio;
    var dto;
    var dtoDinero;
    var iva;
    var ivaPrecioFinal;
    var ivadto;
    var ivadtofinal;

    precio = prompt("Ingresar un precio:");
    precio = parseInt(precio);
    dto = prompt("Ingrese el descuento:");
    dto = parseInt(dto);

    dtoDinero = (precio*dto)/100; 
    iva = precio * 0.21;
    ivaPrecioFinal = precio + iva;
    ivadto = dtoDinero * 0.21;
    ivadtofinal = dtoDinero + ivadto;

    alert("El precio con descuento es " + dtoDinero + " y el precio con el IVA es de " + ivaPrecioFinal);
    document.getElementById("elPrecioFinal").value = ivadtofinal;

}
