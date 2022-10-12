function fruitShop(type, kilos, price){
    console.log(`I need $${(kilos/1000 * price).toFixed(2)} to buy ${(kilos/1000).toFixed(2)} kilograms ${type}.`)
}

fruitShop('orange', 2500, 1.80);
fruitShop('apple', 1000, 1.6);