import { renderTaskList } from "../content/main-content";

function renderUserProjects(projectsList = '') {
    clearUserProjects()
    const projectInput = document.querySelector('.new-project-input')

    projectsList.forEach(element => {
        const newLine = document.createElement('li')
        newLine.textContent = element.title
        newLine.dataset.projectId = element.getProjectId()
        newLine.addEventListener('click', renderTaskList)
        projectInput.before(newLine)
    });
}

function clearUserProjects() {
    const userProjectsList = document.querySelector('.user-projects').querySelectorAll('li')

    userProjectsList.forEach((project) => project.remove())
}

export { renderUserProjects }