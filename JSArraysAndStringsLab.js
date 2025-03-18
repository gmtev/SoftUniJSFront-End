// Sum First and Last Array Elements
function solve(arr) {
    let sum = arr[0] + arr[arr.length - 1];
    console.log(sum);
}
// Reverse an Array of Numbers
function solve(n, arr) {
    let subArray = arr.slice(0, n);
    subArray.reverse();
    console.log(subArray.join(' '));
}
// Even and Odd Subtraction
function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}
// Substring
function solve(str, startIndex, count) {
    let result = str.substring(startIndex, startIndex + count);
    console.log(result);
}
// Censored Words
function solve(text, word) {
    function repeat(word) {
        return '*'.repeat(word.length);
    }

    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);
}
// Count String Occurrences
function solve(text, word) {
    let words = text.split(' ');
    let counter = 0;

    for (let w of words) {
        if (w === word) {
            counter++; 
        }
    }

    console.log(counter);
}