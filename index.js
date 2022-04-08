const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

function setDate(){
    let now = new Date();
    let seconds = now.getSeconds()

    
    let handDegrees = (seconds / 60) *360 + 90
    secondHand.style.transform = `rotate(${handDegrees}deg)`

    let minutes = now.getMinutes()
    let minuteDegrees = (minutes / 60) *360 + 90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    let hours = now.getHours()
    let hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(handDegrees)
    if(hours < 10){
        hours = "0"+hours
    }else if(minutes < 10){
        minutes = "0"+minutes
    }else if(seconds < 10){
        seconds = "0"+seconds
    }
    document.querySelector(".digital").innerText = hours +":"+ minutes +":"+ seconds
    if (handDegrees === 444){
        secondHand.style.transition = `0`
    }
    
   
}



setInterval(setDate, 1000);



