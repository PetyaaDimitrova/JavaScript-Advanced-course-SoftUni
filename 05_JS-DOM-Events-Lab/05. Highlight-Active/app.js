function focused() {
   let inputs = document.getElementsByTagName("input");

   for(let input of inputs){
    input.addEventListener("focus", inputFocus);
    input.addEventListener("blur", inputBlur);
   }

   function inputFocus(event){
    event.target.parentElement.classList.add("focused")
   }
   function inputBlur(event){
    event.target.parentElement.classList.remove("focused")
   }
}