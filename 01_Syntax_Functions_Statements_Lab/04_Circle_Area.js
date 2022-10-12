function circleArea(a){
    if( typeof a == 'number'){
    console.log(Math.PI * a * a);
} else {
console.log("We can not calculate the circle area, because we receive a string.");
}
}
circleArea("petya");