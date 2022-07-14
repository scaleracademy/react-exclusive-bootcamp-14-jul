const incrementButton = document.getElementById("increment")
incrementButton.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  const next = Number(counter.innerText) + 1
  counter.innerText = next.toString()
})
