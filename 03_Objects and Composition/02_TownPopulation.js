function getInfo(arr){
    let newArr = arr.split(',');
    let infoAboutTownPopulatin = {};

    for(let i = 0; i < newArr.length; i++){
let splittedArr = newArr[i].split('<->');
let townName = splittedArr[0].replace(`'`, '');
let townPopulation = splittedArr[1].replace(`'`, '');;
infoAboutTownPopulatin[townName] = townPopulation;
    }
    return infoAboutTownPopulatin;
}

let info = getInfo(`'Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'`)

Object.entries(info).forEach(c => console.log(c))

