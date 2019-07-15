function mostrar()
{
	var notas;
	//Genero el número RANDOM entre 1 y 10 
	notas = Math.floor(Math.random() * 10) + 1;
	if(notas >= 9)
	{
		alert("EXCELENTE, nota " + notas);
	} 
	else { 
		if(notas >=4)
		{
			alert ("APROBÓ, nota: " + notas);
		}
	else {
		alert("Vamos, la proxima se puede, nota: " + notas);
	}
}
}