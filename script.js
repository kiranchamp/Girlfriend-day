window.onload=()=>{

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},1800);

};

function scrollToSection(){

document.querySelector("#story").scrollIntoView({

behavior:"smooth"

});

}

const music=document.getElementById("music");

const btn=document.getElementById("musicBtn");

let play=false;

btn.onclick=()=>{

if(!play){

music.play();

btn.innerHTML="⏸";

play=true;

}

else{

music.pause();

btn.innerHTML="🎵";

play=false;

}

};

const startDate=new Date("2023-01-01");

const today=new Date();

const diff=today-startDate;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("days").innerHTML=days+" Days ❤️";

const text=

`My Love,

Happy Girlfriend Day ❤️

Thank you for making my world brighter.

Thank you for believing in me.

Thank you for loving me.

Every day with you feels magical.

No matter what happens,

I promise to choose you,

today,

tomorrow,

and forever.

I Love You ❤️`;

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

const list=document.getElementById("reasonList");

for(let i=1;i<=100;i++){

const li=document.createElement("li");

li.innerHTML=i+". Because you make my life beautiful ❤️";

list.appendChild(li);

}

function heart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*30)+"px";

document.querySelector(".hearts").appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(heart,250);

document.addEventListener("mousemove",(e)=>{

const dot=document.createElement("div");

dot.className="heart";

dot.innerHTML="❤";

dot.style.left=e.pageX+"px";

dot.style.top=e.pageY+"px";

dot.style.fontSize="12px";

document.querySelector(".hearts").appendChild(dot);

setTimeout(()=>{

dot.remove();

},1200);

});
