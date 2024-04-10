function generatePass(length, hasLower, hasUpper, hasNum,hasSym){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "1234567890"
    const symbolsChars = "!@#$%&?/|+=-"

    let allowedChars = ""
    let password = ""

    allowedChars += hasLower ? lowerCaseChars : ""
    allowedChars += hasUpper ? upperCaseChars : ""
    allowedChars += hasNum ? numberChars : ""
    allowedChars += hasSym ? symbolsChars : ""

    if(length <= 0){
        return `password should be at least 1`
    }
    if(allowedChars.length === 0){
        return `passwords cant be empty`
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length) 
        password += allowedChars[randomIndex]
    }

    return password
}


const passLength = 12

const includeLowerCase = true

const includeUpperCase = true

const includeNumbers = true

const includeSymbols = true

const pass = generatePass(passLength,
                            includeLowerCase,
                            includeUpperCase,
                            includeNumbers,
                            includeSymbols)

console.log(`Generated pass : ${pass}`)