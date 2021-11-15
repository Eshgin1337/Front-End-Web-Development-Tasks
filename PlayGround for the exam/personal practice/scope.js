// function outerFunc() {
//     let myVar = "Hello world";
//     function innerFunction() {
//         console.log(myVar);
//     }
//     return innerFunction;
// }


// function exec() {
//     const insideFunction = outerFunc();
//     insideFunction();
// }

// exec();

clicked = 0;

const myButton = document.querySelector("#button");
const heading = document.querySelector("#header")

myButton.addEventListener('click', function () {
    clicked++;
    heading.innerHTML = `The button is clicked ${clicked} times.`
})
