const addTaskContainer = document.getElementById("add-task-container");
const modalOverlay = document.getElementById('modal-overlay');
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDueDateInput = document.getElementById('task-due-date');
const taskPriorityInput = document.getElementById('task-priority');
const taskAssigneeInput = document.getElementById('task-assignee');

const tasks = [];

const closeModal = () => {
    if (modalOverlay.classList.contains('modal-overlay-visible')) {
        modalOverlay.classList.remove('modal-overlay-visible');
        modalOverlay.classList.add('modal-overlay');
    }
};

addTaskContainer.addEventListener('click', () => {
    modalOverlay.classList.remove('modal-overlay');
    modalOverlay.classList.add('modal-overlay-visible');
    taskTitleInput.focus();
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = {
        id: Date.now(),
        title: taskTitleInput.value,
        description: taskDescriptionInput.value,
        dueDate: taskDueDateInput.value,
        priority: taskPriorityInput.value,
        assignee: taskAssigneeInput.value,
        status: 'todo', // Default status
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskForm.reset();
    closeModal();
});

const closeIcon = document.getElementById('close-icon');
if (closeIcon) {
    closeIcon.addEventListener('click', closeModal);
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});