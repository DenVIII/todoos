import Project from "../modules/project"
import { renderUserProjects } from "./render"
import _manager from ".." 
import { getActiveProjectId, renderTaskDescription} from "../content/main-content"

const addNewProject = (e) => {
    const newProjInput = document.querySelector('#new-project-input')
    if (e.which !== 13) return 
    if (newProjInput.value === '') return

    const userProject = new Project(newProjInput.value)

    _manager.addNewProject(userProject)
    renderUserProjects(_manager.getProjectsList())
    toggleInputVisibility()
}

function toggleInputVisibility() {
    const projectInput = document.querySelector('.new-project-input')
    projectInput.querySelector('input').value = ''
    projectInput.classList.toggle('hidden')
}

function toggleNewTaskFormVisibility() {
    const newTaskForm = document.querySelector('body>.wrapper')
    newTaskForm.classList.toggle('hidden')
}

function setActiveTask(defaultTask) {
    return (e) => {
        let currentTask, taskId
        if (!defaultTask) {
            taskId = e.currentTarget.dataset.taskId
            currentTask = _manager.getProjectById(getActiveProjectId()).getTaskById(taskId)
        } else {
            currentTask = defaultTask
            taskId = currentTask.getTaskId()
        }
        const tasksList = document.querySelectorAll('.task.btn')
        tasksList.forEach(task => task.classList.remove('active'))
        tasksList.forEach(task => {
            if (task.dataset.taskId === taskId) {
                task.classList.add('active')
            }
        })
        renderTaskDescription(currentTask)
    }
}

function changeTaskStatus(e) {
    const statusBtn = e.currentTarget
    const taskBtn = e.currentTarget.parentNode
    const task = _manager.getProjectById(getActiveProjectId()).getTaskById(taskBtn.dataset.taskId)

    if (!task.getCompletionStatus()) {
        statusBtn.classList.add('checked')
        task.chageCompletionStatus()
    } else {
        statusBtn.classList.remove('checked')
        task.chageCompletionStatus()
    }
}

export {toggleInputVisibility, addNewProject, toggleNewTaskFormVisibility, setActiveTask, changeTaskStatus}