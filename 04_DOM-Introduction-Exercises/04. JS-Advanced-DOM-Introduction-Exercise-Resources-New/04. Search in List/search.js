function search() {

   let arr = document.getElementsByTagName("li")
   let input = document.getElementById("searchText").value;

   let count = 0;

   for(let element of arr){
      if(element.textContent.includes(input)){
count++;
element.style.textDecoration = "underline";
element.style.textDecoration = "bold";
      } else {
         element.style.textDecoration = "none"; 
      }
   }
   document.getElementById("result").innerText = `${count} matches found`;
}
