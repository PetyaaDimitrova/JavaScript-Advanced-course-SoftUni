window.addEventListener("load", solve);

function solve(event){
    document.querySelector("button[type='submit']").addEventListener("click", createTask);
    document.querySelector("button[class='clear-btn']").addEventListener("click", clearPost);


    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    let recievedSection = document.getElementById("received-order");
    let completedSection = document.getElementById("completed-orders");

    function createTask(event){
        let productTypeValue = productType.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if(!descriptionValue || clientNameValue || !clientPhoneValue){
            return;
        }
        createDOMElements(productTypeValue, descriptionValue, clientNameValue, clientPhoneValue);
        clearFormField();
       
    }

    function clearFormField(){
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";
    }
    
    function createDOMElements(productTypeValue, descriptionValue, clientNameValue, clientPhoneValue){

        let li = document.createElement("li");
        li.classList.add("rpost");
        let article = createArticle(productTypeValue, descriptionValue,clientNameValue, clientPhoneValue);

        let startRepairButton = document.createElement("button");
        startRepairButton.classList.add("start-btn");
        startRepairButton.classList.add("repair");
        startRepairButton.textContent = "Start Repair";
        startRepairButton.addEventListener("click", startRepair);

        let finishRepair = document.createElement("button");
        finishRepair.classList.add("finish-btn");
        finishRepair.classList.add("finish");
        finishRepair.textContent = "Finish Repair";
        finishRepair.addEventListener("click", finishRepair);

        li.appendChild(article);
        li.appendChild(startRepairButton);
        li.appendChild(finishRepair);
        reviewSection.appendChild(li);

    }
    
    function createArticle(productTypeValue, descriptionValue, clientNameValue, clientPhoneValue){
        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = `Product type for repair: ${productTypeValue}`;

        let infoP = document.createElement("p");
        infoP.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let descriptionP = document.createElement("p");
        descriptionP.textContent = `Description of the problem: ${descriptionValue}`;

        article.appendChild(h);
        article.appendChild(infoP);
        article.appendChild(descriptionP);

        return article;
    }

    function startRepair(e){
        e.target.setAttribute("disabled", true);
        let finishButton = e.target.parentElement.getElementsByClassName("finish-btn")[0];
        finishButton.disabled = false;

    }

    function finishRepair(e){
        
    }




}