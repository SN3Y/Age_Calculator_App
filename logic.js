
/* Variables para los resultados h1*/
const answerYear =document.querySelector('.answer__year');
const answerMonth = document.querySelector('.answer__month');
const answerDay = document.querySelector('.answer__day');
/* botón para mostrar resultados*/
const resultButton = document.querySelector('.result__button');

/* Variables para los inputs*/
const inputDay = document.querySelector('.input__day');
const inputMonth = document.querySelector('.input__month');
const inputYear = document.querySelector('.input__year');

/* Variables para mostrar errores*/
const errorDay = document.querySelector('.error__day');
const errorMonth = document.querySelector('.error__month');
const errorYear = document.querySelector('.error__year');

resultButton.addEventListener('click', ()=>{
    avoidErrorDay()
    avoidErrorMonth()
    avoidErrorYear()

    if (avoidErrorDay()===true && avoidErrorMonth()===true && avoidErrorYear()==true ) {
       
        const mes = inputMonth.value;
        const dia = inputDay.value;
        const año = inputYear.value;

        const currentDate = new Date();
        const date = new Date(`${año}, ${mes}, ${dia}`);
        const birthDate = new Date(date);
        const timeDiff = currentDate - birthDate;
        const years = Math.floor(timeDiff / (1000*60*60*24*365.25)) 
        const remainingTimeDiff = timeDiff % (1000*60*60*24*365.25)
        const months = Math.floor(remainingTimeDiff / (1000*60*60*24*30.44))
        const remainingTimeDiff2 = remainingTimeDiff % (1000*60*60*24*30.44);
        const days = Math.floor(remainingTimeDiff2 / (1000*60*60*24));

        if (years > 0 || days > 0 || months > 0) {
            answerDay.innerHTML= `${days}` +" días";
            answerMonth.innerHTML= `${months}` + " meses";
            answerYear.innerHTML= `${years}` + " años";
        }
    }else{
        return
    }   
    
})

function avoidErrorDay() {
    const day = inputDay.value;
    const dayInt = parseInt(day);
   if (dayInt === 0 || dayInt > 31) {
        errorActiveDay()
        return false
    }else if(day === '' || !Number.isInteger(dayInt)){
        errorActiveDay()
        return false
    }else{
        errorDisableDay()
        return true
    }
}
function avoidErrorMonth() {
    const month = inputMonth.value;
    const monthInt = parseInt(month);
   if (monthInt === 0 || monthInt > 12) {
        errorActiveMonth()
        return false
    }else if(month === '' || !Number.isInteger(monthInt)){
        errorActiveMonth()
        return false
    }else{
        errorDisableMonth()
        return true
    }
}
function avoidErrorYear() {
    const year = inputYear.value;
    const yearInt = parseInt(year);
    const año = new Date();
    const añoInt = año.getFullYear();
   if (yearInt === 0) {
        errorActiveYear()
        return false  
    }else if(year === '' || year < 1000){
        errorActiveYear()
        return false
    }else if(yearInt > añoInt){
        errorActiveYear()
        return false
    }else{
        errorDisableyear()
        return true
    }
}

/* funciones de error --show */
function errorActiveDay() {
    errorDay.classList.remove('error__day')
    errorDay.classList.add('error__day--show')
}
function errorDisableDay() {
    errorDay.classList.remove('error__day--show')
    errorDay.classList.add('error__day')
}
function errorActiveMonth() {
    errorMonth.classList.remove('error__month')
    errorMonth.classList.add('error__month--show')
}
function errorDisableMonth() {
    errorMonth.classList.remove('error__month--show')
    errorMonth.classList.add('error__month')
}
function errorActiveYear() {
    errorYear.classList.remove('error__year')
    errorYear.classList.add('error__year--show')
}
function errorDisableyear() {
    errorYear.classList.remove('error__year--show')
    errorYear.classList.add('error__year')
}