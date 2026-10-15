const todoData = [
  {
    id: 1,
    title: "todo 1",
    completed: false
  },
  {
    id: 2,
    title: "todo 2",
    completed: false
  },
];
const itemTemplate = document.querySelector("#todo-item-template");
const todoList = document.querySelector("#todos");
let todoCount = 2; 

function main() {
  setupEventListeners();
  todoData.forEach((todo) => renderTodo(todo));
}

function setupEventListeners() {
  const todoInput = document.querySelector("#todo-input");
  const addTodoButton = document.querySelector("#todo-add");
  addTodoButton.addEventListener("click", () => {
    const title = todoInput.value;
    if (!title) {
      alert("Please enter a todo title!");
      return;
    }
    const todo = createTodo(title);
    renderTodo(todo);
    todoData.push(todo);
    
    todoInput.value = "";

    /* 使用updateTodoCount()更新paragraph element*/
  });

  
  /* 找到 Mark All Complete 的按鈕，並使用addEventListener()，在點擊按鈕時觸發toggleAllTodos() */

  /* 找到 Clear Completed 的按鈕，並使用addEventListener()，在點擊按鈕時觸發clearCompletedTodos() */
}

function renderTodo(todo) {
  const item = createTodoElement(todo);
  todoList.appendChild(item);
}

function createTodoElement(todo) {
  const item = itemTemplate.content.cloneNode(true);
  const container = item.querySelector(".todo-item");
  container.id = todo.id;
  console.log(todo);
  const checkbox = item.querySelector(`input[type="checkbox"]`);
  checkbox.checked = todo.completed;
  checkbox.dataset.id = todo.id;
  checkbox.addEventListener("change", () => {
    updateTodoElementStatus(todo.id);
  });
  const title = item.querySelector("p.todo-title");
  title.innerText = todo.title;
  const deleteButton = item.querySelector("button.delete-todo");
  deleteButton.dataset.id = todo.id;
  deleteButton.addEventListener("click", () => {
    deleteTodoElement(todo.id);
  });
  return item;
}
  

function deleteTodoElement(id) {
  const todoElement = document.getElementById(String(id));
  const checkbox = todoElement.querySelector(`input[type="checkbox"]`);

  /* 檢查checkbox是否被勾選，如果沒有的話，才要使用updateTodoCount()更新paragraph element */
  todoElement.remove();

  const todo = todoData.find((todo) => todo.id === id);
  todoData.splice(todoData.indexOf(todo), 1);
}

function updateTodoElementStatus(id) {
  const todoElement = document.getElementById(String(id));
  const checkbox = todoElement.querySelector('input[type="checkbox"]');

  /* 依checkbox是否被勾選，使用updateTodoCount()更新paragraph element*/

  const todo = todoData.find((todo) => todo.id === id);
  todo.completed = checkbox.checked;
}

function createTodo(title) {
  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    title: title,
    completed: false,
  };
  return newTodo;
}

function updateTodoCount(increment) {
  todoCount += increment;
  /* 
  找到"2 incomplete todos"的paragraph element所對應的id，使用
  document.querySelector() 和
  innerHTML屬性
  更新paragraph element 的內容
  */
  return;
}

function toggleAllTodos() {
  return;
  /*
  可使用下方程式碼實作，並填入[]的內容:

  todoData.[]((todo) => {
    if (!todo.completed){
      const todoElement = document.getElementById(String(todo.id));
      const checkbox = todoElement.querySelector(`input[type="checkbox"]`);
      [] --> 把checkbox打勾
      [] --> 使用updateTodoElementStatus()，更新todoData裡面todo.completed的值
    }
  });

  */
}

function clearCompletedTodos() {
  /* 
  1. 使用array的某個函式，得到一個新的array，裡面只包含todo.completed為true的todos
  2. 檢查新的array是否為空。如果不是，使用array的另一個函式以及deleteTodoElement()，刪除每個已完成的todo element
  */
}

main();
