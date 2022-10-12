function days(month, year){
    if(month == 1 || 3 || 5 || 7 || 8 || 10 || 12){
        console.log(31);
    } else if(month == 4 || 6 || 9 || 11){
        console.log(30);
    } else {
        if(year % 4 == 0){
            console.log(29);
        } else {
            console.log(28);
        }
    }
}

days(11, 2021);