
async function loadTasks() {
  const taskList = document.getElementById("task-list");

  try {
    const response = await fetch("/api/tasks");

    if (!response.ok) {
      throw new Error("Não foi possível carregar as tarefas");
    }

    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const item = document.createElement("div");
      item.className = "task";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-check";
      checkbox.checked = task.done;

      const title = document.createElement("span");
      title.className = "task-title";
      title.textContent = task.title;

      if (task.done) {
        title.classList.add("done");
      }

      const category = document.createElement("span");
      category.className = "task-category";
      category.textContent = task.category;

      checkbox.addEventListener("change", () => {
        title.classList.toggle("done", checkbox.checked);
        updateStats();
      });

      item.appendChild(checkbox);
      item.appendChild(title);
      item.appendChild(category);

      taskList.appendChild(item);
    });

    updateStats();
  } catch (error) {
    taskList.innerHTML = "<p>Erro ao carregar as tarefas.</p>";
    console.error(error);
  }
}

function updateStats() {
  const checkboxes = document.querySelectorAll(".task-check");
  const total = checkboxes.length;

  const completed = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  ).length;

  const pending = total - completed;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("completed-count").textContent = completed;
  document.getElementById("pending-count").textContent = pending;
  document.getElementById("progress-count").textContent = progress + "%";
}

loadTasks();
