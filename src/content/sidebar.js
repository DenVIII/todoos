function renderUserProjects(projectsList = '') {
    const userProjects = document.querySelector('.user-projects')
    if (projectsList === '') return
    
    const projectInput = document.querySelector('.new-project-input')
    const projectsTitles = projectsList.map(element => element.title);

    projectsTitles.forEach(element => {
        const newLine = document.createElement('li')
        newLine.textContent = element
        projectInput.before(newLine)
    });
    
}

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
        <div class="new-project-input hidden"><input type="text" placeholder="Project name" maxlength="50"></div>
    `
    sidebar.appendChild(defaultProjectsList)
    sidebar.appendChild(userProjectsList)
}

export {createSidebar, renderUserProjects}