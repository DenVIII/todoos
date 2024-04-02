import Task from './modules/task.js'
import Project from './modules/project.js'

const newTask = new Task ("First task (second try)", "01.04.24", "12f")
const newProject = new Project("New Project")

console.log(newTask.getTitle())
console.log(newTask)

console.log(newProject.getProject())
newProject.addNewTask(newTask)
console.log(newProject.getProject())

const newProject2 = new Project("Today")

newProject2.addNewTask({abc:11})

console.log(newProject2.getProject())
console.log(newProject2.getTitle())