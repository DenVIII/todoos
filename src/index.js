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