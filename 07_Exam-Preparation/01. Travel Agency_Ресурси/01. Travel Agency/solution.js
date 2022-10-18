window.addEventListener('load', solution);

function solution() {
  
  let submitBtn =  document.getElementById("submitBTN");
  submitBtn.addEventListener("click", doReservation);
  let editBtn = document.getElementById("editBTN");
  editBtn.addEventListener("click", editReservation);
  let continueBtn = document.getElementById("continueBTN");
  continueBtn.addEventListener("click", continueWithReservation);
  let block = document.getElementById("block");

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  const inputValues = document.getElementById("form").querySelectorAll("input");
  const labelValues = document.getElementById("form").querySelectorAll("label");

  let recievedSection = document.getElementById("infoPreview");

  function doReservation(e){

    if (inputValues[0].value === "" || inputValues[1].value === "") {
        return;
    }

    for(let i = 0; i<inputValues.length - 1 ; i++){

      let li = document.createElement("li");
      li.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
      recievedSection.appendChild(li);
    }
    for(let i = 0; i<inputValues.length - 1 ; i++){
      inputValues[i].value = '';
    }
    e.target.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
  }

  

function editReservation(e){

  let listItems = Array.from(recievedSection.children)

  for(let i = 0; i<inputValues.length - 1; i++){
    inputValues[i].value = listItems[i].textContent.split(": ")[1];
  }
  Array.from(recievedSection.children).forEach(li => li.remove())
  submitBtn.disabled = false;
  e.target.disabled = true;
  continueBtn.disabled = true;
}

function continueWithReservation(e){
 document.getElementById("information").remove();
 Array.from(block.children).forEach(li => li.remove())

 let h = document.createElement("h3");
 h.textContent = "Thank you for your reservation!";
 block.appendChild(h);

}


  


}
