
function mostrar()
{
    var base;
    var altura;
    var perimetro;
    var superficie;
    var lados;

    lados = prompt("Indique el valor de los lados del triangulo");
    lados = parseInt(lados);
    base = lados;
    altura = prompt("Indique la altura del triangulo");
    altura = parseInt(altura);
    perimetro = lados * 3;
    superficie = (base * altura) / 2;
    alert("El perímetro es " + perimetro + " y la superficie es " + superficie);
}
