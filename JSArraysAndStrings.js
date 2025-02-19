// Array rotation
function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift(); 
        arr.push(firstElement);         
    }

    console.log(arr.join(' '));
}

// Print every N-th Element from an Array
function getElementsOnStep(arr, step) {
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}
// List Of Names
function printSortedNames(names) {
    names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}
// Sorting Numbers
function sortArray(arr) {
    arr.sort((a, b) => a - b);

    let result = [];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]);
        } else {
            result.push(arr[left]); 
            result.push(arr[right]);
        }
        left++;
        right--;
    }

    return result;
}
// Reveal Words
function replaceWordsInTemplate(words, template) {
    let wordArray = words.split(', ');

    let templateWords = template.split(' ');

    for (let i = 0; i < templateWords.length; i++) {
        let word = templateWords[i];

        if (word.includes('*')) {
            
            for (let j = 0; j < wordArray.length; j++) {
                if (wordArray[j].length === word.length) {
                    templateWords[i] = wordArray[j]; 
                    wordArray.splice(j, 1); 
                    break;
                }
            }
        }
    }

    return templateWords.join(' ');
}
// Modern Times of #(HashTag)
function findSpecialWords(input) {
    let regex = /#([a-zA-Z]+)/g;
    let matches;
    let result = [];

    while ((matches = regex.exec(input)) !== null) {
        result.push(matches[1]);
    }

    console.log(result.join('\n'));
}
// String Substring
function checkWordInText(word, text) {

    const regex = new RegExp(`\\b${word}\\b`, 'i');

    if (regex.test(text)) {
        console.log(word); 
    } else {
        console.log(`${word} not found!`); 
    }
}
// Pascal-Case Splitter
function splitPascalCase(str) {
    let words = str.replace(/([A-Z])/g, ' $1').trim().split(' ');

    console.log(words.join(', '));
}