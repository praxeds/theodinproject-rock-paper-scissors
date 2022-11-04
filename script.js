const gameOptions = [
    {
        'type': 'rock',
        'losesTo': 'paper',
        'emoji': '🪨'
    },
    {
        'type': 'paper',
        'losesTo': 'scissors',
        'emoji': '📄'
    },
    {
        'type': 'scissors',
        'losesTo': 'rock',
        'emoji': '✂️'
    }
]

//!Buttons Specificities
var playerSelection

const rockEl = document.querySelectorAll('.rock')
for (let i = 0; i < rockEl.length; i++) {
    let button = rockEl[i]
    button.addEventListener('click', function () {
        playerSelection = gameOptions[0]
        console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
    })
}

const paperEl = document.querySelectorAll('.paper')
for (let i = 0; i < paperEl.length; i++) {
    let button = paperEl[i]
    button.addEventListener('click', function () {
        playerSelection = gameOptions[1]
        console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
    })
}


const scissorsEl = document.querySelectorAll('.scissors')
for (let i = 0; i < scissorsEl.length; i++) {
    let button = scissorsEl[i]
    button.addEventListener('click', function () {
        playerSelection = gameOptions[2]
        console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
    })
}




//!Starting a round
var computerSelection
const gameButtons = document.querySelectorAll('.gameButton')

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length)
    computerSelection = gameOptions[randomIndex].type
    const consoleEmoji = gameOptions[randomIndex].emoji
    console.log('Computer chose: ' + computerSelection + consoleEmoji)
}

function disappearFunction() {
    document.getElementById('chooseOneBtn').classList.add('noDisplay')
}

function reappearFunction() {
    document.getElementById('restartGameBtn').classList.remove('noDisplay')
}

var computerScoreEl = document.getElementById('computerScore')
var userScoreEl = document.getElementById('userScore')

let userScore = 0
let computerScore = 0

for (let i = 0; i < gameButtons.length; i++) {
    let button = gameButtons[i]

    button.addEventListener('click', function () {
        getComputerChoice()
        disappearFunction()
        reappearFunction()

        if (playerSelection.type === computerSelection) {
            console.log('%cdraw huhu', 'color: #4399dd; font-size: 25px')
        } else if (playerSelection.losesTo === computerSelection) {
            console.log('%cyou lose 😔', 'color: #e44535; font-size: 25px; font-weight: bold')

            computerScore += 1
            computerScoreEl.innerText = computerScore

        } else {
            console.log('%cyou win! whoop whoop', 'color: #6eb179; font-size: 25px; font-weight: bold')
            userScore += 1
            userScoreEl.innerText = userScore
        }
    })
}