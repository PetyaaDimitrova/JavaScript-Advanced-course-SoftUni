function solve() {
  let firstElement = document.getElementById("text").value;
  let secondElement = document.getElementById("naming-convention").value;


  let result = "";
  if(secondElement == "Camel Case"){
result = firstElement.replaceAll(" ", "");
  } else if(secondElement == "Pascal Case"){
    let arr = firstElement.split(" ");
    for(let n of arr){
      result = result + n[0].toUpperCase() + n.substring(1).toLowerCase() + " ";
    }

    
  } else {
   result = "Error!"
  }

  document.getElementById("result").textContent = result;

}