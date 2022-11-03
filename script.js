const gameOptions = [
    {
        'type': 'rock',
        'losesTo': 'paper',
        'emoji' : '🪨'
    },
    {
        'type': 'paper',
        'losesTo': 'scissors',
        'emoji' : '📄'
    },
    {
        'type': 'scissors',
        'losesTo': 'rock',
        'emoji' : '✂️'
    }
]

//!Buttons Specificities
var playerSelection
document.getElementById('rock').addEventListener('click', function(){
    playerSelection = gameOptions[0]
    console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
})

document.getElementById('paper').addEventListener('click', function(){
    playerSelection = gameOptions[1]
    console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
})

document.getElementById('scissors').addEventListener('click', function(){
    playerSelection = gameOptions[2]
    console.log('You chose: ' + playerSelection.type + playerSelection.emoji)
})

//!Starting a round
var computerSelection
const gameButtons = document.querySelectorAll('.gameButton')

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length)
    computerSelection = gameOptions[randomIndex].type
    const consoleEmoji = gameOptions[randomIndex].emoji
    console.log('Computer chose: ' + computerSelection + consoleEmoji)
}

function disappearSpan() {
    document.getElementById('chooseOneSpan').classList.add('noDisplay')
}

for (let i = 0; i < gameButtons.length; i++) {
    let button = gameButtons[i]

    button.addEventListener('click', function() {
        getComputerChoice()
        disappearSpan()

        if (playerSelection.type === computerSelection) {
            console.log('%cdraw huhu',  'color: #4399dd; font-size: 25px')
        } else if (playerSelection.losesTo === computerSelection) {
            console.log('%cyou lose :(', 'color: #e44535; font-size: 25px; font-weight: bold')
        } else {
            console.log('%cyou win! whoop whoop', 'color: #6eb179; font-size: 25px; font-weight: bold')
        }
    })
  }

