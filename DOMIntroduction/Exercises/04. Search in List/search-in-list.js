function solve() {
   let searchText = document.getElementById("searchText").value.toLowerCase();
   let towns = Array.from(document.querySelectorAll("#towns li"));
   let matchCount = 0;

   towns.forEach(town => {
       town.style.fontWeight = "normal";
       town.style.textDecoration = "none";
   });

   towns.forEach(town => {
       if (town.textContent.toLowerCase().includes(searchText) && searchText !== "") {
           town.style.fontWeight = "bold";
           town.style.textDecoration = "underline";
           matchCount++;
       }
   });

   document.getElementById("result").textContent = `${matchCount} matches found`;
}