document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let submit = document.querySelector('input[type="submit"]');
   submit.addEventListener('click', addContent);

   function addContent(e) {
      e.preventDefault();

      let data = document.querySelector('input[type="text"]').value;
      let sections = data.split(', ');
      let content = document.getElementById('content');

      for (let section of sections) {
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = section;
         div.appendChild(p);

         content.appendChild(div);
      }
   }
}