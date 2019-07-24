/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 var numUno;
        var numDos;
        var resultado;

        numUno = document.getElementById("numeroUno").value;
        numUno = parseInt(numUno);
        numDos = document.getElementById("numeroDos").value;
        numDos = parseInt(numDos);
        resultado = (numUno + numDos);
        alert("La suma es " + resultado);
}
