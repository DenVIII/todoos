import _manager from ".."

function createMainContent() {
    const content = document.querySelector('#content')

    const taskList = document.createElement('div')
    const deleteBtn = document.createElement('a')
    const listHeader = document.createElement('h2')
    const newTaskBtn = document.createElement('button')
    const taskDescr = document.createElement('div')
    const taskHeader = document.createElement('h3')
    const description = document.createElement('div')

    taskList.classList.add('task-list')
    deleteBtn.href = '#'
    deleteBtn.classList.add('delete')
    listHeader.classList.add('list-header')
    listHeader.textContent = 'Header'
    newTaskBtn.classList.add('new-task', 'btn')
    newTaskBtn.textContent = '+'
    taskList.append(deleteBtn, listHeader, newTaskBtn)

    taskDescr.classList.add('task-description')
    taskHeader.classList.add('task-header')
    taskHeader.textContent = 'Header'
    description.classList.add('description')
    description.innerHTML = `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia odit necessitatibus omnis consectetur quaerat assumenda optio hic a perspiciatis.
        </p>
        <br>
        <p> 
            Voluptas soluta dolores quia! Aut! Quam rerum similique
        </p>
    `
    taskDescr.append(deleteBtn, taskHeader, description)
    content.append(taskList,taskDescr)
}

function createTask(title, dueDate) {
    const task = document.createElement('div')
    const checkbox = document.createElement('button')
    const container = document.createElement('div')
    const taskTitle = document.createElement('p')
    const taskDueDate = document.createElement('p')
    task.classList.add('task', 'btn')
    checkbox.classList.add('task-checkbox')

    taskTitle.textContent = title
    taskDueDate.textContent = dueDate
    taskTitle.classList.add('task-name')
    taskDueDate.classList.add('due-date')

    container.append(taskTitle, taskDueDate)
    task.append(container, checkbox)
    return task
}

/* function renderDefaultProject(defaultProject) {
    console.log(defaultProject)
    const taskList = document.querySelector('.task-list')
    const listHeader = document.querySelector('.list-header')

    listHeader.textContent = defaultProject.title
    defaultProject.getProject().forEach(task => {
        taskList.appendChild(createTask(task.title, task.dueDate))
    });
}

function renderTaskList(e) {
    if (!e) return
    const project = _manager.getProjectById(e.currentTarget.dataset.projectId)
    const taskList = document.querySelector('.task-list')
    const listHeader = document.querySelector('.list-header')

    listHeader.textContent = project.title
    project.getProject().forEach(task => {
        taskList.appendChild(createTask(task.title, task.dueDate))
    });
} */

function renderTaskList(defaultProject) {
    return (e) => {
        let project
        if (!defaultProject) {
            project = _manager.getProjectById(e.currentTarget.dataset.projectId)
        } else {
            project = defaultProject
        }

        const taskList = document.querySelector('.task-list')
        const listHeader = document.querySelector('.list-header')
        listHeader.textContent = project.title
        project.getProject().forEach(task => {
            taskList.appendChild(createTask(task.title, task.dueDate))
        });
    }
}

export { createMainContent, renderTaskList }