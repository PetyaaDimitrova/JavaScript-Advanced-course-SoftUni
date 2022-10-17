function create(words) {
   for(let element of words){
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = element;
      div.appendChild(p);
      p.style.display = "none";
      div.addEventListener("click", onClick);
      document.getElementById("content").appendChild(div);

   }

   function onClick(event){
let p = event.target.children[0];
p.style.display = "block";
   }
}