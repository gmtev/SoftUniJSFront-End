function colorize() {
    let rows = document.querySelectorAll('tbody tr:nth-child(even)');

    for (let row of rows) {
        row.style.backgroundColor = 'teal';
    }
}
// function colorize() {
//     let rows = document.querySelectorAll('table tr');
//     let index = 0;

//     for (let row of rows) {
//         index++;
//         if (index % 2 == 0)
//             row.style.backgroundColor = 'teal';
//     }
// }