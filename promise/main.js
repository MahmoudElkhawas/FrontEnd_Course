//Promise Basics

//Create a promise that resolves with "Hello, World!" after 2 seconds.

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
    resolve("Hello, World!");
}, 2000);
});

//Log the resolved value.
myPromise.then((value) =>{
    console.log(value);
});
//Promise Chaining

//Write a promise that resolves with a number 5.
const numresolve = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
}, 1000);
});
numresolve
    .then((valuee) => {
    console.log(valuee);
    return valuee * 2
    })
    
//Then multiply it by 2 in the next .then().
    .then((newvalue) =>{
        console.log(newvalue);
        return newvalue - 3
    })
//Then subtract 3 in the following .then().
    .then((newnum) =>{
        console.log(newnum);
        return newnum
    })
//Print the final result.
    .then((finalresult) =>{
        console.log("the final result is :", finalresult);
    });
//Error Handling

//Create a promise that rejects with an error message "Something went wrong!".
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 1000);
})
//Use .catch() to handle the error and log it.
.then((value) => {
        console.log("This will not run:", value);
    })
    .catch((error) => {
        console.log("Error:", error); // Error: Something went wrong!
    });





//Fetch API + Promises

//Use fetch("https://dummyjson.com/products/1").
fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())

//Get the product name and log it using .then().
    .then((data) => {
    console.log("Product title:", data.title);
    });
//Async/Await Basics

//Rewrite Question 4 using async/await instead of .then().
async function getProduct() {
try {
    const response = await fetch("https://dummyjson.com/products/1"); // fetch data
    const data = await response.json(); // parse JSON
    console.log("Product title:", data.title); // log product name
} catch (error) {
    console.log("Error:", error); // handle error
}
}

getProduct();