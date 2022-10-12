function separateText(text){
    text = text.toUpperCase();

    text = text.replaceAll(',', '');
    text = text.replaceAll(' ', ', ');
    
   
    console.log(text);
}

separateText('Hi, how are you?');
separateText('hello')