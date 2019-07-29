function mostrar()
{
    var rta = true;
    var marca;
    var peso;
    var temp;
    var contador = 0;
    var tempPares = 0;
    var maxPeso = 0;
    var minPeso = 0;
    var marcaMax;
    var cantProdBajoCero = 0;
    var promedio;
    var sumaPeso = 0;

    while(rta == true)
    {
        marca = prompt("Ingrese una marca: "+ (contador + 1)); 
        peso = prompt("Ingrese un peso: ");
        peso = parseInt(peso);
        while(isNaN(peso) || peso < 1 || peso > 100) 
            {
                peso = prompt("Error, por favor ingrese un peso entre 1 y 100");
            }
        temp = prompt("Ingrese una temperatura:");
        while(temp < -30 || temp > 30)
            {
                temp = prompt("Error, por favor ingrese una temperatura entre -30 y 30");
            }
        rta = confirm("¿Desea seguir ingresando datos?");
            
        if(temp %2 == 0) //funciona
        {
            tempPares++;
        }
        if(peso > maxPeso) // no funciona
        {
            maxPeso = peso;
            marcaMax = marca; 
        } 
        if (peso < minPeso)
        {
            minPeso = peso;
        }
        if(temp < 0) //funciona
        {
            cantProdBajoCero++;
        }
        contador++;

    }
    sumaPeso = peso + sumaPeso; 
    promedio = sumaPeso / contador; //no funciona
    
    document.write("La cantidad de temperaturas pares es de " + tempPares + "<br>");
    document.write("La marca del producto más pesado es " + marcaMax + "<br>");
    document.write("La cantidad de productos que se conservan bajo cero es de " + cantProdBajoCero + "<br>");
    document.write("El promedio de todos los pesos es de " + promedio + "<br>");
    document.write("El peso mínimo es de " + minPeso + " y el peso máximo es de " + maxPeso + "<br>");




}
