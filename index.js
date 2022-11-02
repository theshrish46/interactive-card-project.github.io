const cardName = document.getElementById('name')
const cardNumber = document.getElementById('number')
const month = document.getElementById('date-m')
const year = document.getElementById('date-y')
const cvcNumber = document.getElementById('cvc')


const frontPage = document.querySelector('.form-sec')
const resultPage = document.querySelector('.thank')

resultPage.style.display = 'none'


const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function(){
    if(cardName.textContent != " " || cardNumber.textContent != " " || month.textContent != " " || year.textContent != " " || cvcNumber.textContent != " "){
        frontPage.style.display = 'none'
        resultPage.style.display = 'block'
        
    }
})