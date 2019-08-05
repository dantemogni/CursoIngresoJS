function mostrar() {
    var notas;
    var sexo;
    var contador = 0;
    var promedio;
    var sumatotal = 0; //esto es un ACUMULADOR
    var min;
    var sexmin;
    var cantVaron = 0;
    for(var i = 0; i<5; i++) {
        notas = prompt("Ingresar la nota: " + (contador + 1));
        notas = parseInt(notas);
        //mejor asi:
        //notas=parseInt(prompt(Ingrese nota: ""));
        sumatotal = sumatotal + notas;
        // o sumatotal += notas;
        contador++;
        while (!(notas >= 0 && notas <= 10)) {
            notas = prompt("Por favor ingrese notas en el rango de 0 a 10.");
            //ACA DE VUELTA EL PARSE INT
        }
        sexo = prompt("Ingresar el sexo del alumno:");
        //sexo = sexo.toLowerCase();
        //se puede poner asi: sexo=prompt("Ingresar sexo").toLowerCase();
        while (!(sexo == "f" || sexo == "m"))
        //while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Ingrese un sexo válido.");
            //va devuelta el lowercase
        }
        if (notas < min || i==0) { // ??? creo q es porque notas > min solo me da undefined porque no se sabe que es "min", 
            min = notas;           // entonces ejecuta el i==0 que es verdadero, conviertiendo el "min" en el numero.
            sexmin = sexo;         // entonces cuando se vuelve a ejecutar el codigo (es una iteracion), el min ya tiene un valor
        }                          // entonces ya no da màs undefined y listo
        if (notas >= 6 && sexo == "m") {
            cantVaron++;
        }
    }

    promedio = sumatotal / 5;
    alert("El promedio es " + promedio);
    alert("La nota mínima es " + min + " y pertenece al sexo: " + sexmin);
    alert("La cantidad de varones con nota mayor o igual a 6 es: " + cantVaron);

}
