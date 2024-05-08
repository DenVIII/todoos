import _manager from ".."
import { toggleNewTaskFormVisibility, setActiveTask } from "../functions/domManipulations"

function createMainContent() {
    const content = document.querySelector('#content')

    const taskList = document.createElement('div')
    const taskContainer = document.createElement('div')
    const deleteBtn = document.createElement('a')
    const listHeader = document.createElement('h2')
    const newTaskBtn = document.createElement('button')
    const taskDescr = document.createElement('div')
    const taskHeader = document.createElement('h3')
    const description = document.createElement('div')

    taskList.classList.add('task-list')
    deleteBtn.href = '#'
    deleteBtn.classList.add('delete')
    taskContainer.classList.add('container')
    listHeader.classList.add('list-header')
    listHeader.textContent = 'Header'
    newTaskBtn.classList.add('new-task', 'btn')
    newTaskBtn.textContent = '+'
    taskList.append(deleteBtn, listHeader, taskContainer, newTaskBtn)

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
    newTaskBtn.addEventListener('click', toggleNewTaskFormVisibility)
    taskDescr.append(deleteBtn, taskHeader, description)
    content.append(taskList,taskDescr)
}

function createTask(title, dueDate, id) {
    const task = document.createElement('div')
    const checkbox = document.createElement('button')
    const container = document.createElement('div')
    const taskTitle = document.createElement('p')
    const taskDueDate = document.createElement('p')
    task.classList.add('task', 'btn')
    task.dataset.taskId = id
    checkbox.classList.add('task-checkbox')

    taskTitle.textContent = title
    taskDueDate.textContent = dueDate
    taskTitle.classList.add('task-name')
    taskDueDate.classList.add('due-date')

    container.append(taskTitle, taskDueDate)
    task.append(container, checkbox)
    task.addEventListener('click', setActiveTask())
    return task
}

function renderTaskList(defaultProject) {
    return (e) => {
        let project
        if (!defaultProject) {
            project = _manager.getProjectById(e.currentTarget.dataset.projectId)
        } else {
            project = defaultProject
        }
        clearTaskList()
        const taskList = document.querySelector('.task-list')
        const taskContainer = taskList.querySelector('.container')
        const listHeader = document.querySelector('.list-header')
        const newTaskBtn = document.querySelector('.new-task.btn')

        newTaskBtn.dataset.projectId = project.getProjectId()
        listHeader.textContent = project.title
        project.getProject().forEach(task => {
            taskContainer.appendChild(createTask(task.getTitle(), task.getDueDate(), task.getTaskId()))
        });
        setActiveTask(project.getProject()[0])()
        /* Добавить рендер пустой страницы описания таска(когда у нас новый проект пустой) */
    }
}

function renderTaskDescription(task) {
    const taskDescription = document.querySelector('.task-description')
    const taskHeader = document.querySelector('.task-header')
    const description = taskDescription.querySelector('.description')

    taskHeader.textContent = task.title
    description.textContent = task.description
}

function clearTaskList() {
    const taskContainer = document.querySelector('.task-list').querySelector('.container')
    taskContainer.innerHTML = ''
}

function getActiveProjectId() {
    return document.querySelector('.new-task.btn').dataset.projectId
}

function getActiveTaskId() {
    return document.querySelector('.task.btn.active').dataset.taskId
}

export { createMainContent, renderTaskList, getActiveProjectId, getActiveTaskId, renderTaskDescription }