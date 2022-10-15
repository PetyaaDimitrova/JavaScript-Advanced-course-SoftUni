function deleteByEmail() {
   let email = document.getElementsByName("email")[0].value;
   let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)")

   for(let em of secondColumn){
    if(em.textContent == email){
let row = em.parentNode;
row.parentNode.removeChild(row);
document.getElementById("result").textContent = "Deleted";
return; 
    }
    document.getElementById("result").textContent = "Not Found"
   }


   
   
}