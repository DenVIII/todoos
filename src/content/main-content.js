import _manager from ".."
import { toggleNewTaskFormVisibility, setActiveTask, changeTaskStatus, toggleDescriptionInput, checkLength } from "../functions/domManipulations"
import { renderUserProjects } from "../functions/render"
import Task from "../modules/task"

function createMainContent() {
    const content = document.querySelector('#content')

    const taskList = document.createElement('div')
    const taskContainer = document.createElement('div')
    const deleteProjectBtn = document.createElement('a')
    const deleteTaskBtn = document.createElement('a')
    const listHeader = document.createElement('h2')
    const newTaskBtn = document.createElement('button')
    const taskDescr = document.createElement('div')
    const taskHeader = document.createElement('h3')
    const description = document.createElement('div')
    const descriptionInput = document.createElement('textarea')

    taskList.classList.add('task-list')
    deleteProjectBtn.href = '#'
    deleteProjectBtn.classList.add('delete','delete-project')
    deleteTaskBtn.href = '#'
    deleteTaskBtn.classList.add('delete','delete-task')
    taskContainer.classList.add('container')
    listHeader.classList.add('list-header')
    listHeader.textContent = 'Header'
    newTaskBtn.classList.add('new-task', 'btn')
    newTaskBtn.textContent = '+'
    taskList.append(deleteProjectBtn, listHeader, taskContainer, newTaskBtn)

    taskDescr.classList.add('task-description')
    taskHeader.classList.add('task-header')
    description.classList.add('description')
    descriptionInput.classList.add('description-input', 'hidden')
    descriptionInput.rows = '1'

    description.addEventListener('dblclick', toggleDescriptionInput)
    descriptionInput.addEventListener('input', checkLength)
    descriptionInput.addEventListener('keypress', updateTaskDescription)
    deleteProjectBtn.addEventListener('click', deleteProject)
    deleteTaskBtn.addEventListener('click', deleteTask)
    newTaskBtn.addEventListener('click', toggleNewTaskFormVisibility)
    taskDescr.append(deleteTaskBtn, taskHeader, description, descriptionInput)
    content.append(taskList, taskDescr)
}

function createTask(title, dueDate, id, completed) {
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
    if (completed) {
        checkbox.classList.add('checked')
    }
    checkbox.addEventListener('click', changeTaskStatus)
    return task
}

function renderTaskList(defaultProject) {
    return (e) => {
        let project
        if (!defaultProject) {
            _manager.updateDefaultProjects()
            _manager.updateLocalStorage()
            project = _manager.getProjectById(e.currentTarget.dataset.projectId)
        } else {
            project = defaultProject
        }
        clearTaskList()
        const taskList = document.querySelector('.task-list')
        const taskContainer = taskList.querySelector('.container')
        const listHeader = document.querySelector('.list-header')
        const newTaskBtn = document.querySelector('.new-task.btn')
        const deleteBtn = document.querySelector('.delete')

        newTaskBtn.dataset.projectId = project.getProjectId()
        listHeader.textContent = project.title
        project.getProject().forEach(task => {
            taskContainer.appendChild(createTask(task.getTitle(), task.getDueDate(), task.getTaskId(), task.getCompletionStatus()))
        });

        if (newTaskBtn.dataset.projectId[0] === '_') {
            newTaskBtn.classList.add('hidden')
            deleteBtn.classList.add('hidden')
        } else {
            newTaskBtn.classList.remove('hidden')
            deleteBtn.classList.remove('hidden')
        }

        const activeTask = project.getProject()[0]
        if (activeTask) {
            setActiveTask(project.getProject()[0])()
        } else {
            renderTaskDescription(new Task('Empty'))
        }
    }
}

function renderTaskDescription(task) {
    const taskDescription = document.querySelector('.task-description')
    const taskHeader = document.querySelector('.task-header')
    const description = taskDescription.querySelector('.description')

    taskHeader.textContent = task.title
    description.textContent = task.description
}

function deleteTask() {
    const activeProject = _manager.getProjectById(getActiveProjectId())
    const project = _manager.findProjectByTaskId(getActiveTaskId())

    project.deleteTask(getActiveTaskId())
    _manager.updateDefaultProjects()
    _manager.updateLocalStorage()
    renderTaskList(activeProject)()
}

function deleteProject() {
    _manager.deleteProject(getActiveProjectId())
    _manager.updateDefaultProjects()
    _manager.updateLocalStorage()
    renderUserProjects(_manager.getProjectsList())
    renderTaskList(_manager.getProjectById('_00'))()
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

function updateTaskDescription(e) {
    if (e.which !== 13) return
    const task = _manager.getProjectById(getActiveProjectId()).getTaskById(getActiveTaskId())
    const description = document.querySelector('.description-input').value
    
    task.setDescription(description)
    toggleDescriptionInput()
    renderTaskDescription(task)
    _manager.updateLocalStorage()
}

export { createMainContent, renderTaskList, getActiveProjectId, getActiveTaskId, renderTaskDescription }