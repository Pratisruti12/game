let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
const genCompChoice =() => {
    const options= ["rock", "paper", "scissor"];
   const ranIdx =Math.floor(Math.random()*3);
   return options[ranIdx];
    // rock,paper,scissor

};

const drawGame = ()=> {
    console.log("game was draw");
    msg.innerText= "game was draw";
};
const showWinner =(userWin ,userChoice,compChoice)=> {
    if(userWin){
        userscore++;
        userscorePara.innerText= userscore;
        console.log("you win");
        msg.innerText= "you win";
        
        
    }else{
        compscore++;
        compscorePara.innerText= compscore;
        console.log("you lose");
        msg.innerText= "you lose";
       

    }
}

const playgame=(userchoice)=>{
    console.log("user choice=", userchoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if(userchoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin =true;
        if(userchoice=== "rock"){
            //scissor,paper
           userWin= compChoice=== "paper"?false :true;
        } else if(userchoice=== "paper"){
            //rock,scissor
           userWin= compChoice=== "scissor" ?false : true;
        }else {
            //rock,paper
            userWin=compChoice=== "rock"? false: true;
        
        }
        showWinner(userWin, userchoice, compChoice);

    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id")
       
        playgame(userChoice);

    });
});