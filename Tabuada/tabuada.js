/**
 * JS - Utilizando laço For para construir uma tabuada
 * @author hellysamar
 */
var valor = 7;

for(var i = 1; i < 11; i++){
    document.write("<br><p>Tabuada do " + i + "</p>");
    for(var j = 1; j < 11; j++){
        document.write(i + " x " + j + " = " + (j * i) + "<br>");
    }
    
}