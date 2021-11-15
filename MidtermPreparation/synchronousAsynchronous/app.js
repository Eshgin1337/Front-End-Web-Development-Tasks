posts = [
    { title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' }
];


function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error, something wrong happened!");
            }
        }, 2000);
    });
}


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(element => {
            output += `<li>${element.title}</li>`;
        });
        document.querySelector('div').innerHTML = output;
    }, 1000);
}


async function init() {
    await createPost({ title: 'Post Three', body: 'This is post Three'});
    getPosts();
}

init();
