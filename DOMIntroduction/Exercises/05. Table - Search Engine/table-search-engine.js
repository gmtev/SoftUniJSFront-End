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