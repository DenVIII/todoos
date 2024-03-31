class Task {
    static #_instances = []

    constructor(data) {
        Object.assign(this, data);
        Task.#_instances.push(this);
      }
    
      static get instances() { 
        return Array.from(Task.#_instances);    // I use Array.from() for security measures - it returns copy of #_instances, 
      }                                         // not the original one.
    
      static createNewTask(title, id, description, dueDate) {
        new Task({title, id, description, dueDate})
      }

      static deleteTask(id) {
        for (let i = 0, n = Task.#_instances.length; i < n; i++) {
          const task = Task.#_instances[i]
          if (task.id === id) {
            Task.#_instances.splice(i, 1)
            return
          }
        }
      }
}

const newTask = new Task({
    title: "First Task",
    id: "12f",
    description: "Just random text for testing",
    dueDate: "05.12.24"
})

const newTask2 = new Task({
    title: "Second Task",
    id: "15f",
    description: "Just random text for testing",
    dueDate: "01.12.24"
})

Task.createNewTask("random", "13a", "task", "07.12.24")

console.log(Task.instances)
console.log(newTask.title)
console.log(newTask2)

Task.deleteTask("15f")

console.log(Task.instances)