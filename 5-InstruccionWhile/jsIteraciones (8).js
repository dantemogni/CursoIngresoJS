function mostrar()
{

	var contador=0; 
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while(respuesta == "si") //como la variable respuesta es "si" por default, esto se ejecuta siempre 
	{
		numero = prompt("Ingrese un número " + (contador+1));
		numero = parseInt(numero);
		respuesta = prompt("Desea seguir ingresando números? (Si/No)");
		contador++;
		if(numero >= 0)
			{
				positivo = positivo + numero;
			} else if (numero<0) 
				{
					negativo = negativo * numero;
				} else
					{
						alert("Por favor, ingrese SOLO números.")
					}
	}
	
		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN