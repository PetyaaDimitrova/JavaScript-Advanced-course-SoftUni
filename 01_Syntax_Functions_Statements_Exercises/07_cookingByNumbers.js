function cook(number, ...param){

    for(let i = 0; i<param.length; i++){
        let action = param[i];
        switch(action){
            case 'chop':
                number = number /2;
                break;
                case 'dice':
                    number = Math.sqrt(number);
                break;
                case 'spice':
                    number = number + 1;
                break;
                case 'bake':
                    number = number * 3;
                break;
                case 'fillet':
                    number = number - number * 0.2;
                break;
        }
        console.log(number);
    }
    
}


cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');