const tasks = [];
const formTask = document.getElementById('formTask');
const nameTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Visualizar tareas
function getTask() {
    taskList.innerHTML = ''; 
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.textContent = tasks[i];
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            deleteTask(i); 
        });
        
        li.appendChild(deleteButton); 
        taskList.appendChild(li);
    }
}

// Añadir tarea
function AddTask(event) {
    event.preventDefault(); 
    const task = nameTask.value.trim(); 
    if (task) {
        tasks.push(task); 
        nameTask.value = ''; 
        getTask();
    }
}

// Eliminar tarea
function deleteTask(index) {
    tasks.splice(index, 1); 
    getTask(); 
}

formTask.addEventListener('submit', AddTask);

GetTask();
deleteTask()
