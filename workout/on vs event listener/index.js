const log = document.getElementById("log");
const print = (msg) => (log.textContent += msg + "\n");

// ---------- onevent property: only ONE handler, the last one wins ----------
const btnOn = document.getElementById("btnOn");

btnOn.onclick = () => print("onclick handler A");
btnOn.onclick = () => print("onclick handler B (A was overwritten)");

// ---------- addEventListener: MANY handlers, all of them run ----------
const btnListener = document.getElementById("btnListener");

function handlerA() {
  print("listener A");
}

function handlerB() {
  print("listener B");
}

btnListener.addEventListener("click", handlerA);
btnListener.addEventListener("click", handlerB); // both A and B run

// 'once' option: runs a single time, then removes itself
btnListener.addEventListener("click", () => print("listener C (once only)"), { once: true });

// ---------- removing a listener (needs the SAME function reference) ----------
document.getElementById("btnRemove").addEventListener("click", () => {
  btnListener.removeEventListener("click", handlerA);
  print("Removed listener A");
});

// ---------- clear the log ----------
document.getElementById("btnClear").addEventListener("click", () => {
  log.textContent = "";
});