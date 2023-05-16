const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');

    todoTextSpan.textContent = todoText;
    deleteButton.textContent = 'Eliminar';
    completeButton.textContent = 'Completado';

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(completeButton);

    todoList.appendChild(todoItem);

    todoInput.value = '';
  }
});

todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const todoItem = e.target.parentNode;

    if (e.target.textContent === 'Eliminar') {
      todoList.removeChild(todoItem);
    } else if (e.target.textContent === 'Completado') {
      todoItem.classList.toggle('completed');
      e.target.classList.toggle('completed-button'); // Agregar o quitar la clase 'completed-button' al botón Completado
    }
  }
});
