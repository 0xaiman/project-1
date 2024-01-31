const halvingDate  = new Date('2024-04-23T18:45:00Z')//halvingdate
let currentDate = new Date()

const durationDays = halvingDate  - currentDate;
let time = durationDays ;

console.log(time)

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown,1000)

function updateCountdown(){

    let days = Math.floor((time/(60*60*24*1000)));
    let hours = Math.floor((time%(60*60*24))/(60*60));
    let minutes = Math.floor((time%(60*60))/60);
    let seconds = Math.floor(time%60);

    hours= hours<10 ? '0'+ hours : hours
    minutes= minutes<10 ? '0'+ minutes : minutes
    seconds= seconds<10 ? '0'+ seconds : seconds


    countdownEl.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
    time--
}