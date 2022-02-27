/**
 * JS - Controle do interruptor da lâmpada por interruptor com a estrutura While, e o método setTimeout
 * @hellysamar
 */

function on(){
    document.getElementById("lamp").src="on.jpg";
}

function off(){
    document.getElementById("lamp").src="off.jpg";
}

function piscar(){
    var intervalo = 0;
    var contador = 0;
    
    while(contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='on.jpg';", intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='off.jpg';", intervalo);
        contador++;
    } 
}