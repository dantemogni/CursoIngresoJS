function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si'; //Esto se llama bandera, es una variable fija
 	var numero;

 	while(respuesta=='si') //Aca la vedad para seguir seria poner si, recordad que la variable 
 		             //ya esta fijada en si como bandera
 	{
		contador++;
 		numero=parseInt(prompt("Ingrese un numero " + (contador+1)));
 		acumulador=acumulador+numero;
 		respuesta=prompt("¿Desea seguir? Ingrese 'si' o 'no'.");
 	}
	 if(isNaN(numero))
	 {
		 alert("Por favor, ingrese SOLO números");
	 } else {
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
	 }

}//FIN DE LA FUNCIÓN 