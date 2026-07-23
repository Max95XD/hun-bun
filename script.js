// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 1000);

    }, 1800);
});

// ===============================
// Start Button
// ===============================

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {

    startScreen.style.opacity = "0";

    setTimeout(() => {

        startScreen.style.display = "none";

        mainContent.style.display = "block";

        mainContent.animate([
            {
                opacity:0,
                transform:"translateY(60px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:900,
            easing:"ease-out"
        });

    },700);

});

// ===============================
// Reveal Answers
// ===============================

function toggleAnswer(id){

    const answer=document.getElementById("answer"+id);

    if(answer.style.display==="block"){

        answer.style.display="none";

    }else{

        answer.style.display="block";

    }

}

// ===============================
// Shooting Stars
// ===============================

const stars=document.getElementById("stars");

function shootingStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.animationDuration=(Math.random()*2+2)+"s";

    stars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4500);

}

setInterval(shootingStar,700);

// ===============================
// Floating Hearts
// ===============================

const hearts=document.getElementById("hearts");

const heartEmoji=[
"💖",
"💕",
"💗",
"💜",
"❤️"
];

function makeHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=heartEmoji[Math.floor(Math.random()*heartEmoji.length)];

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(Math.random()*18+18)+"px";

    heart.style.animationDuration=(Math.random()*5+6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(makeHeart,500);

// ===============================
// Falling Sakura Petals
// ===============================

const petals=document.getElementById("petals");

function makePetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"%";

    petal.style.fontSize=(Math.random()*12+16)+"px";

    petal.style.animationDuration=(Math.random()*6+7)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(makePetal,700);

// ===============================
// Twinkling Stars
// ===============================

function sparkle(){

    const dot=document.createElement("div");

    dot.style.position="fixed";

    dot.style.left=Math.random()*window.innerWidth+"px";

    dot.style.top=Math.random()*window.innerHeight+"px";

    dot.style.width="3px";

    dot.style.height="3px";

    dot.style.background="white";

    dot.style.borderRadius="50%";

    dot.style.boxShadow="0 0 15px white";

    dot.style.opacity="0";

    dot.style.pointerEvents="none";

    dot.style.transition="1s";

    document.body.appendChild(dot);

    setTimeout(()=>{

        dot.style.opacity="1";

    },30);

    setTimeout(()=>{

        dot.style.opacity="0";

    },1000);

    setTimeout(()=>{

        dot.remove();

    },2000);

}

setInterval(sparkle,250);

// ===============================
// Optional Music Button
// ===============================

// Uncomment if you add music.mp3

/*
const music=new Audio("music.mp3");

music.loop=true;

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵 Music";

musicBtn.style.position="fixed";
musicBtn.style.top="20px";
musicBtn.style.right="20px";
musicBtn.style.zIndex="999";

document.body.appendChild(musicBtn);

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause";

}else{

music.pause();

musicBtn.innerHTML="🎵 Music";

}

playing=!playing;

}
*/
