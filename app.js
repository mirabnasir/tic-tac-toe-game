let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-game");
let newgameButton=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true;//playerX , //playerO

const winPattern=[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 5, 6],
[3, 4, 5],
[6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      
       if(turnO ===true)
       {
        box.innerText="O";
        turnO=false;
       }
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
     checkWinner();
    });
});
const resetGame=()=>{
  turn=true;
  enableButtons();
  msgContainer.classList.add("hide");
};
const disableButtons=()=>
{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableButtons=()=>
{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner) =>{
  msg.innerText="Congratulations , Winner is "+ winner;
  msgContainer.classList.remove("hide");
  disableButtons();
};
const checkWinner =()=>{
  for( let pattern of winPattern)
  {
 let posval1= boxes[pattern[0]].innerText;
 let posval2= boxes[pattern[1]].innerText;
 let posval3= boxes[pattern[2]].innerText;
 if(posval1 != "" && posval2 !="" && posval3 !="" )
 {
  if(posval1===posval2 && posval2===posval3){
    showWinner(posval1);
  }
 }
  }
};
newgameButton.addEventListener("click" ,resetGame);
resetbtn.addEventListener("click" ,resetGame);