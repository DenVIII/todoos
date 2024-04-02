export default class Project {
    constructor(title) {
        this.title = title
        this._project = []
    }

    addNewTask(task) {
        this._project.push(task)
    }

    getProject() {
        return Array.from(this._project)
    }

    getTitle() {
        return this.title
    }
}