var can;

function mudacanal(canal){
    if(canal == 0){
        can = 0;
        document.getElementById("canal").src="img/desligado.png";
    }
    if(canal == 1){
        can = 1;
        document.getElementById("canal").src="img/canal1.gif";
    }
    if(canal == 2){
        can = 2;
        document.getElementById("canal").src="img/canal2.gif";
    }
    if(canal == 3){
        can = 3;
        document.getElementById("canal").src="img/canal3.gif";
    }
    if(canal == 4){
        can = 4;
        document.getElementById("canal").src="img/canal4.gif";
    }
    if(canal== 5){
        can = 5;
        document.getElementById("canal").src="img/canal5.gif";
    }
    if(canal == 6){
        can = 6;
        document.getElementById("canal").src="img/canal6.gif";
    }
    if(canal== 7){
        can = 7;
        document.getElementById("canal").src="img/canal7.gif";
    }
    if(canal == 8){
        can = 8;
        document.getElementById("canal").src="img/canal8.gif";
    }
    if(canal == 9){
        can = 9;
        document.getElementById("canal").src="img/canal9.gif";
    }
}
function sobecanal(){
    if(can != 9){
        can++;
        mudacanal(can);
    }
}

function descecanal(){
    if(can != 1){
        can--;
        mudacanal(can);
    }
    
}

