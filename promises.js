const posts = [{
        title: "Post One",
        body: "post one content",
    },
    {
        title: "Post two",
        body: "post two content",
    },
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); //same functionality as before. but inside the promise.
            const error = false; //usually we would be checkig for errors.

            if (!error) {
                resolve(); //waits for the timer and then resolves, after resolving 'getPosts' is called
            } else {
                reject("Error!");
            }
        }, 2000);
    }); // return a promise insttead of call a callback

    // promises take in two params - resolve and reject, reject is for errors.
}

createPost({ title: "Post Three", body: "post three content" })
    .then(getPosts)
    .catch((err) => console.log(err));