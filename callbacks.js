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
        /*setTimeout takes in a callback funtion*/

        let output = "";
        posts.forEach((post, index) => {
            //forEach also takes in a callback
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); //setTimeout then takes a time to delay the function 1000ms here (1 second.)
}

// function createPost(post,) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
//     // this takes longer than the get post function, so it wont be returned. this is why asynchronous programming is useful.
// }

function createPost(post, callback) {
    // we can fix the issue by adding a callback function
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts(); //when loading a webpage, the posts will appear after 1s
//dont need to call this now

createPost({
        title: "Post Three",
        body: "post three content",
    },
    getPosts //we can just call get posts here instead
);

//this code now works, however you would need to wait for the last item to be ready before the whole thing would load.
//create post loads in 2s. this overrides the 1 second wait from the get posts function.