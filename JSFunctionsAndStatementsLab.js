// Format Grade
function solve (grade) {
    if (grade < 3.00) {
        console.log('Fail (2)')
    } else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`)
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`)
    }
}
// Math Power
function solve (number, power) {
    let result = Math.pow(number, power);
    console.log(result);
}
// Repeat String
function solve (str, n) {
    return str.repeat(n);
}
// Orders
function solve (product, quantity) {
    let prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    if (prices[product]) {
        let totalPrice = prices[product] * quantity;
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("Invalid product");
    }
}
// Simple Calculator
function solve (numOne, numTwo, operator) {
    let operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
    return operations[operator](numOne, numTwo);
};
// Sign Check
function solve (numOne, numTwo, numThree) {
    let negativeCount = 0;

    if (numOne < 0) negativeCount++;
    if (numTwo < 0) negativeCount++;
    if (numThree < 0) negativeCount++;

    if (negativeCount % 2 === 1) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}