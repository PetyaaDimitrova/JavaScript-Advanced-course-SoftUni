window.addEventListener("load", solve);

function solve(event) {
    document.querySelector("button[type='submit']").addEventListener("click", createTask);
    document.querySelector("button[class='clear-btn']").addEventListener("click", clearPost);


    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");

    let recievedSection = document.getElementById("received-orders");
    let completedSection = document.getElementById("completed-orders");

    function createTask(e) {
        e.preventDefault();
        let productTypeValue = productType.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }
        createDOMElements(productTypeValue, descriptionValue, clientNameValue, clientPhoneValue);
        clearFormField();

    }

    function clearFormField() {
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";
    }

    function createDOMElements(productTypeValue, descriptionValue, clientNameValue, clientPhoneValue) {

        let divContainer = document.createElement("div");
        divContainer.classList.add("container");

        let h = document.createElement("h2");
        h.textContent = `Product type for repair: ${productTypeValue}`;

        let infoP = document.createElement("h3");
        infoP.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let descriptionP = document.createElement("h4");
        descriptionP.textContent = `Description of the problem: ${descriptionValue}`;

        let startRepairButton = document.createElement("button");
        startRepairButton.classList.add("start-btn");
        startRepairButton.textContent = "Start Repair";
        startRepairButton.addEventListener("click", startRepair);

        let finishRepairButton = document.createElement("button");
        finishRepairButton.classList.add("finish-btn");
        finishRepairButton.addEventListener("click", finishRepair);
        finishRepairButton.textContent = "Finish Repair";
        finishRepairButton.setAttribute("disabled", true)


        divContainer.appendChild(h);
        divContainer.appendChild(infoP);
        divContainer.appendChild(descriptionP);
        divContainer.appendChild(startRepairButton);
        divContainer.appendChild(finishRepairButton);
        recievedSection.appendChild(divContainer);

    }


    function startRepair(e) {
        e.target.setAttribute("disabled", true);
        let finishButton = e.target.parentElement.getElementsByClassName("finish-btn")[0];
        finishButton.disabled = false;

    }

    function finishRepair(e) {
        let currentProduct = e.target.parentElement;
        completedSection.appendChild(currentProduct);

        Array.from(currentProduct.querySelectorAll("button")).forEach(btn => btn.remove())

    }

    function clearPost(e) {
        let containers = document.querySelectorAll(".container");
    Array.from(containers).forEach(container => container.remove())

    }




}