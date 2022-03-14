const result = document.querySelector(".result");
const resultSpan = document.querySelector(".result span");

const btnSubmit = document.querySelector("form");

btnSubmit.addEventListener("submit", (e) =>{
    e.preventDefault();
    const day = document.querySelector("#day").value; 
    const month = document.querySelector("#month").value; 
    const year = document.querySelector("#year").value; 

    let date = new Date();

    let currentDay = date.getDate();
    let currentMonth = (date.getMonth())+1;
    let currentYear = date.getFullYear();

    const months = [31,28,31,30,31,30,31,31,30,31,30,31];

    console.log(currentDay,currentMonth,currentYear)
    console.log(day,month,year)

    if(day > currentDay){
        currentDay = currentDay + months[currentMonth];
        currentMonth = currentMonth - 1;
    }

    if(month > currentMonth){
        currentMonth = currentMonth +12;
        currentYear = currentYear -1;
    }

    result.style.display = "block";
    resultSpan.textContent = `${currentYear-year}years ${currentMonth-month}months ${currentDay-day}days`;
})

