const checkBox = document.getElementById("checkBox")
const visaBTN = document.getElementById("visaBTN")
const mastaBTN = document.getElementById("mastaBTN")
const paypalBTN = document.getElementById("paypalBTN")
const submitBTN = document.getElementById("submitBTN")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

submitBTN.onclick = function(){
    if(checkBox.checked){
        subResult.textContent = `You are Subscribed !`
    }
    else {
        subResult.textContent = `You are not Subscribed !`
    }

    if(visaBTN.checked){
        paymentResult.textContent = `You are paying with Visa !`
    }
    else if(mastaBTN.checked){
        paymentResult.textContent = `You are paying with MasterCard !`
    }
    else if(paypalBTN.checked){
        paymentResult.textContent = `You are paying with PayPal !`
    }
    else{
        paymentResult.textContent = `You did not select a payment option !`
    }
}


