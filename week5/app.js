// CALLBACK

posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(function (post, index) {
            output += `<li>${post.title}: ${post.body}</li>`
        } 
        );
        document.querySelector('#content').innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise( function (resolve, reject) {
        setTimeout(() => {
                posts.push(post);
                // Creatinng promise
                const err = false;
                if (!err) {
                    resolve();
                } else {
                    reject('Error: something wrong');
                }   
            }); 
        }, 2000);
}




async function init() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    data.forEach(element => console.log(element.name));
}

init();




