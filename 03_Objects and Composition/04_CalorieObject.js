function findCalories(arr){
    let info = [];

    for(let i = 0; i< arr.length; i++){
        let obj = {
            name : arr[i],
            calories : arr[i+1]
        }
        info.push(obj);
        i++;
        if(i == arr.length){
            break;
        }
    }
   for(let j of info){
    console.log(j.name + ": " + j.calories);
   }

}



findCalories(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])
