function mostrar()
{
	var contador=0;
	var contadorPosi = 0;
	var contadorNega = 0;
	var contadorCeros = 0;
	var acumuladorPosi = 0;
	var acumuladorNega = 0;
	var negativo = 0;
	var positivo = 0;
	var numeros;
	var contadorPares = 0;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no" && respuesta == "si")
	{
		numeros = parseInt(prompt("Ingresar un número. " + (contador+1)));
		respuesta = prompt("¿Desea seguir agregando números? (si/no)");
		contador++;
		if(isNaN(numeros))
		{
			alert("Por favor, ingreśa SÓLO números");
		}
		if(numeros > 0)
			{
				positivo=parseInt(positivo);
				positivo = positivo + numeros;
			} 	else if (numeros<0) 
				{
					negativo = parseInt(negativo);
					negativo = negativo + numeros;
				} 
 		if (numeros > 0)
			{	
				acumuladorPosi = parseInt(acumuladorPosi);
				acumuladorPosi = acumuladorPosi+numeros;
				contadorPosi++;
			} 		else if (numeros < 0)	
					{
						acumuladorNega = parseInt(acumuladorNega);
						acumuladorNega = acumuladorNega + numeros;
						contadorNega++;
					}		else 
							{
								contadorCeros = parseInt(contadorCeros);
								contadorCeros = contadorCeros + 1;
							}
		if (numeros %2 == 0) 
		{
			//pares = pares + numeros;
			contadorPares++;
		} 
	}

	document.write("La suma de números positivos es " + positivo + "<br>");
	document.write("La suma de números negativos es " + negativo + "<br>");
	document.write("La cantidad de números positivos es " + contadorPosi + "<br>");
	document.write("La cantidad de números negativos es " + contadorNega + "<br>");
	document.write("La cantidad de ceros es " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es " + contadorPares + "<br>");
	document.write("El promedio de los números positivos es " + positivo/contadorPosi + "<br>");
	document.write("El promedio de los números negativos es " + negativo/contadorNega + "<br>");
	document.write("La diferencia entre positivos y negativos es " + (positivo - negativo));
	
}//FIN DE LA FUNCIÓN