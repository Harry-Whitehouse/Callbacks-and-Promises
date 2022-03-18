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

// createPost({ title: "Post Three", body: "post three content" })
//     .then(getPosts)
//     .catch((err) => console.log(err));

//async / await

//function must be labled async if we want to use await inside the body

async function init() {
    await createPost({ title: "Post Three", body: "post three content" });
    //then we call await in the body
    getPosts();

    //this function waits for create posts to be done, before we move on and call 'getPosts'
}

init();

// we can also use async/await with fetch

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //stores the api in a const

    const data = await res.json();
    //calls it here

    console.log(data);
}

fetchUsers();

//promise.all

// const promise1 = Promise.resolve("Hello World!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => res.json()
// );
// //with fetch you need '.then' and you also need the result apping to make the date display properly

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//     console.log(values)
// );