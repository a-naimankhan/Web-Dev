const form = document.getElementById("input");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = [];

const deleteIcon = "/lab3/task2/assets/trash-can-logo.png";

function renderTask() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("task-checkbox");

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTask();
    });

    const text = document.createElement("span");
    text.textContent = task.text;
    text.classList.add("task-text");

    if (task.completed) {
      text.classList.add("completed");
    }

    const deleteBtn = document.createElement("img");
    deleteBtn.src = deleteIcon;
    deleteBtn.alt = "delete";
    deleteBtn.classList.add("task-delete");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index > -1) {
        tasks.splice(index, 1);
        renderTask();
      }
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  tasks.push({
    id: Date.now(),
    text: taskText,
    completed: false,
  });

  input.value = "";
  renderTask();
});
