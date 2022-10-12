function message(speed, area){
let limitSpeed = 0;
let zone = 0;
if(area == 'motorway'){
    limitSpeed = 130;
    zone = 130;
} else if(area == 'interstate'){
    limitSpeed = 90;
    zone = 90;
}else if(area == 'city'){
    limitSpeed = 50;
    zone = 50;
}else if(area == 'residential'){
    limitSpeed = 20;
    zone = 20;
}
if(speed <= zone){
    console.log(`Driving ${speed} km/h in a ${zone} zone`);
} else {
    let difference = speed - zone;
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zone} -`);
    

        if(difference <=20){
            console.log('speeding');
        } else if(difference > 20 & difference <=40){
            console.log('excessive speeding');
        }else {
            console.log('reckless driving');
        }
     

    
}
}

message(40, 'city');
message(21, 'residential');
message(120, 'interstate');
message(200, 'motorway');

