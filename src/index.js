import Task from './modules/task.js'
import Project from './modules/project.js'
import Manager from './modules/projectsManager.js'

// Testing area

const newTask = new Task ("First task (second try)", "01.04.24", "12f")
const newProject = new Project("New Project")
const _manager = new Manager()

_manager.addNewProject(newProject)

console.log(newTask.getTitle())
console.log(newTask)

console.log(newProject.getProject())
newProject.addNewTask(newTask)
console.log(newProject.getProject())

const newProject2 = new Project("Today")

_manager.addNewProject(newProject2)

newProject2.addNewTask({abc:11})

console.log(newProject2.getProject())
console.log(newProject2.getTitle())

console.log(_manager)

newProject.deleteTask("12f")

console.log(newProject.getProject())