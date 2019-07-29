function mostrar()
{
    var notas;
    var sexo;
    var contador = 0;
    var promedio;
    var sumatotal = 0;
    var min = +Infinity;
    var sexmin;
    var cantVaron = 0;
 
    while(contador < 5)
    {
           notas = prompt("Ingresar la nota: " + (contador+1));
            notas=parseInt(notas);
           sumatotal = sumatotal + notas;
           contador++;
            while(!(notas >= 0 && notas <= 10)) 
        {
            notas = prompt("Por favor ingrese notas en el rango de 0 a 10.");
        }
            sexo = prompt("Ingresar el sexo del alumno:");
            while(!(sexo == "f" || sexo == "m"))
        {
            sexo = prompt("Ingrese un sexo válido.");
        }
        if(notas < min) 
        {
            min = notas;
            sexmin = sexo;
        }
        if(notas >=6 && sexo == "m")
         {
             cantVaron++;
         }
    }
      
   promedio = sumatotal/5;
   alert("El promedio es " + promedio);
   alert("La nota mínima es " + min + " y pertenece al sexo: " + sexmin);
   alert("La cantidad de varones con nota mayor o igual a 6 es: " + cantVaron);

}
