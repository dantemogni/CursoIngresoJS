function mostrar()
{
    var rta = true;
    var nombre;
    var peso;
    var temp;
    var tempPar = 0;
    var maxPeso = +Infinity;
    var nombrePesado;
    var tempPesado;
    var animalesBajoCero =0;
    var promedio;
    var acumulador=0;
    var maxPesoBajoCero = -Infinity;
    var minPesoBajoCero = +Infinity;

    while(rta==true)
    {
        nombre=prompt("Ingrese el nombre del animal");
        while(!(isNaN(nombre)))
        {
            nombre=prompt("Error, ingrese un nombre válido");
        }
        peso=prompt("Ingrese el peso del animal");
        peso=parseInt(peso);
        while(peso<1 || peso > 1000)
        {
            peso=prompt("Error, ingrese un peso entre 1 y 1000");
        }
        temp=prompt("Ingrese una temperatura");
        while(temp<-30||temp>30)
        {
            temp=prompt("Error, ingrese una temperatura entre -30 y 30");
        }
        rta=confirm("Desea continuar ingresando datos?");
        if(temp %2 == 0)
        {
            tempPar++;
        }
        if(peso<maxPeso)
        {
            nombrePesado = nombre;
            tempPesado = temp;
        }
        if(temp<0)
        {
            animalesBajoCero++;
        }
        acumulador++;
        promedio = peso / acumulador;
        if(temp < 0 && peso>maxPesoBajoCero)
        {
            maxPesoBajoCero = peso;
        } 
        if(temp < 0 && peso<minPesoBajoCero)
        {
            minPesoBajoCero = peso;
        }
    }
document.write("La cantidad de temperaturas pares es de " + tempPar + "<br>");
document.write("El nombre y la temperatura del animal más pesado es " + nombrePesado + " " + tempPesado + "<br>");
document.write("La cantidad de animales que viven bajo cero es de " + animalesBajoCero + "<br>");
document.write("El promedio del peso de todos los animales es de " + promedio + "<br>");
document.write("El peso máximo y mínimo de todos los animales cuya temperatura es bajo cero es de " + maxPesoBajoCero + " y " + minPesoBajoCero + "<br>");
}
