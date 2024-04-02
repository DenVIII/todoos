export default class Manager {
    constructor(){
        this._projectsList = []
    }

    getProjectsList() {
        return Array.from(this._projectsList)
    }

    addNewProject(project) {
        this._projectsList.push(project)
    }

    deleteProject(id) {
        const index = this._projectsList.findIndex(item => item.projectId === id)
        if (index === -1) return
        this._projectsList.splice(index, 1)
    }

}