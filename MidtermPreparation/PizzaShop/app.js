var sum = 0;

document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    let type = Number(document.orders.type.value);
    let size = Number(document.orders.size.value);
    let cost = type * size;
    document.getElementById('total_cost').innerText = `AZN: ${cost}`;

    const list = document.getElementById('tb');
    const row = document.createElement('tr');
    var a = document.getElementById('type');
    var radioText = '';
    var selectedRadio = document.querySelector(`input[name='size']:checked`);
    if (selectedRadio) {
        radioText = document.querySelector(`label[for=${selectedRadio.id}]`).innerHTML;
    }
    row.innerHTML = `
        <td>${a.options[a.selectedIndex].text}</td>
        <td>${radioText}</td>
        <td><mark id = 'delete'> x </mark></mar></td>
    `;
    list.appendChild(row);
});