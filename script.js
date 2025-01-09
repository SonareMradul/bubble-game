var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn = Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = hitrn ;
}
function makeBubble(){

    var clutter = "";
    for(var i = 1; i<=102; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
        
    }
    document.querySelector("#ptbtm").innerHTML = clutter;
}
function runTimer(){
    var Timerint = setInterval(function(){
        if (timer){
        timer--;
    document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(Timerint);
            document.querySelector("#ptbtm").innerHTML = `<div id="lastScreen"><h1>game over</h1> <button type="button" id="restart">playagain ↻</button></div>`;
        }
    },1000);
    
}
document.querySelector('#ptbtm').addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
function startAgain(){
document.querySelector()
}
makeBubble();
runTimer();
getNewHit();
