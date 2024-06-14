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
import { renderUserProjects, renderDefaultProjects } from './functions/render.js'
import { createMainContent, renderTaskList } from './content/main-content.js'
import { createNewTaskForm } from './content/newTaskForm.js'

// Testing area
const _manager = new Manager()

createSidebar()
createMainContent()
createNewTaskForm()
renderTaskList(_manager.getProjectsList()[0])()
renderDefaultProjects(_manager.getProjectsList())
renderUserProjects(_manager.getProjectsList())

export default _manager