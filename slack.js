const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const date = new Date()
const day = date.getDay()
const currentDay = weekDays[day]

const dayEl = document.querySelector("h2")
const timeEl = document.querySelector("p")

dayEl.innerHTML = currentDay

function displayDateTime(){

        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds =  date.getUTCSeconds(); 
        const milliseconds = date.getUTCMilliseconds();
        timeEl.textContent = `${hours}:${minutes}:${seconds}: ${milliseconds}`
    }
    
    window.onload = displayDateTime
    
    setInterval(displayDateTime, 1000)