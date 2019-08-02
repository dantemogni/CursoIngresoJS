function mostrar()
{
    var numUno;
    var numDos;
    var suma;

    numUno=prompt("Ingresar un número");
    numUno=parseInt(numUno);
    numDos=prompt("Ingresar el numero dos");
    numDos=parseInt(numDos);

    if(numUno==numDos)
    {
        alert(numUno+" "+numDos);
    } else if(numUno > numDos)
    {
        alert(numUno/numDos);
    } else 
    {
        suma = numUno + numDos;
        alert(suma);
    }
    if(suma < 50)
    {
        alert("La suma es " + suma + " y es menor a 50");
    }

}
