// Smallest of Three Numbers
function findSmallestNumber(a, b, c) {

    console.log(Math.min(a, b, c));
  }
// Add and Subtract
function subtract(a, b, c) {
    function sum(a, b) {
      return a + b;
  }
      let result = sum(a, b); 
      return result - c;  
  }
// Characters in Range
function printCharactersInRange(char1, char2) {
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}
//  Odd And Even Sum
function sumOddAndEvenDigits(number) {
    let numberStr = number.toString(); 
    let oddSum = 0;
    let evenSum = 0;

    for (let char of numberStr) {
        let digit = parseInt(char); 

        if (digit % 2 === 0) { 
            evenSum += digit;
        } else { 
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
// Palindrome Integers
function checkPalindrome(arr) {
    for (let number of arr) {

        let numStr = number.toString();
        let reversedStr = numStr.split('').reverse().join(''); 

        if (numStr === reversedStr) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
// Password Validator
function validatePassword(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]*$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if ((password.match(/\d/g) || []).length < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}
// NxN Matrix
function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = Array(n).fill(n).join(' ');
        console.log(row);
    }
}
// Perfect Number
function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i; 
        }
    }
    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
// Loading Bar
function visualizeLoadingBar(percentage) {
    let percentSymbols = '%'.repeat(percentage / 10);  
    let dotSymbols = '.'.repeat(10 - (percentage / 10)); 

    let loadingBar = `[${percentSymbols}${dotSymbols}]`;

    if (percentage === 100) {
        console.log("100% Complete!");
        console.log(loadingBar);
    } else {
        console.log(`${percentage}% ${loadingBar}`);
        console.log("Still loading...");
    }
}
// Factorial Division
function divideFactorials(num1, num2) {
    function calculateFactorial(n) {
      let factorial = 1;
      for (let i = 1; i <= n; i++) {
          factorial *= i;
      }
      return factorial;
  }
      let factorial1 = calculateFactorial(num1);
      let factorial2 = calculateFactorial(num2);
      
      let result = factorial1 / factorial2;
      console.log(result.toFixed(2));
  }