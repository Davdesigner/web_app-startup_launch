const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTaskCompletion(this)">
      <span>${taskText}</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task');
  }
}

function toggleTaskCompletion(checkbox) {
  const taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.classList.add('completed');
  } else {
    taskText.classList.remove('completed');
  }
}
