var userInput = document.getElementById("userInput");
var enterBtn = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
  return userInput.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enterBtn.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
