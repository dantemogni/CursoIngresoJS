function mostrar()
{
 var num = parseInt(prompt("Ingrese un número"));
 var pares=0;
 var cantpares=0;
 for(; pares % 2 == 0 && pares <= num; pares++ && cantpares++) {
     alert(pares++);
     
 }
alert("La cantidad de pares es de: " + cantpares++);


}//FIN DE LA FUNCIÓN