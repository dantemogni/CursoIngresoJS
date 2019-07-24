function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9");
	var contador=0;

	while(numero<0 || numero>9)
	{
		numero = prompt("Error, por favor ingrese un número entre 0 y 9");
	}
	document.getElementById("Numero").value = numero;

}
//FIN DE LA FUNCIÓN
// function mostrar()
// {
// 	var numero = prompt("ingrese un número entre 0 y 9.");
// 	while(!(numero >= 0 && numero <= 9))
// 		{
// 			alert("Error, el numero debe estar comprendido entre 0 y 9");
// 			break;
// 		}
// 	if (numero >= 0 && numero <= 9) 
// 	{
// 		document.getElementById("Numero").value = numero;
// 	}
// }//FIN DE LA FUNCIÓN