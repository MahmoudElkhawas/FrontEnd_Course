// 1. let & const
// Create a shopping cart with let (can be updated).  Done
// Add a few items, then reassign it to add a discount code.  Done
// Try the same with const and explain why it fails.
let shoppingcart = ["milk", "Tomato", "chips", "chocolate"]
console.log(shoppingcart)
shoppingcart.length = 0;
console.log(shoppingcart)
//if we try with const it will fail because the cart in const we cannot change the cart we can only edit it 

// 2. Arrow Functions
// Create an arrow function "calculateTax(price)" that adds 15% tax to a price.
// Use it to calculate tax for prices: 100, 250, 500.
const calculateTax = (price) => {
  return price + (price * 0.15);
};
console.log(calculateTax(100)); 
console.log(calculateTax(250)); 
console.log(calculateTax(500)); 

// 3. Template Literals
// Create a function that takes a student's name and grade
// and logs: "Student [name] has scored [grade]% in the final exam."
const name = "Mahmoud";
const grade = 70;

const student = (name, grade) => {
    console.log(`Student ${name} has scored ${grade}% in the final exam.`);
};

student(name, grade);
// 4. Default Parameters
// Create a function "applyDiscount(price, discount = 0.1)" 
// that subtracts discount from the price (default 10%).
// Call it with and without a discount parameter.
function applyDiscount(price, discount = 0.1) {
    return price - (price * discount);
}

console.log(applyDiscount(100));  
console.log(applyDiscount(100, 0.2)); 

// 5. Destructuring
// You have an object { title: "Book", author: "John Doe", price: 200 }
// Use destructuring to extract title and price into variables.
// Print them in a sentence using template literals.
const book = { title: "book", author: "John Doe", price: 200 };
const { title, price } = book;
console.log(`The book "${title}" costs ${price} EGP`);

// 6. Spread Operator
// You have two arrays: ["Math", "English"] and ["Science", "History"]
// Merge them into a single "subjects" array using spread.
// Then add another subject "PE" to the end.
const array = ["Math", "English"];
const array2 = ["Science", "History"];
const combined = [...array, ...array2];
console.log(combined + ",pe")

// 7. Rest Parameters
// Create a function "maxNumber(...nums)" that returns the largest number given.
// Test it with (5, 10, 3, 20, 15)
function maxNumber(...nums) {
    return Math.max(...nums);
}
console.log(maxNumber(5, 10, 3, 20, 15)); 

// 8. Enhanced Object Literals
// Create an object student with properties: name, grade
// Add a method introduce() that logs: "Hi, I'm [name] and my grade is [grade]"

const namee = "Mahmoud";
const gradee = 70;
const studentt = {
  namee, 
  gradee,  
  introduce() {
    console.log(`Hi, I'm ${this.namee} and my grade is ${this.gradee}`);
  }
};
studentt.introduce();
// 9. Classes
// Create a class BankAccount with:
// - property balance
// - method deposit(amount)
// - method withdraw(amount)
// Create an object and perform a few deposits/withdrawals.
class BankAccount {
constructor(balance = 0) {
    this.balance = balance;
}
deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
}

withdraw(amount) {
    if (amount > this.balance) {
        console.log("not enough money!");
    } else {
        this.balance -= amount;
        console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
    }
    }
}
const myAccount = new BankAccount(100);

myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(200); 

// 10. Promises
// Create a function fetchUser() that returns a Promise.
// After 1.5 seconds, it should resolve with an object: { id: 1, name: "Ali" }.
// Use .then() to log "User found: [name]"
// Function that returns a Promise
function prod() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 1, name: "Ali" });
    }, 1500);
});
}

prod().then((user) => {
    console.log(`User found: ${user.name}`);
});