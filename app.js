let userScore = 0;
let compScore = 0;

let users= document.querySelector('#user-score');
let comps= document.querySelector('#comp-score');

let choices = document.querySelectorAll('.choice');
const mesg =document.querySelector('#msg');

const genComputerChoice=()=>
{
    const option=["stone","paper","scissor"];
    const randId=Math.floor(Math.random() * 3);
    return option[randId];

}

const showwinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("you win");
        mesg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        mesg.style.backgroundColor="green";
        userScore=userScore+1;
        users.innerText=userScore;


    }
    else
    {
        console.log("computer win");
        mesg.innerText=`You Loose.  ${compChoice} beats your ${userChoice}`;
        mesg.style.backgroundColor="red";
        compScore=compScore+1;
        comps.innerText=compScore;
    }
}


const playGame=(userChoice)=> {
    console.log("user choice",userChoice)
   const compChoice=genComputerChoice();
   console.log("com choice",compChoice)


   if(userChoice===compChoice)
   {
        console.log("draw");
        mesg.innerText="Game was draw,Play again";
        mesg.style.backgroundColor="#081b31";
   }
   else
   {
   let  userWin=true;
   if(userChoice==="stone")
   {
    userWin = compChoice=="paper"? false:true;

   }
   else if(userChoice==="paper")
   {
    userWin = compChoice==="scissor"? false:true;
   }
   else
   {
        userWin = compChoice==="stone"? false:true;
   }
   showwinner(userWin,userChoice,compChoice);

   }


}


choices.forEach((choice) =>
{
    
    choice.addEventListener('click',() => {
        let userChoice =choice.getAttribute('id');
        console.log(choice);
        playGame(userChoice);
    });
});