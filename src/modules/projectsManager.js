import Project from "./project"
import { format, parse, compareAsc } from "date-fns"

export default class Manager {
    constructor(){
        this._projectsList = []
        this.createDefaultProjects()
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

    addNewProject(project) {
        this._projectsList.push(project)
        this.updateAllTasksProject()
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
                console.log(dueDate, endDate)
                if (compareAsc(dueDate, endDate) === 0) {
                    tomorrowProject.addNewTask(task)
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
    }
}