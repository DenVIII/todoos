import './modules/styles/base.css'
import './modules/styles/sidebar.css'
import './modules/styles/footer.css'
import './modules/styles/main-content.css'
import './modules/styles/new-project-input.css'
import './modules/styles/new-task-form.css'
import Task from './modules/task.js'
import Project from './modules/project.js'
import Manager from './modules/projectsManager.js'

// Testing area

const defaultTask = new Task ("First task")
const todayProject = new Project("Today")
const _manager = new Manager()

_manager.addNewProject(todayProject)
todayProject.addNewTask(defaultTask)

console.log(_manager.getProjectsList())