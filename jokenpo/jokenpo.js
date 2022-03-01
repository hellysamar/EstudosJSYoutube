/**
 * JS - Criação do JavaScript para Logica do Jogo Pedra/Papel/Tesourados operadores &&AND, ||OR e !NÃO, if(){}else id(){}.
 * @author hellysamar
 */

function jogar(){
    if(document.getElementById("pedra").checked == false 
        && document.getElementById("papel").checked == false
        && document.getElementById("tesoura").checked == false){
        alert("Não tem como ganhar sem Jogar!");
    }else{
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById("playerPc").src="pcpedra.png";
                break;
            case 1:
                document.getElementById("playerPc").src="pcpapel.png";
                break;
            case 2:
                document.getElementById("playerPc").src="pctesoura.png";
                break;
            default:
                document.getElementById("playerPc").src="pc.png";
        }
    }

    if(
        document.getElementById("pedra").checked == true && sorteio == 0 ||
        document.getElementById("papel").checked == true && sorteio == 1 ||
        document.getElementById("tesoura").checked == true && sorteio == 2
    ){
        document.getElementById("placar").innerHTML="Foi um belo EMPATE!!!";
    } else if(
        document.getElementById("pedra").checked == true && sorteio == 2 ||
        document.getElementById("papel").checked == true && sorteio == 0 ||
        document.getElementById("tesoura").checked == true && sorteio == 1
    ){
        document.getElementById("placar").innerHTML="Você Jogador VENCEU, e o NPC PERDEU!";
    } else {
        document.getElementById("placar").innerHTML="Você Jogador PERDEU, e o NPF é o VENCEDOR!!!";
    }
}

function resetar(){
    document.getElementById("playerPc").src="pc.png";
    document.getElementById("placar").innerHTML="";
}