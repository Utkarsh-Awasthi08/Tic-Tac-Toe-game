let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let turnO=true;
let msgDiv=document.querySelector(".msg");
let msg=document.querySelector("#winner");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const gameEnd=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const gameStart=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        c=0;
    }
};
const resetGame=()=>{
    turnO=true;
    gameStart();
    msgDiv.classList.add("hide");
};
let c=0;
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        c++;
        if(turnO)
        {
            box.innerText="X";
            turnO=false;
        }
        else
        {
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        let draw=checkWinner();
        if(c===9 && draw===false)
        {
            msg.innerText="It's a Draw !";
            msgDiv.classList.remove("hide");
        }
    })
});
const dispWinner=(winner)=>{
        msg.innerText=`Congratulations, winner is ${winner} !`;
        msgDiv.classList.remove("hide");
        gameEnd();
};
const checkWinner=()=>{
    let flag=false;
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                flag=true;
                dispWinner(pos1);
            } 
        }
    }
    return flag;
};
reset.addEventListener("click",resetGame);
