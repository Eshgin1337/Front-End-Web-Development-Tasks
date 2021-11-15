var contentText = document.querySelector('#content');

document.querySelector("#buttons").addEventListener('click', function (e) {
    if (e.target.id === "lower") {
        contentText.style.textTransform = "lowercase";
    } else if (e.target.id === "title") {
        contentText.style.textTransform = "capitalize";
    } else {
        contentText.style.textTransform = "uppercase";
    }
});


