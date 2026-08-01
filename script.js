function nextPage(page){

document.querySelectorAll(".page").forEach(function(section){
section.classList.remove("active");
});

document.getElementById("page"+page).classList.add("active");

if(page===5){
celebrate();
}

}

function celebrate(){

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-30px";
heart.style.fontSize=(18+Math.random()*25)+"px";
heart.style.zIndex="9999";
heart.style.pointerEvents="none";

document.body.appendChild(heart);

let fall=setInterval(()=>{

heart.style.top=(heart.offsetTop+5)+"px";

if(heart.offsetTop>window.innerHeight){

heart.remove();

clearInterval(fall);

}

},20);

}

}
