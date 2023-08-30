let  gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let highScore =0;
let h3=document.querySelector("h3");
let p = document.querySelector("p");
let h2= document.querySelector("h2");
let btns=["yellow","red","purple","green"];
// let =document.querySelectorAll("button");


document.addEventListener("keypress", function (){
    if(started==false){
    console.log("game started");
    started=true;
    } 
   levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`leve ${level}`;

    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    btnFlash(randBtn);

};

function checkAns(idx) {
   
   if(userSeq[idx] === gameSeq[idx]){
    // console.log("same valude");
    if(userSeq.length==gameSeq.length) {
        setTimeout(levelUp,1000)
    }
   } else{
    h2.innerHTML=`Game over! Your Score was<b> ${level}<b><br> Press any key to start the game`;
    document.querySelector("body").style.backgroundColor="red";
    
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
    
    },150);
    if(level>highScore){
       
        h3.innerHTML=`Your High Score was <b>${level}<b>`
    }
    reset();
   }
}
function reset() {
    started=false;
    gameSeq= [];
    userSeq=[];
    level=0;
}
function btnPress() {
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns  = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

