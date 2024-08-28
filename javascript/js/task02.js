const button = document.getElementById("changeTextButton");

button.addEventListener("click", function () {
  const textElement = document.getElementById("myText");

  textElement.textContent = "Hello, Check!";
});
