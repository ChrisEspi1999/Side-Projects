var pipe = document.getElementById("pipe");
var gap = document.getElementById("gap");
var player = document.getElementById("player");
var jumping = 0;
var counter = 0;

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
    counter++;
});

setInterval(function(){
    // "Gravity" of player
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if(jumping == 0){
    player.style.top = (playerTop+3)+"px";
    }
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var pTop = -(500 - playerTop);
    // Hit box radius
    // Death message
    if(playerTop>480 || ((pipeLeft < 20) && (pipeLeft > -50)&&((pTop < gapTop) || (pTop > gapTop + 130)))){
        alert("You Died! Score: " + (counter-1));
        player.style.top = 100 + "px";
        counter = 0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var playerTop = 
        parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        if((playerTop>6) && (jumpCount<15)){
        player.style.top = (playerTop-5)+"px";
    }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}