console.log("Hello World");
console.log("Line 1 To Execute");
console.log("Line 2 To Execute");
console.log("Line 3 To Execute");
console.log("Line 4 To Execute");

console.log("Before The sync Function");
function syncFunction() {
  return "This will execute immediately";
}
const result = syncFunction();
console.log(result);
console.log("After The sync Function");
//============================================================================
//Async Code:
function asyncFunction() {
  setTimeout(() => {
    console.log("Say Hello After 10 seconds");
  }, 10000);
}
asyncFunction();
console.log("this supposed to be called after the async function");

//============================================================================
//Callback Hell
function getUserData(userId, callback) {
  setTimeout(() => {
    console.log(Getting User with userId: ${userId});
  }, 2000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    console.log(Getting Posts with userId: ${userId});
  }, 5000);
}

function getUserComments(userId, callback) {
  setTimeout(() => {
    console.log(Getting Comments with userId: ${userId});
  }, 10000);
}

function displayUserInfo(userId) {
  getUserData(userId, (user) => {
    console.log("user", user);
    getUserPosts(user.id, (posts) => {
      console.log("post", posts);
      getUserComments(posts[0].id, (comments) => {
        console.log("comments", comments);
      });
    });
  });
}
displayUserInfo(2);
