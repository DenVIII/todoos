class Task {
  constructor(title, dueDate, id, description = "-") {
    this.title = title
    this.dueDate = dueDate
    this.id = id
    this.description = description
  }

  getTitle() {
    return this.title
  }

  getDueDate() {
    return this.dueDate
  }

  getId() {
    return this.id
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
}

const newTask = new Task ("First task (second try)", "01.04.24", "12f")

console.log(newTask.getTitle())
console.log(newTask)