// Ages
function determineAgeCategory(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age >= 3 && age <= 13) {
        console.log("child");
    } else if (age >= 14 && age <= 19) {
        console.log("teenager");
    } else if (age >= 20 && age <= 65) {
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}
// Vacation
function calculateTotalPrice(peopleCount, groupType, day) {
    let pricePerPerson;

    const prices = {
        "Students": { "Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46 },
        "Business": { "Friday": 10.90, "Saturday": 15.60, "Sunday": 16.00 },
        "Regular": { "Friday": 15.00, "Saturday": 20.00, "Sunday": 22.50 }
    };

    if (prices[groupType] && prices[groupType][day]) {
        pricePerPerson = prices[groupType][day];
    } else {
        console.log("Invalid input");
        return;
    }

    let totalPrice = peopleCount * pricePerPerson;

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85; 
    } else if (groupType === "Business" && peopleCount >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
// Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
// Print and Sum
function displayNumbersAndSum(start, end) {
    let sum = 0;
    let numbers = "";

    for (let i = start; i <= end; i++) {
        numbers += i + " ";
        sum += i;
    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}
// Multiplication table
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}
// Sum digits
function sumOfDigits(number) {
    let sum = 0;
    let numStr = number.toString();

    for (let digit of numStr) {
        sum += Number(digit);
    }

    console.log(sum);
}
// Chars to String
function concatenateChars(char1, char2, char3) {
    console.log(char1 + char2 + char3);
}
// Reversed Chars
function reverseAndPrint(char1, char2, char3) {
    console.log(`${char3} ${char2} ${char1}`);
}
// Fruit
function calculateFruitCost(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000; 
    let totalCost = weightInKg * pricePerKg; 

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
// Same numbers
function checkSameDigitsAndSum(number) {
    let numStr = number.toString();
    let firstDigit = numStr[0];
    let sum = 0;
    let allSame = true;

    for (let digit of numStr) {
        sum += Number(digit);
        if (digit !== firstDigit) {
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(sum);
}
// Road Radar
function checkSpeed(speed, area) {
    let speedLimit;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            console.log("Invalid area");
            return;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let difference = speed - speedLimit;
        let status;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
// Cooking by Numbers
function performOperations(startingNumber, operation1, operation2, operation3, operation4, operation5) {
    let number = Number(startingNumber);

    function chop(num) {
        return num / 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return num + 1;
    }

    function bake(num) {
        return num * 3;
    }

    function fillet(num) {
        return num - num * 0.2;
    }

    let operations = [operation1, operation2, operation3, operation4, operation5];
    for (let operation of operations) {
        if (operation === 'chop') {
            number = chop(number);
        } else if (operation === 'dice') {
            number = dice(number);
        } else if (operation === 'spice') {
            number = spice(number);
        } else if (operation === 'bake') {
            number = bake(number);
        } else if (operation === 'fillet') {
            number = fillet(number);
        }
        console.log(number);
    }
}