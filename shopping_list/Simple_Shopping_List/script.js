var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var button = document.createElement("button");
  button.className = "delete";
  button.innerText = "Delete";
  li.appendChild(button);

  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function() {
      var li = this.parentNode;
      li.style.display = "none";
    });
  }
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

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Create a "Delete" button and append it to each list item
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  var button = document.createElement("button");
  button.className = "delete";
  button.innerText = "Delete";
  li[i].appendChild(button);
}

// Click on a Delete button to hide the current list item
var deleteBtn = document.getElementsByClassName("delete");
for (var i = 0; i < deleteBtn.length; i++) {
  // var li = document.getElementsByTagName("li")[i];
  deleteBtn[i].addEventListener("click", function() {
    var li = this.parentNode;
    li.style.display = "none";
  });
}

// Add a "strike-through" when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});
