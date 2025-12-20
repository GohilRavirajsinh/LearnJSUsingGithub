// for of
// ["", "", ""]  Array
// [{}, {}, {}]  Array  Object

// const ans = ...
// for (const variable of ans) {    ans means jiske uper loop lgana ho uska name
//   console.log(variable)          <= Normal Defination
// }

// Array ForOf Loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);  // Values Return
}

const greetings = "Hey There Goku"
for (const greet of greetings) {
    if (greet == " ") {  // For Remove Space
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map() // map apne aap me ek object hai they hold kry Values & All Values are uniqe hoti hai
map.set('IN', "India") // ('Key', "Value")
map.set('UK', "United Kingdom")
map.set('USA', "United States of America")
map.set('Fr', "France") 
// console.log(map); // Answer in Key and Values Defination

// Map ForOf Loop
for (const key of map) {
    // console.log(key);  // Same answer but in array
}
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`); // Destructure answer 
}


// Object ForOf Loop
const myObject = {
    game1: 'BGMI',
    game2: 'NFS'
}

// for (const [game, gamename] of myObject) {
//     console.log(`${game} name is ${gamename}`); Error :- myObject is not iterable
// }