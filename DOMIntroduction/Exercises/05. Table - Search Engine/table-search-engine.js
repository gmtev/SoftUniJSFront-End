function solve() {
   let searchField = document.getElementById("searchField");
   let searchText = searchField.value.toLowerCase();
   let rows = Array.from(document.querySelectorAll("tbody tr"));

   rows.forEach(row => row.classList.remove("select"));

   if (searchText !== "") {
       rows.forEach(row => {
           let cells = Array.from(row.getElementsByTagName("td"));
           if (cells.some(cell => cell.textContent.toLowerCase().includes(searchText))) {
               row.classList.add("select");
           }
       });
   }

   searchField.value = "";
}
// another solution
function solve() {
    let rows = document.querySelectorAll('.container tbody tr');
    let input = document.getElementById('searchField');

    let pattern = input.value;

    if (!pattern) {
        return;
    }

    for (let row of rows) {
        if (row.textContent.includes(pattern)) {
            row.classList.add('select');
        } else {
            row.classList.remove('select');
        }
    }

    input.value ='';
}