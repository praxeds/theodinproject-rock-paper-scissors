const gameOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex]

    return item
}

