document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            if (task.completed) li.classList.add("completed");

            // Toggle completion
            li.addEventListener("click", () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
            });

            // Remove task
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Function to save tasks
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }

    // Add task event
    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            tasks.push({ text: taskInput.value, completed: false });
            saveTasks();
            taskInput.value = "";
        }
    });

    // Initial rendering
    renderTasks();
});
