function buildNewTodo(value) {
    const todoList = document.querySelector('#todo-list ul');
    // create li element 
    const parentLi = document.createElement('li');

    // create todo title 
    const todoSpanTitle = document.createElement('span');
    todoSpanTitle.textContent = value;
    const randomId = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
    parentLi.setAttribute('id', randomId);
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('actions');
    deleteButton.addEventListener('click', () => {
        deleteTodo(randomId);
    });
    // create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('actions');
    // add title and delete and edit to li
    editButton.addEventListener('click', () => {
       editTodo(randomId);
    });
    parentLi.append(todoSpanTitle, deleteButton, editButton);
    todoList.append(parentLi);
}


function addButtons(randomId){
  const parentLi = document.getElementById(`${randomId}`);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.classList.add('actions');
  deleteButton.addEventListener('click', () => {
      deleteTodo(randomId);
  });
  // create edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  editButton.classList.add('actions');
  // add title and delete and edit to li
  editButton.addEventListener('click', () => {
     editTodo(randomId);
  });
  parentLi.append(deleteButton, editButton);

}

function deleteTodo(randomId) {
    const todoItem1 = document.getElementById(`${randomId}`);
    todoItem1.remove();
}

function addNewTodo() {
    const todoItem = document.getElementById('todo-item');
    const warning = document.getElementById('warning');
    const todoItemValue = todoItem.value;
    if (!todoItemValue.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }
    buildNewTodo(todoItemValue);
    todoItem.value = '';
}


function editTodo(randomId){
    let editText = prompt("Please edit the item", "");
    if (editText == null || editText == "") {
      alert('user cancelled the edit process');
    } else {

      const item = document.getElementById(`${randomId}`);
      item.innerText = editText;
      addButtons(randomId);
      alert('success');
    }
    
  }


  function search(){
    let input = document.getElementById('Sbutton');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('main-list');
    li = ul.getElementsByTagName('li');
    let txtValue;


    for(i =0; i< li.length; i++){
        txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    }


  }

