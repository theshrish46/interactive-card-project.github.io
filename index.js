const continueButton = document.GetElementById('subbtn')
const cardHolderName = document.GetElementById('name')
const cardNumber = document.GetElementById('number')
const month = document.GetElementById('date-m')
const year = document.GetElementById('date-y')
const cvc = document.GetElementById('cvc')


const surveyPage = document.getElementsByClassName('form-sec')
const thankyouPage = document.getElementsByClassName('thank')


continueButton.addEventListener('click', function () {
    alert("hai")
    
    if(cardHolderName.innerHTML == " "){
        alert("empty")
    }
    else{
        alert("not empty")
    }
})

