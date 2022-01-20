const readline = require("readline")

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const collatz = num => ( num % 2 == 0) ? num / 2 : num * 3 + 1

readlineInterface.question("Collatz conjecture!Please enter a positive integer to calculate number of steps\n", function(answer){
    let number = parseInt(answer)
    let counter = 1

    while (number !== 1){
        number = collatz(number)
        counter++
    }
    console.log(`no:${answer} takes ${counter} steps`)
    readlineInterface.close()
})