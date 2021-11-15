const element = document.querySelector("#buttons");
var counter = 0;


element.addEventListener('click', function (e) {
    if (e.target.id === "increase") {
        counter++;
    } else {
        counter--;
    }
    document.getElementsByTagName("h2")[0].innerHTML = counter;
})

