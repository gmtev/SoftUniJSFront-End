function solve() {
  let inputText = document.getElementById("input").value.trim();
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; 

  let sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

  let paragraph = "";
  for (let i = 0; i < sentences.length; i++) {
      paragraph += sentences[i].trim() + "."; 

      if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
          let p = document.createElement("p");
          p.textContent = paragraph;
          outputDiv.appendChild(p);
          paragraph = "";
      }
  }
}
