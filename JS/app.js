function fromTo(from, to) {
    ++from;
    console.log(from);
    if (from < to){
        fromTo(from, to);
    } 
}



setTimeout(function (){
        clearInterval(fromTo(0, 10));
}, 1000);

