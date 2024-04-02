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
        const index = this._project.findIndex(item => item.taskId === id)
        if (index === -1) return
        this._project.splice(index, 1)
    }

    getProject() {
        return Array.from(this._project)
    }

    getTitle() {
        return this.title
    }

    getProjectId() {
        return this.projectId
    }
}