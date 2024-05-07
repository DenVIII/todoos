import Project from "../modules/project"
import { renderUserProjects } from "./render"
import _manager from ".." 
import { getActiveProjectId } from "../content/main-content"

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

function setActiveTask(e) {
    const tasks = document.querySelectorAll('.task.btn')
    tasks.forEach(task => task.classList.remove('active'))
    e.currentTarget.classList.add('active')
}

export {toggleInputVisibility, addNewProject, toggleNewTaskFormVisibility, setActiveTask}