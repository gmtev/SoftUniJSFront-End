function solve() {
    
    let number = Number(document.getElementById('input').value);
    let convertion = document.getElementById('selectMenuTo').value;

    let result = '';

    if (convertion === 'binary') {
        result = number.toString(2);
    } else if (convertion === 'hexadecimal') {
        result = number.toString(16).toUpperCase();
    }

    document.getElementById('result').value = result;
}