const Ary1 = ["M416", "AKM", "SCAR-L", "M762", "AWM"]
console.log(Ary1[1]);  // AKM

//+++++++++Array Methods+++++++++//
Ary1.push(6)  // add 6 
console.log(Ary1);  // [ 'M416', 'AKM', 'SCAR-L', 'M762', 'AWM', 6 ]

Ary1.pop() // remove the last value
console.log(Ary1);  // [ 'M416', 'AKM', 'SCAR-L', 'M762', 'AWM' ]

Ary1.unshift("UMP5")  // [ 'UMP5', 'M416', 'AKM', 'SCAR-L', 'M762', 'AWM' ]
console.log(Ary1);  // Add the value first place and other values are same copy for thet particular ans

Ary1.shift()  // [ 'M416', 'AKM', 'SCAR-L', 'M762', 'AWM' ]
console.log(Ary1);  // first num Left and other values are same copy for that particular ans

const Ary2 = ["Goku", "Vageta", "Piccolo"]

Ary3 = Ary1.concat(Ary2)
console.log(Ary3);  // Print Combine Arrays

Ary4 = new Array(...Ary1, ...Ary2)
console.log(Ary4);  // Print Combine Arrays

// const Array3 = ["M416", "AKM", "SCAR-L", "M762", "AWM"] // For join example
const Array3 = [0, 1, 2, 3, 4, 5]

//+++++++++Array Operations+++++++++//

console.log(Array3.includes(2));  // false // For comparison in boolean type (See in video of using the only one in boolean type)
console.log(Array3.indexOf("AKM"));  // 0
const newArr = Array3.join()  // convert into array to string

console.log(Array3);  // ['AKM', 'AWM']
console.log(newArr);  // AKM, AWM

//**********Slice,Splice**********//
console.log("A: ", Array3);  // [0, 1, 2, 3, 4, 5, 6] // Original Print

const myn1 = Array3.slice(1, 3)
console.log(myn1);  // [1, 2] left first number of starting(1) number and go till stop(3) number...
console.log("B: ", Array3);  // [0, 1, 2, 3, 4, 5, 6] // Original Print Nothing any changes

const myn2 = Array3.splice(1, 3)
console.log(myn2);          // [1, 2, 3] print all the numbers between start number and stop number...

console.log("C: ", Array3); // [0, 4, 5] // Original Print Remove Splice Printed Numbers(1, 2, 3) and print other as same...