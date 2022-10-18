window.addEventListener('load', solution);

function solution() {
  
  document.getElementById("submitBTN").addEventListener("click", doReservation);
  document.getElementById("editBTN").addEventListener("click", editReservation);
  document.getElementById("continueBTN").addEventListener("click", continueWithReservation);


  let fullName = document.getElementById("fname");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phone");
  let address = document.getElementById("address");
  let postalCode = document.getElementById("code");

  let recievedSection = document.getElementById("infoPreview");

  function doReservation(e){
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let phoneNumberValue = phoneNumber.value;
    let addressValue = address.value;
    let postalCodeValue = postalCode.value;

    if (!fullNameValue || !emailValue || !phoneNumberValue || !addressValue || !postalCodeValue) {
        return;
    }
    createDOMElements(fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue);
    clearFormField();
  }

  function clearFormField() {
    fullName.value = "";
    email.value = "";
    phoneNumber.value = "";
    address.value = "";
    postalCode.value = "";
}

function createDOMElements(fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue){
  let li = document.createElement("li");

  let nameInfo = document.createElement("p");
  nameInfo.textContent = `Full name: ${fullNameValue}`;
  let emailInfo = document.createElement("p");
  emailInfo.textContent = `Email: ${emailValue}`;
  let phoneInfo = document.createElement("p");
  phoneInfo.textContent = `Phone number: ${phoneNumberValue}`;
  let addressInfo = document.createElement("p");
  addressInfo.textContent = `Address: ${addressValue}`;
  let codeInfo = document.createElement("p");
  codeInfo.textContent = `Postal code: ${postalCodeValue}`;

  li.appendChild(nameInfo);
  li.appendChild(emailInfo);
  li.appendChild(phoneInfo);
  li.appendChild(addressInfo);
  li.appendChild(codeInfo);

  recievedSection.appendChild(li);

}



function editReservation(e){
  let currentPost = e.target.parentElement;
  let articleContent = currentPost.getElementsByTagName("article")[0].children;

  let nameValue = articleContent[0].textContent;
  let emailValue = articleContent[1].textContent;
  let phoneValue = articleContent[2].textContent;
  let addressValue = articleContent[3].textContent;
  let codeValue = articleContent[4].textContent;

  fullName.value = nameValue.split(" ")[1];
  email.value = emailValue.split(" ")[1];
  phoneNumber.value = phoneValue.split(" ")[1];
  address.value = addressValue.split(" ")[1];
  postalCode.value = codeValue.split(" ")[1];

  currentPost.remove();
}

function continueWithReservation(e){
  Array.from(recievedSection.children).forEach(li => li.remove())


}


  


}
