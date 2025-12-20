const user = {  // scope
    username: "Goku",
    price: 999,

    // welcomMessage method
    welcomeMessage: function () {  // (this.)current context(value) means refer under scope variables ex: this.username
        console.log(`${this.username}, Welcome to website! `);
        // console.log(this); // value show in object{}
    }
}
user.welcomeMessage() // Goku, Welcome to website!
user.username = "GokuGaming"
user.welcomeMessage() // GokuGaming, Welcome to website!
// console.log(this); // empty object{}


// 2................. Examples of using (this.)
function chai() {       // 1st type of function
    let username = "Goku"
    console.log(this.username);
}
chai() // undefiend this cannot use in here

const coffee = function () {   // 2nd type of function
    let username = "Goku"
    console.log(this.username);
}
coffee() // undefiend this cannot use in here

const cafe = () => {   // Arrow function
    let username = "Goku"
    console.log(this.username);
}
cafe() // undefiend this cannot use in here


// 3...................
// () => {} Structure of Arrow Function
// const variableName = () => {} Store in Variable Arrow Function

// Normal Method
const variableName = (num1, num2) => {
    return num1 + num2
}
console.log(variableName(3, 4))

// Implicit Method (Remove curly braces and return keyword)
const variableName2 = (num1, num2) => (num1 + num2)
console.log(variableName2(3, 4))

const variableName3 = (num1, num2) => ({username: "Implcite Method"})
console.log(variableName3(3, 4))

// const myArray = [2, 5, 6, 7, 8]  
// myArray.forEach(() => {})  // small discuss => sometimes this type of arrow function we see and confus what it mean..!
// myArray.forEach(() => ())