// Multiply Number by 2
function solve (num) {
    console.log(num * 2);
}
// Student Information
function solve (name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
// Excellent Grade
function solve (grade) {
    if (grade >= 5.50) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}
// Month Printer
function solve(number) {
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (number >= 1 && number <= 12) {
        console.log(months[number - 1]);
    } else {
        console.log("Error!");
    }
}
// Math Operations
function solve(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
        default:
            console.log("Invalid operator");
    }
}
// Largest Number
function solve(num1, num2, num3) {
    let largest = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largest}.`);
}
// Theatre Promotions
function solve(dayType, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    let price;

    if (dayType === "Weekday") {
        if (age <= 18) price = 12;
        else if (age <= 64) price = 18;
        else price = 12;
    } else if (dayType === "Weekend") {
        if (age <= 18) price = 15;
        else if (age <= 64) price = 20;
        else price = 15;
    } else if (dayType === "Holiday") {
        if (age <= 18) price = 5;
        else if (age <= 64) price = 12;
        else price = 10;
    }

    console.log(price ? `${price}$` : "Error!");
}
// Circle Area
function solve(input) {
    if (typeof input === "number") {
        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
// Numbers From 1 To 5
function solve() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// Numbers From M To N
function solve(M, N) {
    for (let i = M; i >= N; i--) {
        console.log(i);
    }
}