/**
 * JS - Utilizando Arrays para chamar cartas de Baralho.
 * @author hellysamar
 */

var nipes = ['♥️','♦️','♣️','♠️'];
var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function alterar(){
    var nipe = nipes[Math.floor(Math.random()*4)];
    var face = faces[Math.floor(Math.random()*faces.length)];
    document.getElementById("carta").innerHTML="<h3>" + face + nipe + "</h3>";
}