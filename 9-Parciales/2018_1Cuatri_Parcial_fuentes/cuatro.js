function mostrar()
{
    var numUn;
    var numDo;
     numUn = prompt("Ingrese un número");
     numUn = parseInt(numUn);
     numDo = prompt("Ingrese otro número");
     numDo = parseInt(numDo);

     if (numUn == numDo) 
     {
        alert("Su resultado es " + (numUn + " y " + numDo));
     } else if (numUn > numDo) {
         alert("Su resultado es " + (numUn - numDo));
     } else {
        alert("Su resultado es " + (numUn + numDo));
     } 
     if ((numUn+numDo)>10)
     {
         alert("La suma es " + (numUn+numDo) + " y superó los 10")
     }
}
