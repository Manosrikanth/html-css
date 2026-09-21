const original = document.getElementById("original");
const output = document.getElementById("output");


document.getElementById("btnCreate").addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = "New element made with createElement()";
  output.appendChild(div);
});


document.getElementById("btnCloneDeep").addEventListener("click", () => {
  const copy = original.cloneNode(true);
  copy.removeAttribute("id"); // ids must stay unique
  output.appendChild(copy);
});


document.getElementById("btnCloneShallow").addEventListener("click", () => {
  const copy = original.cloneNode(false);
  copy.removeAttribute("id");
  copy.textContent = "(shallow clone: children were not copied)";
  output.appendChild(copy);
});