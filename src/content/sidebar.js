import { toggleInputVisibility, addNewProject } from "../functions/domManipulations"

function createSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.textContent = ''

    const defaultProjectsList = document.createElement('ul')
    defaultProjectsList.classList.add('default-projects')
    defaultProjectsList.innerHTML = `
        <li class="today-tasks">Today</li>
        <li class="tomorrow-tasks">Tomorrow</li>
        <li class="week-tasks">This Week</li>
        <li claas="all-tasks">All tasks</li>
    `
    const userProjectsList = document.createElement('ul')
    userProjectsList.classList.add('user-projects')
    userProjectsList.innerHTML = `
        <div class="header">
            <h3>My Projects</h3>
            <button class="new-project-btn">+</button>
        </div>
        <div class="new-project-input hidden"><input id="new-project-input" type="text" placeholder="Project name" maxlength="50"></div>
    `
    sidebar.appendChild(defaultProjectsList)
    sidebar.appendChild(userProjectsList)

    const newProjBtn = document.querySelector('.new-project-btn')
    newProjBtn.addEventListener('click', toggleInputVisibility)

    const newProjInput = document.querySelector('#new-project-input')
    newProjInput.addEventListener('keydown', addNewProject)
}

export default createSidebar