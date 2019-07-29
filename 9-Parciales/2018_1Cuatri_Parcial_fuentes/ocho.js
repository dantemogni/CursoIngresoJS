function mostrar()
{
    var letra;
    var num;
    var rta = true;
    var contador = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var positivos=0;
    var negativos=0;
    var cantPosi = 0;
    var min = 0;
    var max = 0;
    var letraMax;
    var letraMin;
    var promedio;
    
    while(rta == true)
    {
        letra = prompt("Ingrese una letra:"); 
    while(!(isNaN(letra)))
        {
            letra = prompt("Error, por favor ingrese una letra");
        }
    num = prompt("Ingrese un número: " + (contador + 1));
    num = parseInt(num);
    while(isNaN(num) || num < -100 || num > 100) 
        {
            num = prompt("Error, por favor ingrese un número entre -100 y 100");
        }
        rta = confirm("¿Desea seguir ingresando datos?");
    
    if(num %2 == 0 && num !=0)
    {
        cantPares++;
    } else if (num %2 != 0) {
        cantImpares++;
    } else {
        cantCeros++;
    }

    if(num > 0)
    {
        positivos = num + positivos; // sumo los posi
        cantPosi++; // cuento los posi
    } else {
        negativos = num + negativos; //sumo los nega
        //negativos++; 
    }

    if(contador==0)
    {
        min = num;
        max = num;
    }
    if(num > max)
    {
        max = num;
        letraMax = letra; 
    } 
    if(num < min) {
        min = num;
        letraMin = letra;
    }
    
    contador++;
}

    promedio = positivos / cantPosi;

    document.write("La cantidad de números pares es " + cantPares + "<br>");
    document.write("La cantidad de números impares es de " + cantImpares + "<br>");
    document.write("La cantidad de ceros es " + cantCeros + "<br>");
    document.write("El promedio de los números positivos es " + promedio + "<br>");
    document.write("La suma de números negativos es de " + negativos + "<br>");
    document.write("El número y la letra del máximo es " + max + " " + letraMax + " y el número y la letra del mínimo es " + min + " " + letraMin + "<br>");

}
