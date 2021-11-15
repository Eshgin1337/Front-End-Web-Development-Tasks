const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
    // console.log(e);
    checkInputs();
    e.preventDefault();
});


function checkInputs() {
    usernameValue = username.value.trim();
    passwordValue = password.value;
    console.log(usernameValue + " " + passwordValue);
    if (usernameValue.length < 5) {
        setError(username, "The length of the username should be more than 5!");
        document.querySelector("username_condition").innerHTML
    } else {
        setSuccess(username);
    }
}


function setError(input, message) {
    const formElement = input.parentElement;
    const small = formElement.querySelector("small");
    small.innerText = message;
}

function setSuccess(input) {
    const formElement = input.parentElement;
    const small = formElement.querySelector("small");
    small.innerText = "Success!"
}
