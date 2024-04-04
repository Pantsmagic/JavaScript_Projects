const maxNum = 100
const minNum = 1
const rngNum = Math.floor(Math.random() * maxNum + minNum )

let attempts = 0
let guess
let running = true

while(running) {

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`)

    guess = Number(guess)
    if(isNaN(guess)){
       window.alert(`NOT A NUMBER TRY AGAIN`) 
    }
    else if(guess > maxNum || guess < minNum){
       window.alert(`NOT IN THE GIVEN RANGE TRY AGAIN`) 

    }
    else {
        attempts++
        if(guess < rngNum){
            window.alert(`GIVEN NUMBER IS SMALLER THAN SEARCHED NUMBER`) 

        }
        else if(guess > rngNum) {
            window.alert(`GIVEN NUMBER IS BIGGER THAN SEARCHED NUMBER`)
        }
        else {
            window.alert(`Congrats YOU FOUND THE CORRECT NUMBER: ${rngNum} IN ${attempts} ATTEMPTS`)
            running = false
        }
    }
    
}