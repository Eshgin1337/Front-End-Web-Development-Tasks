let checkedItemsList = [];
let sum = 0;

document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    let checkedItems = document.querySelectorAll(`input[name="item"]:checked`);
    checkedItems.forEach(element => {
        sum += Number(element.value);
    });
    document.querySelector('h1').innerHTML = `The total is ${sum}`;
});
