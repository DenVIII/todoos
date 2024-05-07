import generateId from "../functions/generateId"

export default class Project {
    constructor(title) {
        this.title = title
        this.projectId = generateId()
        this._project = []
    }

    addNewTask(task) {
        this._project.push(task)
    }

    deleteTask(id) {
        const index = this.getTaskIndex(id)
        if (index === -1) return
        this._project.splice(index, 1)
    }

    getProject() {
        return this._project
    }

    getTitle() {
        return this.title
    }

    getProjectId() {
        return this.projectId
    }

    getTaskById(id) {
        const index = this.getTaskIndex(id)
        if (index === -1) return
        return this.getProject()[index]
    }

    getTaskIndex(id) {
        return this._project.findIndex(item => item.getTaskId() === id)
    }
}