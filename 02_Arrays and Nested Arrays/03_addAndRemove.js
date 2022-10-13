function addRemove(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == 'add'){
            newArr.push(i + 1);
        } else {
            newArr.pop();
        }
    }
    if(newArr.length == 0){
        console.log("empty")
    } else {
  for(let num of newArr){
    console.log(num);
  }}
}

addRemove(['remove', 'remove', 'remove'])