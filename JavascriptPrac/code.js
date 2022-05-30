// // console.log(23+97)

// // console.log(10 + 2 + 4 + 3 + 8 + 5)

// // console.log((4 + 6 + 9) / 77)

// // let a = 10

// // console.log(a)

// // 9 * a

// // // let b = 7 * a
// // // console.log(b)

// // const max = 57
// // let actual = max - 13
// // let percentage = actual/max

// function add7(num){
//     return num + 7
// }

// function multiply(num1, num2){
//     return num1 * num2
// }

function capitalize(str){
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
}

// function lastLetter(str){
//     return str.slice(-1)
// }

function computerMove(){
    let arr = ["Rock", "Paper", "Scissors"]
    return arr[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection)
    computerSelection = capitalize(computerSelection)
    if (playerSelection == computerSelection){
        console.log("It was a tie!")
        return "Tie"
    }
    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            console.log("You lose! Paper beats Rock!")
            return false
        }
        else if (computerSelection == "Scissors"){
            console.log("You won! Rock beats Scissors!")
            return true
        }
    }
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissors"){
            console.log("You lose! Scissors beats Paper!")
            return false
        }
        else if (computerSelection == "Rock"){
            console.log("You won! Paper beats Rock!")
            return true
        }
    }
    else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            console.log("You lose! Rock beats Scissors!")
            return false
        }
        else if (computerSelection == "Paper"){
            console.log("You won! Scissors beats Paper!")
            return true
        }
    }
}

function game(){
    p1Points = 0
    c1Points = 0
    while (p1Points < 5 && c1Points < 5){
        let x = window.prompt("Rock Paper or Scissors?");
        let result = playRound(x, computerMove())
        if (result == true){
            p1Points ++
        }
        else if (result == false){
            c1Points ++
        }
        console.log("Player: " + p1Points)
        console.log("Computer: " + c1Points)
    }
    if (p1Points < c1Points){
        console.log("The Compuer has won!")
    }
    else{
        console.log("The Player has won!")
    }
}

game()