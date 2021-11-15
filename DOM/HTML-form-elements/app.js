document.querySelector('button').addEventListener('click', function () {
    console.log(document.getElementById('txt').value);
    console.log(document.querySelector('select').value);
    selectedRadio = document.querySelector('input[name="rad"]:checked');

    if(selectedRadio) {
        radioText = document.querySelector(`label[for=${selectedRadio.id}]`).innerHTML;
        console.log(radioText);
    } else {
        alert("Please select the radio button!");
    }

    console.log(document.forms['frm']['rad'].value);

    var arr = [];

    checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
    checkboxes.forEach(function (element) {
        arr.push(element.value);
    });
    console.log(arr);
});
