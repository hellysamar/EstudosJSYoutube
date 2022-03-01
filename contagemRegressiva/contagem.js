/**
 * JS - Contagem regressiva utilizando sons, e 
 * @author hellysamar
 */

var check = false;

function decisivo() {
    if (check == false) {
        var timerStart = setInterval(function(){start()}, 1000);
        var timerEnd = setTimeout(function(){end()}, 13200);
        var contador = 10;
        function start(){
            soundBeep();
            document.getElementById("time").innerHTML = contador;
            if(contador == 0) {
                clearInterval(timer);
                soundExplosao();
                document.getElementById("explosao").src="explosion.gif";
                document.getElementById("time").innerHTML = "Game Over!";
            }
            contador --;
        }
        check = true;
    }
}

function soundExplosao() {
    var explosao = new Audio();
    explosao.src = "Thunder_Crack.mp3"
    explosao.play();
}

function soundBeep(){
    var beep = new Audio();
    beep.src = "Beep_Short.mp3";
    beep.play();
}

function end(){
    document.getElementById("explosao").src = "clean.png";
}