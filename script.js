/*=========================================
KITTY QUEST ❤️
script.js
=========================================*/

const loadingFill = document.getElementById("loading-fill");
const loading = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");
const startBtn = document.getElementById("startBtn");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");
const butterflies = document.getElementById("butterflies");
const sparkles = document.getElementById("sparkles");

const xpFill = document.getElementById("xp-fill");

const heartCount = document.getElementById("heartCount");
const flowerCount = document.getElementById("flowerCount");
const starCount = document.getElementById("starCount");
const gemCount = document.getElementById("gemCount");
const coinCount = document.getElementById("coinCount");

const gameArea = document.getElementById("gameArea");

const questionSection = document.getElementById("questionSection");
const ending = document.getElementById("ending");

const answer = document.getElementById("answer");
const submitAnswer = document.getElementById("submitAnswer");
const playGame = document.getElementById("playGame");
const restart = document.getElementById("restart");

let heartsCollected = 0;
let xp = 15;
let score = 0;

/*==============================
LOADING
==============================*/

let load = 0;

const loader = setInterval(() => {

load++;

loadingFill.style.width = load + "%";

loadingText.innerHTML = load + "%";

if(load >= 100){

clearInterval(loader);

loadingText.innerHTML = "Ready!";

startBtn.style.display = "block";

}

},30);

startBtn.onclick = () => {

loading.style.display = "none";

};

/*==============================
SAVE
==============================*/

function saveGame(){

const data = {

hearts: heartsCollected,

xp: xp,

score: score

};

localStorage.setItem("kittyQuest",JSON.stringify(data));

}

function loadGame(){

const data = JSON.parse(localStorage.getItem("kittyQuest"));

if(!data) return;

heartsCollected = data.hearts;

xp = data.xp;

score = data.score;

updateHUD();

}

loadGame();

/*==============================
HUD
==============================*/

function updateHUD(){

heartCount.textContent = heartsCollected;

flowerCount.textContent = Math.floor(heartsCollected/2);

starCount.textContent = Math.floor(score/5);

gemCount.textContent = Math.floor(score/10);

coinCount.textContent = score;

xpFill.style.width = xp + "%";

saveGame();

}

/*==============================
BACKGROUND
==============================*/

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.animationDelay=Math.random()*2+"s";

stars.appendChild(s);

}

function createFloating(parent,emoji){

const e=document.createElement("div");

e.className="float";

e.innerHTML=emoji;

e.style.left=Math.random()*100+"%";

e.style.top=Math.random()*100+"%";

e.style.animationDuration=(4+Math.random()*5)+"s";

parent.appendChild(e);

}

for(let i=0;i<20;i++){

createFloating(hearts,"❤️");

createFloating(flowers,"🌸");

createFloating(butterflies,"🦋");

createFloating(sparkles,"✨");

}

setInterval(()=>{

const shoot=document.createElement("div");

shoot.className="shooting-star";

shoot.style.left="-100px";

shoot.style.top=Math.random()*200+"px";

document.body.appendChild(shoot);

setTimeout(()=>{

shoot.remove();

},4000);

},3500);

/*==============================
PARTICLE
==============================*/

function particle(x,y){

const p=document.createElement("div");

p.innerHTML="✨";

p.style.position="fixed";

p.style.left=x+"px";

p.style.top=y+"px";

p.style.pointerEvents="none";

p.style.fontSize="18px";

document.body.appendChild(p);

let py=y;

const timer=setInterval(()=>{

py-=2;

p.style.top=py+"px";

p.style.opacity-=0.03;

},16);

setTimeout(()=>{

clearInterval(timer);

p.remove();

},600);

}

document.addEventListener("click",(e)=>{

particle(e.clientX,e.clientY);

});

/*==============================
HEART CATCH
==============================*/

playGame.onclick=()=>{

gameArea.innerHTML="";

questionSection.style.display="none";

let collected=0;

for(let i=0;i<12;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*90+"%";

heart.style.top=Math.random()*80+"%";

heart.style.cursor="pointer";

heart.style.fontSize="32px";

heart.onclick=()=>{

heart.remove();

collected++;

heartsCollected++;

score+=10;

xp=Math.min(100,xp+5);

updateHUD();

if(collected===12){

alert("You collected every heart!");

questionSection.style.display="block";

}

};

gameArea.appendChild(heart);

}

};

/*==============================
QUESTION
==============================*/

submitAnswer.onclick=()=>{

if(answer.value.trim()==""){

answer.style.borderColor="red";

answer.classList.add("shake");

setTimeout(()=>{

answer.classList.remove("shake");

answer.style.borderColor="#ff75ff";

},400);

return;

}

xp=100;

updateHUD();

questionSection.style.display="none";

ending.style.display="block";

};

/*==============================
RESTART
==============================*/

restart.onclick=()=>{

localStorage.removeItem("kittyQuest");

location.reload();

};

updateHUD();
