function test() {
  console.log("Test");
}
test();

const desc = document.getElementById(".description");
desc.addEventListener("click", () => {
  alert("Ok");
});
