function mostrar()
{

	var contador = 0;
	var minimo = +Infinity;
	var maximo = -Infinity;
	var numero;
	// declarar variables

	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un número " + (contador + 1));
		numero = parseInt(numero);
		respuesta = prompt("¿Desea ingresar otro número? (si/no)");
		contador++;
		if(contador==1) //quiere decir que si el usuario ingresa solo un numero, el max y min son lo mismo.
		 	{
		 		minimo=numero;
				maximo=numero;
			} else if (numero > maximo) {
	 			maximo = numero;
	 		} else if (numero < minimo) {
	 			minimo = numero;
	 		}
	}
	

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN