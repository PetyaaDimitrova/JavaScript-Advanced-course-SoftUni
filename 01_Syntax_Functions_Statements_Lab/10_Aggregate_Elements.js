function agregate(...param){
    let sum = 0;
    let doubleSum = 0;
    let concat = '';
    for(let i = 0; i< param.length; i++){
        sum = sum + param[i];
        doubleSum = doubleSum + 1/param[i];
        concat = concat + param[i];
    }
    console.log(sum);
    console.log(doubleSum);
    console.log(concat);
}

agregate(2, 4, 8, 16);