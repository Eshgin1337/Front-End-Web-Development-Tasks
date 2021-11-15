document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);
document.getElementById('addPost').addEventListener('submit', postApi);

function getText() {
    fetch('text.txt')
    .then(function (res) {
        console.log(res);
        return res.text()
    })
    .then(function (data) {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
        console.log(err);
    });
};

function getJson() {
    fetch('post.json')
    .then(function (res) {
        console.log(res);
        return res.json()
    })
    .then(function (data) {
        let jsonData = '';
        data.forEach(function (element) {
            jsonData += `<li>${element.title}</li>`
        })
        document.getElementById('output').innerHTML = jsonData;
    })
    .catch(function (err) {
        console.log(err);
    });
};

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) {
        console.log(res);
        return res.json()
    })
    .then(function (data) {
        let apiData = '';
        data.forEach(function (element) {
            apiData += `<li>${element.username}</li>`
        })
        document.getElementById('output').innerHTML = apiData;
    })
    .catch(function (err) {
        console.log(err);
    });
}


function postApi(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Avvept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, content: content})
    })
    .then(function (res) {
        res.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
}

