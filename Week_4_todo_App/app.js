const form = document.querySelector("#form");
const new_task = document.querySelector("#new_todo");
const list = [];
let list_item = 0;

form.addEventListener("submit", function (e) {
    addToList();
    displayList(list);

    e.preventDefault();
});

function addToList() {
    list.push(new_task.value.trim());
}

function displayList(list) {
    let html_list = document.getElementById("myList");
    let li = document.createElement("li");
    li.innerText = list[list_item];
    html_list.appendChild(li);
    list_item++;
}
