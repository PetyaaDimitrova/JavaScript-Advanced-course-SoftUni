function print(arr){

    let infobook = {};

    for(let i = 0; i< arr.length; i++){
        
        infobook [arr[i]] = arr[i+1];
        i++;
        
    }
    console.log(infobook);
}


let input = ['Yoghurt', '48', 'Rise', '138',

'Apple', '52']

print(input)