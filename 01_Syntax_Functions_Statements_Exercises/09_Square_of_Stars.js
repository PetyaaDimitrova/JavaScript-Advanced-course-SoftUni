function square(a){
    let result = "";
    for(let i = 0; i <a; i++){
        for(let j = 0; j < a; j++){
          result = result + "*"
        }
        console.log(result);
        result = "";
    }
}
square(3);