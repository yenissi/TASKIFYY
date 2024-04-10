document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
  
        if (taskText !== "") {
            const li = document.createElement("li");
  
            // Create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    li.style.textDecoration = "line-through";
                } else {
                    li.style.textDecoration = "none";
                }
            });
            
  
            // Create label for checkbox
            const label = document.createElement("label");
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(taskText));
  
            // Create edit button
            const editButton = document.createElement("button");
            editButton.innerHTML = '<i class="fas fa-edit"></i>';
            editButton.addEventListener("click", function() {
                const newTaskText = prompt("Enter the new task text:");
                if (newTaskText !== null && newTaskText.trim() !== "") {
                    label.textContent = newTaskText;
                }
            });
  
            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });
  
            // Set color of delete button's icon
            deleteButton.querySelector("i").style.color = "red";
            editButton.querySelector("i").style.color = "blue";
            
  
            // Append elements to list item
            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
  
            // Append list item to task list
            taskList.appendChild(li);
            taskInput.value = ""; // Clear input field after adding task
        } else {
            alert("Input Task to Proceed");
        }
    });
  });