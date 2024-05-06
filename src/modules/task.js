import generateId from "../functions/generateId"
import { format } from "date-fns"

export default class Task {
    constructor(title, dueDate = format(new Date(), 'MM.dd.yy'), description = "-") {
      this.title = title
      this.dueDate = format(dueDate, 'MM.dd.yy')
      this.taskId = generateId()
      this.description = description
      this.completed = false
    }
  
    getTitle() {
      return this.title
    }
  
    getDueDate() {
      return this.dueDate
    }
  
    getTaskId() {
      return this.taskId
    }
  
    getDescription() {
      return this.description
    }
  
    setTitle(title) {
      this.title = title
    }
  
    setDueDate(dueDate) {
      this.dueDate = dueDate
    }
  
    setDescription(description) {
      this.description = description
    }

    chageCompletionStatus() {
      this.completed = !this.completed
    }
  }