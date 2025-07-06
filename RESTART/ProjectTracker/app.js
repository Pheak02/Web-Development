// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', loadTasksFromStorage);

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  addTaskToDOM(taskText);
  saveTaskToStorage(taskText);
  taskInput.value = '';
});

// Add task to DOM
function addTaskToDOM(taskText) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-list__item';

  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'task-list__delete';
  deleteBtn.textContent = '✕';

  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
    deleteTaskFromStorage(taskText);
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Save to localStorage
function saveTaskToStorage(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete from localStorage
function deleteTaskFromStorage(task) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Load saved tasks
function loadTasksFromStorage() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => addTaskToDOM(task));
}
