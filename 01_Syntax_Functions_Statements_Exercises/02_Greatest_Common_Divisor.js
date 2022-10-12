function findGreatestDivisor(a, b){
    let i = 1;
let greatestDivisor = 0;

while(i <= a & i <= b){

    if(a % i == 0 & b % i == 0){
greatestDivisor = i;
    }

    i++;
}
console.log(greatestDivisor);
}

findGreatestDivisor(2154, 458);