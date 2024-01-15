import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let taskIdCounter = 1;

function createTaskElement(taskText) {
  const taskContainer = document.createElement('div');
  taskContainer.className = 'task';
  taskContainer.dataset.taskId = taskIdCounter++;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskContainer.remove();
  });

  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(taskTextElement);
  taskContainer.appendChild(deleteButton);

  return taskContainer;
}

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = 'Enter a new task';

  const addButton = document.createElement('button');
  addButton.id = 'addTaskBtn';
  addButton.textContent = 'Add Task';
  addButton.addEventListener('click', () => {
    const taskText = inputElement.value.trim();
    if (taskText !== '') {
      const taskElement = createTaskElement(taskText);
      appContainer.appendChild(taskElement);
      inputElement.value = '';
    }
  });

  appContainer.appendChild(inputElement);
  appContainer.appendChild(addButton);
});
