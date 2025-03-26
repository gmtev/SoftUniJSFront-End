// function solve() {
//    let searchText = document.getElementById("searchText").value.toLowerCase();
//    let towns = Array.from(document.querySelectorAll("#towns li"));
//    let matchCount = 0;

//    towns.forEach(town => {
//        town.style.fontWeight = "normal";
//        town.style.textDecoration = "none";
//    });

//    towns.forEach(town => {
//        if (town.textContent.toLowerCase().includes(searchText) && searchText !== "") {
//            town.style.fontWeight = "bold";
//            town.style.textDecoration = "underline";
//            matchCount++;
//        }
//    });

//    document.getElementById("result").textContent = `${matchCount} matches found`;
// }

function solve() {
    let list = document.getElementById('towns');
    let input = document.getElementById('searchText');
    let output = document.getElementById('result');
    let matches = 0;
    let pattern = input.value;

    for (let row of list.children) {
        if (row.textContent.includes(pattern)) {
            row.style.fontWeight = 'bold';
            row.style.textDecoration = 'underline';
            matches++;
        } else {
            row.style.fontWeight = '';
            row.style.textDecoration = '';
        }
    }
    output.textContent = `${matches} matches found`;
}