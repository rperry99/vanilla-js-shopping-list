var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
let deleteButton = document.querySelectorAll('.delete');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  let newButton = document.createElement('button');
  newButton.className = 'delete';
  newButton.innerHTML = 'Delete';
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(newButton);
  ul.appendChild(li);
  input.value = '';
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

function taskHandler(e) {
  let item = e.target;
  if (item.tagName === 'LI') {
    item.classList.toggle('done');
  }
  if (item.className === 'delete') {
    let toDelete = item.parentNode;
    toDelete.parentNode.removeChild(toDelete);
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

ul.addEventListener('click', taskHandler);
