let userScore = 0;
let compScore = 0;

const choice =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generating computer choice-> Modular way
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

//functions for draw game
const drawGame = ()=>{
   
    msg.innerText = "Game was Draw .Play again";
    msg.style.backgroundColor= "#081b31";
};

// functions for user win
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
       compScorePara.innerText =compScore;
        
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor= "Red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //calling comuter choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

// calling functions for draw match
    if(userChoice == compChoice){
    drawGame();
}
else{
let userWin = true;
if(userChoice==="rock"){
    // comp have reamaining SCISSORS,PAPER
    userWin =compChoice ==="paper" ? false :true;
}
else if (userChoice ==="paper"){
    //comp = ROCK SCISSORS
    userWin =compChoice === "rock" ?true : false;
}
else{
    // user = scissors
    // comp =rock and paper
    userWin = compChoice ==="rock"?false : true;
}
//calling the userwin function
showWinner(userWin ,compChoice,userChoice);
}
};
choice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");//This is for user choice what they are selecting rock,paper,scissors.
        playGame(userChoice);
    });

});