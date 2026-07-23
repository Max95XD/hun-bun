// =========================
// Show / Hide Answer
// =========================

function toggleAnswer(number){

    const answer = document.getElementById("answer"+number);

    if(answer.style.display === "block"){

        answer.style.display = "none";

    }else{

        answer.style.display = "block";

    }

}


// =========================
// Falling Shooting Stars
// =========================

const stars = document.getElementById("stars");

function createStar(){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*window.innerWidth+"px";

    star.style.top = "-150px";

    star.style.animationDuration = (Math.random()*2+2)+"s";

    star.style.opacity = Math.random();

    stars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },5000);

}

setInterval(createStar,700);


// =========================
// Floating Hearts
// =========================

const hearts = document.getElementById("hearts");

const emojis=["💖","💕","💗","💜","✨"];

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(Math.random()*20+15)+"px";

    heart.style.animationDuration=(Math.random()*5+6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,500);


// =========================
// Twinkling Background Stars
// =========================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.style.position="fixed";

    sparkle.style.width="3px";

    sparkle.style.height="3px";

    sparkle.style.borderRadius="50%";

    sparkle.style.background="white";

    sparkle.style.left=Math.random()*window.innerWidth+"px";

    sparkle.style.top=Math.random()*window.innerHeight+"px";

    sparkle.style.boxShadow="0 0 15px white";

    sparkle.style.opacity="0";

    sparkle.style.pointerEvents="none";

    sparkle.style.transition="1s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity="1";

    },50);

    setTimeout(()=>{

        sparkle.style.opacity="0";

    },1000);

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(createSparkle,300);


// =========================
// Welcome Animation
// =========================

window.onload=()=>{

    document.querySelector(".container").animate([

        {opacity:0,transform:"translateY(80px)"},

        {opacity:1,transform:"translateY(0px)"}

    ],{

        duration:1200,

        easing:"ease-out"

    });

};
