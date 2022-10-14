function extractText() {
  let elementsToPutInTheBox = document.querySelectorAll("ul#items li");

  let textArea = document.querySelector("textarea#result") ;

  for(let element of elementsToPutInTheBox){
    textArea.value += element.textContent + "\n";
  }
  }
