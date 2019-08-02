function mostrar()
{
    var notas;
    var edad;
    var sexo;
    var promedio;
    var acumulador = 0;
    var contador = 0;
    var notaMin = +Infinity;
    var sexomin;
    var sexoJoven;
    var notaJoven;
    var varonesMayores = 0;
    var notaPrimerMujer;
    var edadPrimerMujer;
    var edadJoven = +Infinity;
    var contMujeres = +Infinity;

   
    while (contador < 5)
    {   
        notas = prompt("Ingresar notas " + (contador+1));
        notas = parseInt(notas);
        acumulador = acumulador + notas;
        contador++; 
        while(notas < 0 || notas > 10 || isNaN(notas))
        {
            notas = prompt("Error, ingrese notas entre 0 y 10");
        
        }
    edad = prompt("Ingrese la edad");
    edad = parseInt(edad);
    while(isNaN(edad))
    {
        edad = prompt("Error, ingrese una edad válida");
    }
    sexo = prompt("Ingrese el sexo (f o m)");
        while(sexo != "f" && sexo!="m") 
        {
            sexo=prompt("Error, ingrese solo f o m");
        }
    promedio = acumulador/5;
    if(notas < notaMin)
    {
        notaMin=notas;
        sexomin = sexo;
    }
    if (notas >= 6 && sexo == "m" && edad >= 18)
        {
            varonesMayores++;
        }
    if(edad < edadJoven)
    {
        edadJoven = edad;
        notaJoven = notas;
        sexoJoven = sexo;
    }
    if(contador > 0 && sexo == "f") 
    {
        edadPrimerMujer=edad;
        notaPrimerMujer=notas;
        
    }
    }
    alert("El promedio de las notas totales es de " + promedio);
    alert("La nota más baja es " + notaMin + " y el sexo de la persona es " + sexomin);
    alert("La cantidad de varones mayores a 18 con nota mayor o igual a 6 es de " + varonesMayores);
    alert("El sexo y la nota del más jóven es " + sexoJoven + " " + notaJoven);
    alert("La edad y la nota de la primera mujer ingresada es " + edadPrimerMujer + " " + notaPrimerMujer);
    
}
