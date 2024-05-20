import './styles/base.css'
import './styles/sidebar.css'
import './styles/footer.css'
import './styles/main-content.css'
import './styles/new-project-input.css'
import './styles/new-task-form.css'
import Task from './modules/task.js'
import Project from './modules/project.js'
import Manager from './modules/projectsManager.js'
import createSidebar from './content/sidebar.js'
import { renderUserProjects } from './functions/render.js'
import { createMainContent, renderTaskList } from './content/main-content.js'
import { createNewTaskForm } from './content/newTaskForm.js'

// Testing area

const defaultFirstTask = new Task ("First task")
const defaultSecondTask = new Task ("Second task")
const userProject = new Project("Health")
const _manager = new Manager()

_manager.addNewProject(userProject)
userProject.addNewTask(defaultFirstTask)
userProject.addNewTask(defaultSecondTask)

createSidebar()
createMainContent()
createNewTaskForm()
renderTaskList(_manager.getProjectsList()[0])()
renderUserProjects(_manager.getProjectsList())

console.log(_manager.getAllTasks())

/* const allTasksBtn = document.querySelector('.all-tasks')

allTasksBtn.addEventListener('click', renderTaskList(getAllTasks))

function getAllTasks() {
    const allTasks = new Project('All Tasks')
    _manager.getProjectsList().forEach(project => {
        project.forEach(task => allTasks.addNewTask(task))
    })

    return allTasks
} */

export default _manager