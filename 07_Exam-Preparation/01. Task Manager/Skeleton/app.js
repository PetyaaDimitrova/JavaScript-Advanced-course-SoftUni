function solve() {

    let addBtn = document.getElementById("add");
    addBtn.addEventListener("click", addTask);

    const inputValues = document.getElementById("form").querySelectorAll("input");
    const labelValues = document.getElementById("form").querySelectorAll("label");

    let openSection = document.getElementsByTagName('section')[1];
    // let inProgressSection = document.querySelector("h1[class='yellow']");
    // let completeSection = document.querySelector("h1[class='green']");

    function addTask(event) {


        if (inputValues[0].value === "" || inputValues[1].value === "" || inputValues[2] === "") {
            return;
        }

        let startButton = document.createElement("button");
        startButton.classList.add("button");
        startButton.classList.add("start");
        startButton.textContent = "Start";
        startButton.addEventListener("click", startTask);


        let deleteButton = document.createElement("button");
        deleteButton.classList.add("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);


        for(let i = 0; i<inputValues.length  ; i++){

            let li = document.createElement("li");
            li.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
            openSection.appendChild(li);
          }
          for(let i = 0; i<inputValues.length - 1 ; i++){
            inputValues[i].value = '';
          }


        li.appendChild(startButton);
        li.appendChild(deleteButton);
        openSection.appendChild(li);


    }

    

    function deleteTask(e){

    }

    function startTask(e){

    }

}