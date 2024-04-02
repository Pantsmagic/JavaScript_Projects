/** 
console.log(`hello`);
console.log(`I like Pizza`);

window.alert(`this is a alert`);
window.alert(`I like Pizza`);


document.getElementById("h1").textContent = `hello`;
document.getElementById("p1").textContent = `I like Pizza`;

let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName = `Daniel`

let online = true

console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(typeof price);
console.log(firstName)
console.log(`are you online ? = ${online}`);


let fullName = `Daniel Ritscher`
let age = 23
let isStudent = true

document.getElementById(`p1`).textContent = fullName
document.getElementById(`p2`).textContent = age
document.getElementById(`p3`).textContent = isStudent


let username

username = window.prompt("what is your username?")
console.log(username)


let username

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById(`myText`).value
    console.log(username)
    document.getElementById(`myH1`).textContent = `Hello ${username}`
}
*/

const PI = 3.14159
let radius
let circumference

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("myH3").textContent = circumference
}
