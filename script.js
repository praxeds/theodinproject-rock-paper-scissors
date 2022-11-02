const gameOptions = [
    {
        'type': 'rock',
        'losesTo': 'paper'
    },
    {
        'type': 'paper',
        'losesTo': 'scissors'
    },
    {
        'type': 'scissors',
        'losesTo': 'rock'
    }
]

//!Buttons Specificities
var playerSelection
document.getElementById('rock').addEventListener('click', function(){
    playerSelection = gameOptions[0]
    console.log(playerSelection.type)
})

document.getElementById('paper').addEventListener('click', function(){
    playerSelection = gameOptions[1]
    console.log(playerSelection.type)
})

document.getElementById('scissors').addEventListener('click', function(){
    playerSelection = gameOptions[2]
    console.log(playerSelection.type)
})

//!Starting a round
var computerSelection
const gameButtons = document.querySelectorAll('button')

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length)
    computerSelection = gameOptions[randomIndex].type
    console.log(computerSelection)
}

for (let i = 0; i < gameButtons.length; i++) {
    let button = gameButtons[i]

    button.addEventListener('click', function() {
        getComputerChoice()

        if (playerSelection.type === computerSelection) {
            console.log('%cdraw huhu', 'color: dodgerblue; font-size: 50px')
        } else if (playerSelection.losesTo === computerSelection) {
            console.log('%cyou lose :(', 'color: red; font-size: 50px; font-weight: bold')
        } else {
            console.log('%cyou win! whoop whoop', 'color: green; font-size: 50px; font-weight: bold')
        }
    })
  }

