export default class Manager {
    constructor(){
        this._projectsList = []
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

}