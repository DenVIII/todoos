function renderUserProjects(projectsList = '') {
    clearUserProjects()
    const projectInput = document.querySelector('.new-project-input')
    const projectsTitles = projectsList.map(element => element.title);

    projectsTitles.forEach(element => {
        const newLine = document.createElement('li')
        newLine.textContent = element
        projectInput.before(newLine)
    });
}

function clearUserProjects() {
    const userProjectsList = document.querySelector('.user-projects').querySelectorAll('li')

    userProjectsList.forEach((project) => project.remove())
}

export { renderUserProjects }