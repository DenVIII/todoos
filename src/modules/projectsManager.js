import Project from "./project"
import Task from "./task"
import { parse, compareAsc } from "date-fns"

export default class Manager {
    constructor(){
        this._projectsList = []
        this.initialLoad()
    }

    initialLoad() {
        if (!localStorage.getItem('manager')) {
            const defaultFirstTask = new Task ("Drink a glass of water in the morning")
            const defaultSecondTask = new Task ("Workout")
            const defaultUserProject = new Project("Health")
            this.createDefaultProjects()
            defaultUserProject.addNewTask(defaultFirstTask)
            defaultUserProject.addNewTask(defaultSecondTask)
            this.addNewProject(defaultUserProject)
        } else {
            const storedManagerData = JSON.parse(localStorage.getItem('manager'))
            storedManagerData.forEach(project => {
                const newProject = new Project(project.title, project.projectId)
                project._project.forEach(task => {
                    const newTask = new Task( task.title, task.dueDate, task.description )
                    newProject.addNewTask(newTask)
                })
                this._projectsList.push(newProject)
            })
        }
    }

    updateLocalStorage() {
        localStorage.setItem('manager', JSON.stringify(this.getProjectsList()))
    }

    getProjectsList() {
        return this._projectsList
    }

    getProjectById(id) {
        const index = this.findProject(id)
        if (index === -1) return
        return this._projectsList[index]
    }

    findProject(id) {
        const index = this._projectsList.findIndex(item => item.getProjectId() === id)
        return index
    }

    findProjectByTaskId(id) {
        for (let i = 4, n = this._projectsList.length; i < n; i++) {
            const project = this._projectsList[i]
            if (project.getTaskById(id) != -1) return this._projectsList[i]
        }
        return -1
    }

    addNewProject(project) {
        this._projectsList.push(project)
        this.updateAllTasksProject()
        this.updateLocalStorage()
    }

    deleteProject(id) {
        const index = this._projectsList.findIndex(item => item.getProjectId() === id)
        if (index === -1) return
        this._projectsList.splice(index, 1)
    }

    createDefaultProjects() {
        const projectsTitles = [
            'All Tasks',
            'This Week',
            'Tomorrow',
            'Today'
        ]
        for (let i = 0, n = projectsTitles.length; i < n; i++) {
            const project = new Project(projectsTitles[i], `_0${i}`)
            this.addNewProject(project)
        }
    }
    
    updateAllTasksProject() {
        const allTasksProject = this.getProjectById('_00')
        allTasksProject.clearProject()
        for (let i = 4, n = this._projectsList.length; i < n; i++) {
            this._projectsList[i].getProject().forEach(task => {
                allTasksProject.addNewTask(task)
            })
        }
    }

    updateThisWeekProject() {
        const thisWeekProject = this.getProjectById('_01')
        thisWeekProject.clearProject()
        const endDate = this.getEndDate(7)

        for (let i = 4, n = this._projectsList.length; i < n; i++) {
            this._projectsList[i].getProject().forEach(task => {
                const dueDate = parse(task.getDueDate(), 'MM.dd.yy', new Date())
                if (compareAsc(dueDate, endDate) <= 0) {
                    thisWeekProject.addNewTask(task)
                }
            })
        }
    }

    updateTomorrowProject() {
        const tomorrowProject = this.getProjectById('_02')
        tomorrowProject.clearProject()
        const endDate = this.getEndDate(1)

        for (let i = 4, n = this._projectsList.length; i < n; i++) {
            this._projectsList[i].getProject().forEach(task => {
                const dueDate = parse(task.getDueDate(), 'MM.dd.yy', new Date())
                if (compareAsc(dueDate, endDate) === 0) {
                    tomorrowProject.addNewTask(task)
                }
            })
        }
    }

    updateTodayProject() {
        const todayProject = this.getProjectById('_03')
        todayProject.clearProject()
        const endDate = this.getEndDate(0)

        for (let i = 4, n = this._projectsList.length; i < n; i++) {
            this._projectsList[i].getProject().forEach(task => {
                const dueDate = parse(task.getDueDate(), 'MM.dd.yy', new Date())
                if (compareAsc(dueDate, endDate) === 0) {
                    todayProject.addNewTask(task)
                }
            })
        }
    }

    getEndDate(days) {
        const currentDate = new Date()
        const endDate = new Date()
        currentDate.setHours(0,0,0,0)
        endDate.setDate(currentDate.getDate() + days)
        endDate.setHours(0,0,0,0)

        return endDate
    }

    updateDefaultProjects() {
        this.updateAllTasksProject()
        this.updateThisWeekProject()
        this.updateTomorrowProject()
        this.updateTodayProject()
    }
}