const form = document.querySelector("#form");
// toLower = document.querySelector("#to")
const text = document.querySelector("#textarea");


form.addEventListener("submit", function (e) {
    console.log(e.target.id);
    if (e.target.value === "all_small") {
        text.value = text.value.trim().toLowerCase();
    } else if (form.value === "all_capital") {
        text.value = text.value.trim().toUpperCase();
    }
    e.preventDefault();
})