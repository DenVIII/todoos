import { renderTaskList } from "../content/main-content";

function renderUserProjects(projectsList = '') {
    clearUserProjects()
    const projectInput = document.querySelector('.new-project-input')

    for (let i = 4, n = projectsList.length; i < n; i++) {
        const project = projectsList[i]
        const newLine = document.createElement('li')
        newLine.textContent = project.getTitle()
        newLine.dataset.projectId = project.getProjectId()
        newLine.addEventListener('click', renderTaskList())
        projectInput.before(newLine)
    }
}

function clearUserProjects() {
    const userProjectsList = document.querySelector('.user-projects').querySelectorAll('li')

    userProjectsList.forEach((project) => project.remove())
}

export { renderUserProjects }