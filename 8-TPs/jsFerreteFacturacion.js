/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numUno;
    var numDos;
    var numTres;
    var suma;
    
    numUno = document.getElementById("PrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("PrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("PrecioTres").value;
    numTres = parseInt(numTres);

    suma = numUno + numDos + numTres;
    alert("La suma es " + suma);
}
function Promedio () 
{
	var numUno;
    var numDos;
    var numTres;
    var promedio;
    
    numUno = document.getElementById("PrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("PrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("PrecioTres").value;
    numTres = parseInt(numTres);

    promedio = (numUno + numDos + numTres)/3;

    alert("El promedio es "+ promedio);
}
function PrecioFinal () 
{
	var numUno;
    var numDos;
    var numTres;
    var iva;
    var suma;
    var preciofinal;
    
    numUno = document.getElementById("PrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("PrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("PrecioTres").value;
    numTres = parseInt(numTres);

    suma = numUno + numDos + numTres;
    iva = suma * 0.21;
    preciofinal = suma + iva;
    alert("El precio final es " + preciofinal);
}