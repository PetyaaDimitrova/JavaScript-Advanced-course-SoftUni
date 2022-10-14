function sumTable() {
let prices = document.querySelectorAll("table tr");

let sum = 0;
for(let i = 1; i< prices.length - 1; i++){
    let row = prices[i].children;
    sum += Number(row[1].textContent);
}
document.getElementById("sum").innerText = sum;
}