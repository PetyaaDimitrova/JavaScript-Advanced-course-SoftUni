function sameDigits(a){

    let numberAsString = a.toString();
    let firstDigit = Number(numberAsString[0]);
    let count = 1;
    let sum = firstDigit;

    for(let i = 1; i< numberAsString.length; i++){
if(numberAsString[i] == firstDigit){
count = count + 1;
}
sum = sum + Number(numberAsString[i]);
    }
    if(count == numberAsString.length){
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(sum);
    
}

sameDigits(1234);