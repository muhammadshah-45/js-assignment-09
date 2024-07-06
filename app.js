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

// for (var j = 0; j < numbers.length; j++) {
//     sum= numbers[j] + sum; 
// }
// console.log(sum);



//PROBLEM 3
// user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare

// var numbers = [];
// var maxNum = -Infinity;

// for (var i = 1; i < 5; i++) {
//     numbers[i]=+prompt("Enter any numbers")
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
// }

// console.log(`The greatest number is: ${maxNum}`);


// PROBLEM 4
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem


// var str = prompt("Enter a string:");
// var reversedStr = "";

// for (var i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// console.log(`Reverse of "${str}" is "${reversedStr}"`);





//PROBLEM 5
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24

// var num =+prompt("Enter a number:");
// var factorial = 1;

// for (var i = 2; i <= num; i++) {
//   factorial *= i;
// }

// console.log(`${num}! = ${factorial}`);


