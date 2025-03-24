function sumTable() {
    let rows = Array.from(document.querySelectorAll('table tr'));
    rows.shift();
    let output = rows.pop(); // to remove both the first and last row

    let sum = 0;

    for (let row of rows) {
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent)
    }

    let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum;
}

// function sumTable() {
//     let table = document.querySelectorAll('table tr');
//     let sum = 0;

//     for (let i=1; i < table.length; i++) {
//         let cols = table[i].children;
//         let cost = cols[cols.length - 1].textContent;
//         sum += Number(cost);
//     }

//     document.getElementById('sum').textContent = sum
// }