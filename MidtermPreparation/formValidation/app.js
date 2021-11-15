const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
});


function checkInput() {
    let username_val = username.value.trim();
    let pass_val = password.value.trim();

    if (username_val.length < 8) {
        setError(username, "Username should be at least 8 character long!");
    } else {
        setSuccess(username);
    }

    if (pass_val.length < 8) {
        setError(password, "The passwords must contain at least 8 characters.");
    } else{
        setSuccess(password);
    }
};


function setError(input, message) {
    const parElement = input.parentElement;
    parElement.querySelector("small").innerText = message;
    parElement.className = "error";
}


function setSuccess(input) {
    const parElem = input.parentElement;
    parElem.classList.remove("error");
    parElem.querySelector("small").innerText = '';
}
