const button = document.getElementById("rng_button")
const label = document.getElementById("label")
const min = 1
const max = 100
let result 

button.onclick = function(){
    result = Math.floor(Math.random() * max) + min
    label.textContent = result
}