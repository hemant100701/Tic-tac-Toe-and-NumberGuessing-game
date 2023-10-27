let randomNumber = parseInt(Math.random()*100+1);
//console.log(randomNumber);
const form = document.querySelector("#form");
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const prevGuess = document.querySelector("#prevGuess");
const resultPara = document.querySelector("#resultPara");
const remaining = document.querySelector(".remaining"); 
const guessSlot = document.querySelector(".guessSlot");
const lowOrhi = document.querySelector(".lowOrhi");
const newGame = document.querySelector(".newGame");

let guessHist = [];
let play = true;
let p = document.createElement('p'); 
let guessNum = 1;

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(play)
    {

        const guess = parseInt(userInput.value);
        validate(guess);
    }
})


function validate(guess)
{
    if(isNaN(guess))
    {
        alert(`Please Enter a Valid Number`)
    }
    else if(guess<1)
    {
        alert(`Please Enter a Number more than 1`)
    }
    else if(guess>100)
    {
        alert(`Please Enter a Number less than 100`)
    }
    else{
        if(guessNum === 11)
        {
            guessHist.push(guess);
            displayMessage(`GameOver!,The random number is ${randomNumber}`);
            endGame();
        }
        else{
            guessHist.push(guess);
            checkNumber(guess);
        }
    }
}
function checkNumber(guess)
{
    if(guess<randomNumber)
    {
        displayMessage(`Guessed Number is TOO Low`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Guessed Number is TOO High`);
    }
    else{
        displayMessage(`Guessed Number is Correct! You Won`);
        endGame();
    }
}

function displayMessage(message)
{
    userInput.value = '';
    guessSlot.innerHTML = `${guessHist}`;
    remaining.innerHTML = `${10-guessNum}`;
    guessNum+=1;
    lowOrhi.innerHTML = `${message}`;

}

function endGame()
{
    guessHist = [];
    guessNum=1;
    guessSlot.innerHTML = `${guessHist}`;
    remaining.innerHTML = `${10}`;
    userInput.setAttribute('disabled','');
    play = false;
    newGame.innerHTML = '<h2>StartOver! , NewGame</h2>'

}
newGame.addEventListener('click',function(e){
    newGame.innerHTML = ``;
    play = true;
    userInput.removeAttribute('disabled');
    randomNumber = parseInt(Math.random()*100+1);
    lowOrhi.innerHTML = ``;
})


