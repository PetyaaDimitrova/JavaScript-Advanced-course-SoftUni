function validate() {
    let input = document.getElementsByTagName("input")[0];

    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   // input.addEventListener('focus', focus);

    // function focus(event){
    //     if(input.match(pattern)){

    //     }else {
    //         input.style.border = "red";
    //     }
    // }

    console.log(("petya@abv.bg").match(pattern));


}