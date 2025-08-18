console.log("Hello World");
console.log("Line 1 To Execute");
console.log("Line 2 To Execute");
console.log("Line 3 To Execute");
console.log("Line 4 To Execute");

function syncFunction(){
    return "this will excute immediatly"
}
const result = syncFunction();
console.log(result);
console.log("After the sync function");


//Async Code :
function asyncFunction(){
    setTimeout(() =>{
        console.log("say hello after 2 seconds")
    }, 10000);
}

//callback hellfunction
function getUserData(userId, callback){
    setTimeout(() => {
        console.log(`Getting user with userid: ${userId}`);
    }, 2000);
}

function displayUserInfo(userId){
    getUserData(userId, (user)=>{
        console.log("user", user)
        getUserPosts(user.id (posts)=>{
            console.log("posts", posts);
            getUserComments(osts[0].id, (comments)=> {
                console.log("comments", comments);
            });
        });
    });
}
displayUserInfo(2);


function getUserDataPromise(userId){
    return new promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("getting user data!");
        });
    });
}

function getUserPostsPromise(userId){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting user posts")
        });
    });
}
function getUserCommintsPromise(userId){
    return new promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("getting commints for this posts!");
        });
    });
}

function displayUserInfopromise(userId) {
    getUserDataPromise(userId)
    .then((user) => {
        console.log("user", user);
        return getUserPostsPromise(user.id);
    }).then((posts) =>{
        console.log(posts);
        return getUserCommintsPromise(posts[0].id);
    })
    .then((comments) =>{
        console.log(comments);
    });
    .catch((error) =>{
        console.log(error)
    })
}