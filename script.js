
// for selecting the html tags
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

    // eventListen for reaction on it
addTaskBtn.addEventListener('click', addValue);

function addValue() {
    if(newTaskInput.value) {
        addTask(newTaskInput.value);
    }
    else {
        alert("Task is required")
    }
    newTaskInput.value = '';
}



function addTask(taskText) {

    const taskItem = document.createElement('div');

    // create a class and give it to values
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <input type="text" class="task-text" value="${taskText}">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
        <button class="btn btn-select">Select</button>
    `;

    taskList.appendChild(taskItem);

    const btnEdit = taskItem.querySelector('.btn-edit');
    const btnDelete = taskItem.querySelector('.btn-delete');
    const btnSelect = taskItem.querySelector('.btn-select');
    const taskTextElement = taskItem.querySelector('.task-text');


    btnEdit.addEventListener('click', function() {
        
        taskTextElement.disabled = !taskTextElement.disabled;
        if (!taskTextElement.disabled) {
        taskTextElement.focus();
        }
        btnEdit.textContent = taskTextElement.disabled ? 'Edit' : 'Save';
    });

        // delete the task here
    btnDelete.addEventListener('click', function() {
        taskItem.remove();
    });

        // selecting the task
    btnSelect.addEventListener('click', function() {
        taskItem.classList.toggle('selected');
    });
}