import Task from './modules/task.js'
import Project from './modules/project.js'
import Manager from './modules/projectsManager.js'

// Testing area

const newTask = new Task ("First task (second try)")
const newProject = new Project("New Project")
const _manager = new Manager()

_manager.addNewProject(newProject)
newProject.addNewTask(newTask)

const newProject2 = new Project("Today")
_manager.addNewProject(newProject2)

newProject2.addNewTask({abc:11})

console.log(_manager.getProjectsList())
_manager.deleteProject(newProject2.getProjectId())
console.log(_manager.getProjectsList())