function colorize() {
   let rows = document.querySelectorAll("table tr")

   index = 1;
   for(let element of rows){
    if(index %2 == 0){
element.style.background = "teal";
    }
    index++;
   }
}