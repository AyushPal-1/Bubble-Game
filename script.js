let timer = 60;
let score = 0;
let hit = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
// Getting hit number

function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
}

// Bubble creating
function makebubble() {
    let clutter = "";
for(let i = 1; i <= 243; i++){
    // random number genrating inside the bubble
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter
    
}
// Creating Timer 
function runTimer() {
    let timerint = setInterval(function () {
        if(timer > 0)
            {
                timer--;
                document.querySelector("#timerval").textContent = timer; 
            }
            else{
                clearInterval(timerint)
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over Score is ${score}</h2>`
            }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function(details){
    let clickednum = Number(details.target.textContent)
    if(clickednum === hit){
        increaseScore();
        getNewHit()
        makebubble();
    }
});


getNewHit()
makebubble();
runTimer();






