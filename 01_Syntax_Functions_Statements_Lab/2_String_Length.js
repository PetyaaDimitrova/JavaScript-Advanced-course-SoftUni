function avg(a, b , c){
    let first = a.length;
    let second = b.length;
    let third = c.length;

    let sum = first + second + third;
    console.log(sum);
    console.log(Math.floor(sum/3));
}


avg('chocolate', 'ice cream', 'cake');