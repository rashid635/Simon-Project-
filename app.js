let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');



  
 
  
  


document.addEventListener("keypress",function(){
  if(started == false)
  {
   console.log("Game Started") ;
   started = true;
   levelUp();
  }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
  btn.classList.remove("flash");
},1000);
  }
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
  btn.classList.remove("userflash");
},1000);
  }



function levelUp() {
  userSeq =[];
  level++;
  h2.innerText = `level ${level}`;
   let randIdx =Math.floor(Math.random()*3);
   let randcolor = btns[randIdx];
   gameSeq.push(randcolor);
   console.log(gameSeq);
   let btn = document.querySelector(`.${randcolor}`);
   gameFlash(btn);
   

}
function checkAns(idx){
  //let idx = level - 1;
  if(userSeq[idx] === gameSeq[idx])
  {
    if(userSeq.length == gameSeq.length)
    {
     setTimeout (levelUp ,1000);
    }
  }
  else{
    h2.innerHTML =`Game over ! Your Score was : <b> ${level}</b><br> Press Any Key to Start`;
    document.querySelector('body').style.backgroundColor ="red";
    setTimeout(function(){ document.querySelector('body').style.backgroundColor ="white";},300);
    rest();
  }
}
function btnPress(){
 let btn = this;
 userFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
 checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function rest(){
  started =false;
  userSeq = [];
  gameSeq = [];
  level =0;

}