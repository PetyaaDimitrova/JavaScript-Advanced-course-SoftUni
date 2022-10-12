

function timeToGo(steps, footprintLength, speed){

    let distance = steps * footprintLength;
    let metersPerHour = speed * 1000;
    let metersPerMinute = metersPerHour / 60;
    let metersPerSecond = metersPerMinute / 60;
   
    let secondsTotal = distance / metersPerSecond + Math.floor(distance/500) * 60;
   
    let seconds = Math.ceil(secondsTotal % 60);
    let minutes = Math.floor(secondsTotal / 60);
    let hours = Math.floor(minutes / 60);

    let formattedSecond = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSecond}`);
}

timeToGo(4000, 0.6, 5);
timeToGo(2564, 0.70, 5.5);