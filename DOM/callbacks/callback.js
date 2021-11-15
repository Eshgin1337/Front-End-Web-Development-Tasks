posts = [
    {title: "Post1", body: "This is post one."},
    {title: "Post2", body: "This is post two"}
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(function (post) {
            output +=  `<li>${post.title}</li>`;
        });
        document.querySelector("div").innerHTML = output;
    }, 2000);
};

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};


createPost({ title: 'Post Three', body: 'This is post Three'}, getPosts);

