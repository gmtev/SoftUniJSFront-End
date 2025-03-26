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
// another solution
function solve() {
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(s => s.trim() !== '');
  let result = [];

  for (let i = 0; i < sentences.length; i += 3) {
    let pSentences = sentences.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
    let p = `<p>${pSentences}</p>`;
    result.push(p);
  }

  document.getElementById('output').innerHTML = result.join('\n');
}