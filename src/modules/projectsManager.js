import Project from "./project"

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
            console.log(this._projectsList[i])
            this._projectsList[i].getProject().forEach(task => {
                allTasksProject.addNewTask(task)
            })
        }
    }

    getAllTasks() {
        this.updateAllTasksProject()
        return this.getProjectById('_00')
    }

    updateDefaultProjects() {
        this.updateAllTasksProject()
    }
}