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
}