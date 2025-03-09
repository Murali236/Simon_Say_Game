let gameSeq = [];
let userSeq = [];

let highest_Score = 0;

let button = document.querySelector('button');

let btns= ['red','green','orange','purple'];

let started = 0;
let level=0;

let h2 = document.querySelector('h2');
let main = document.querySelector('.main');

document.addEventListener('keypress',()=>{
        if(started == 0){
        // console.log('game started');
        levelUp();
        started = 1;
        }
})

button.addEventListener('click',()=>{
    if(started == 0){
        // console.log('game started');
        levelUp();
        started = 1;
        }
})

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(()=>{
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level "+level;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(this.getAttribute("id"));
    matchSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function matchSeq(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
            document.querySelector('body').style.backgroundColor = 'red';
            setTimeout(()=>{
                document.querySelector('body').style.backgroundColor = 'white';
            },150);
            if(highest_Score<level){
                highest_Score = level;
            }
            h2.innerHTML = `Game Over! <br>Your Highest Score is ${highest_Score} <br> Your Score was <b> ${level}</b> <br> Press any key to start`;
            started = 0;
            gameSeq=[];
            userSeq=[];
            level = 0;
    }
}