import Manager from "../modules/projectsManager"
import Project from "../modules/project"
import Task from "../modules/task"
import { renderUserProjects } from "./render"
import _manager from ".." 

const processUserInput = (e) => {
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

export {toggleInputVisibility, processUserInput}