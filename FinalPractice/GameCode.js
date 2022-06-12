const Playerimgs = document.querySelectorAll('.container .PMoves .images>img');
console.log(Playerimgs);

const Compimgs = document.querySelectorAll('.container .CMoves .images>img');

PlayerScore = document.querySelector('.Pscore');
CompScore = document.querySelector('.Cscore');
const comment = document.querySelector('.comment');

const button = document.querySelector('button')

heading = document.querySelector('.Title')

let arr = [0, 1, 2];
function RandomChoice(){
    return arr[Math.floor(Math.random()*3)]
}

function removeTransition(e){
    if (e.propertyName !== 'transform'){
      return;
    }
    this.classList.remove('playing')
    console.log(e.propertyName);
    console.log(e)
}

function Reset(){
    Playerimgs[0].classList.remove('playing')
    Playerimgs[1].classList.remove('playing')
    Playerimgs[2].classList.remove('playing')

    Compimgs[0].classList.remove('playing')
    Compimgs[1].classList.remove('playing')
    Compimgs[2].classList.remove('playing')
    CompScore.textContent = 0
    PlayerScore.textContent = 0
    heading.textContent = 'Rock Paper Scissors'
    console.log('reset')
}


function logText(e){
    if (CompScore.textContent == 5){
        heading.textContent = "You died!\nPress Reset to restart"
        console.log("Lost")
        return false
    }
    else if (PlayerScore.textContent == 5){
        heading.textContent = "You won!\nPress Reset to Lose or Win again"
        console.log("Won")
        return true
    }
    Playerimgs[0].classList.remove('playing')
    Playerimgs[1].classList.remove('playing')
    Playerimgs[2].classList.remove('playing')

    Compimgs[0].classList.remove('playing')
    Compimgs[1].classList.remove('playing')
    Compimgs[2].classList.remove('playing')

    let playerSelection = this.classList.value
    this.classList.add('playing')
    playerSelection = playerSelection.split(' ')[0]
    // console.log(playerSelection)
    let x = RandomChoice()

    let computerSelection = Compimgs[x].classList.value;
    Compimgs[x].classList.add('playing')
    computerSelection = computerSelection.split(' ')[0]
    // console.log(computerSelection)

    if (playerSelection === "PRock"){
        if (computerSelection === "CPaper"){
            comment.textContent = "You lost!";
            CompScore.textContent = parseInt(CompScore.textContent) + 1;
        }
        else if (computerSelection === "CScissors"){
            comment.textContent = "You won!";
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;
        }
        else{
            comment.textContent = "Tie!";
        }
    }
    else if (playerSelection === "PPaper"){
        if (computerSelection === "CScissors"){
            comment.textContent = "You lost!";
            CompScore.textContent = parseInt(CompScore.textContent) + 1;
        }
        else if (computerSelection === "CRock"){
            comment.textContent = "You won!";
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;
        }
        else{
            comment.textContent = "Tie!";
        }
    }
    else if (playerSelection === "PScissors"){
        if (computerSelection === "CRock"){
            comment.textContent = "You lost!";
            CompScore.textContent = parseInt(CompScore.textContent) + 1;
        }
        else if (computerSelection === "CPaper"){
            comment.textContent = "You won!"
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;
        }
        else{
            comment.textContent = "Tie!";
        }
    }
}

function playRound(){
    Playerimgs.forEach(move => move.addEventListener("click", logText));
    button.addEventListener('click', Reset);
}

console.log(playRound())