// Is Truthy
// 1. Assign values to test in the Array
// 2. Test typeof each value using for each method and if else statement

let inputValues = ["I am a string", false, null, undefined, 0, ''];

inputValues.forEach(input => {
    if (typeof input === 'string' && input !== '') {
        console.log('true');
    } else if (typeof input === 'boolean' && !input) {
        console.log('The boolean value false is falsy');
    } else if (input === null) {
        console.log('The null value is falsy');
    } else if (typeof input === 'undefined') {
        console.log('undefined is falsy');
    } else if (typeof input === 'number' && input === 0) {
        console.log('The number 0 is falsy (the only falsy number');
    } else if (typeof input === 'string' && input === '') {
        console.log('The empty string is falsy (the only falsy string)');
    }
});

// -----------------------------------------------

// Number Line 
// 1. put test value in num1 and num2 array
// 2. use for loop and if else statements to check condition and print the outcome as per instructions


num1 = [50, 99, 0, 500, -1000, -5];
num2 = [51, -2, 101, -500, 0, 0];

for (let i = 0; i < num1.length && i < num2.length; i++) {
    let item1 = num1[i];
    let item2 = num2[i];
    let sum = item1 + item2;

    if (item1 < 0 || item2 <= 0 && sum < 0) {
        console.log(`${sum} is a negative number`)
    } if (item1 >= 0 || item2 >= 0 && sum >= 0) {
        if (sum !== 0 && sum > 100) {
            console.log(`${sum} is greater than 100`);
        } else if (sum !== 0 && sum < 100) {
            console.log(`${sum} is greater than 0`);
        } else if (sum === 0) {
            console.log(`${sum} is equal to 0`);
        }
    };
}

// OR assign variable manually case by case

// let num1 = 99
// let num2 = -2
// const sum = num1 + num2

// if (num1 < 0 || num2 <= 0 && sum < 0) {
//     console.log(`${sum} is a negative number`)
// } if (num1 >= 0 || num2 >= 0 && sum >= 0) {
//     if (sum !== 0 && sum > 100) {
//         console.log(`${sum} is greater than 100`);
//     } else if (sum !== 0 && sum < 100) {
//         console.log(`${sum} is greater than 0`);
//     } else if (sum === 0) {
//         console.log(`${sum} is equal to 0`);
//     }
// };

// -----------------------------------------------

// Greater Than Or Equal To 5
// 1. Assign input values in array number1 and number2
// 2. Use for loop and if else statement to check condition of each input 

number1 = [5, 10, 0, 1000, 6, 5];
number2 = [6, 11, 0, -1000, 4, 5];

for (let i = 0; i < number1.length && i < number2.length; i++) {

    if (number1[i] >= 5 && number2[i] >= 5) {
        console.log('true')
    } else {
        console.log('false');
    }
};

// -----------------------------------------------

// Pair and Compare
// 1. Assign value in array of param1A, param1B, param2A, param2B
// 2. Loop over the value and use ternay operators to check the condition

let param1A = ['cat', 'five', 0, 'eight', 11, 'cake'];
let param1B = ['cat', 5, false, 'eight', 'eleven', 'cake'];
let param2A = [6, 'dog', 'horse', 'ate', 'four', 'pie'];
let param2B = ['6', 'dawg', 'horse', 'ate', 'for', 'pie'];

for (let i = 0; i < param1A.length && i < param1B.length && i < param2A.length && i < param2B.length; i++) {
    let value1A = param1A[i];
    let value1B = param1B[i];
    let value2A = param2A[i];
    let value2B = param2B[i];

    (value1A === value1B || value2A === value2B) ? console.log('true') : console.log('false')
};


// OR assign variable manually

// const param1A = 'cake'
// const param1B = 'cake'
// const param2A = 'pie'
// const param2B = 'pie'

// if (param1A === param1B || param2A === param2B) {
//     console.log('true');
// } else {
//     console.log('false');
// }
