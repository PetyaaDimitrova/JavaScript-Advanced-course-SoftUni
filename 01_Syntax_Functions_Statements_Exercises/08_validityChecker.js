
function findSqrt(x1, y1, x2, y2){

    let result = (x2 - x1)**2 + (y2-y1)**2;
    let resultInsideTheScoope = Math.sqrt(result);
    if(resultInsideTheScoope  % 1 > 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
}

findSqrt(2,1,0,0);
findSqrt(1,1,0,0);
findSqrt(2,1,1,1);