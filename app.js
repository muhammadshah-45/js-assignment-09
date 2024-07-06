// PROBLM 1

//Print Multiplication Table

// //User sy ak number ly

// var user = +prompt('Please enter any number');

// for(var i = 1; i <= 10; i++){
//     var result = i * user;
//         console.log(`${user} * ${i}= ${result}`);
    
// }


// PROBLEM 2 


// var numbers = [];
// var sum = 0;
// for (var i = 0; i < 5; i++) {
//   numbers.push(+prompt("Enter numbers"));  
// }

// for (let j = 0; j < numbers.length; j++) {
//     sum= numbers[j] + sum; 
// }
// console.log(sum);



//PROBLEM 3

// var emptyArray = [];
// var greaterValue = 0;
// for(var k = 0; k < 5; k++ ){
//    emptyArray.push(+prompt("Enter five numbers"));



// }


// let numbers = [];
// let maxNum = -Infinity;

// for (let i = 1; i < 5; i++) {
//     numbers[i]=+prompt("Enter any numbers")
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
// }

// console.log(`The greatest number is: ${maxNum}`);


// PROBLEM 4

let str = prompt("Enter a string:");
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(`Reverse of "${str}" is "${reversedStr}"`);





//PROBLEM 5

// let num =+prompt("Enter a number:");
// let factorial = 1;

// for (let i = 2; i <= num; i++) {
//   factorial *= i;
// }

// console.log(`${num}! = ${factorial}`);


