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

// Testing area

const defaultTask = new Task ("First task")
const userProject = new Project("Health")
const _manager = new Manager()

_manager.addNewProject(userProject)
userProject.addNewTask(defaultTask)

createSidebar()

renderUserProjects(_manager.getProjectsList())

export default _manager