function mostrar() {
    var letra;
    var num;
   // var rta = true; // no es necesario poner esta variable, solo se reemplaza en el while() el confirm
    var contador = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var positivos = 0;
    var negativos = 0;
    var cantPosi = 0;
    var min;
    var max;
    var letraMax;
    var letraMin;
    var promedio=0; // si no se hacer la cuenta, muestra cero
    var flag = 0;
    do {
        letra = prompt("Ingrese una letra:");
        // while (!(isNaN(letra))) // me descarta los numeros pero no los simbolos o espacios en blanco, asi que tecnicamente no sirve
        // {
        //     letra = prompt("Error, por favor ingrese una letra");
        // }
        num = prompt("Ingrese un número: " + (contador + 1));
        num = parseInt(num);
        while (isNaN(num) || num < -100 || num > 100) {
            num = prompt("Error, por favor ingrese un número entre -100 y 100");
        }
    }
    while (confirm("¿Desea seguir ingresando datos?"))
    {

        if (num % 2 == 0 && num != 0) {
            cantPares++;
        } else if (num % 2 != 0) {
            cantImpares++;
        } else {
            cantCeros++;
        }

        if (num > 0) {
            positivos = num + positivos; // sumo los posi (acumulador posi)
            cantPosi++; // cuento los posi
        } else {
            negativos = num + negativos; //sumo los nega (acumulador nega)
            //negativos++; 
        }

        if (contador == 0) {
            min = num;
            max = num;
        }
        if (num > max || flag == 0) {
            max = num;
            letraMax = letra;
        }
        if (num < min || flag == 0) {
            min = num;
            letraMin = letra;
            flag=1; // ver comentario abajo 
        }

        contador++;
    }
    if(cantPosi != 0) { // si no hay numeros positivos, no se puede hacer la division
    promedio = positivos / cantPosi;
    }

    document.write("La cantidad de números pares es " + cantPares + "<br>");
    document.write("La cantidad de números impares es de " + cantImpares + "<br>");
    document.write("La cantidad de ceros es " + cantCeros + "<br>");
    document.write("El promedio de los números positivos es " + promedio + "<br>");
    document.write("La suma de números negativos es de " + negativos + "<br>");
    document.write("El número y la letra del máximo es " + max + " " + letraMax + " y el número y la letra del mínimo es " + min + " " + letraMin + "<br>");

}
// los maximos y minimos se pueden tambien asi:
// var flag=0;
//var mayor;
//var menor;
//..
//..
//..
//if(num > mayor || flag == 0)
//{
//  mayor=num;    
//} 
//if(num < menor || flag ==0)
// {
//  menor=num;
//  flag = 1;           (esto hace que a partir de aca flag sea falso y no se ejecute por asi decirlo, entonces solo se fija en la primera condicion)   
//}

// alert("hola" + "\n chau") devuelve un hola y abajo el chau