export default class Manager {
    constructor(){
        this._projectsList = []
    }

    getProjectsList() {
        return this._projectsList
    }

    addNewProject(project) {
        this._projectsList.push(project)
    }

}