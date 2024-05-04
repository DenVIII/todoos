import { toggleNewTaskFormVisibility } from "../functions/domManipulations";

function createNewTaskForm() {
    const formWrapper = document.createElement('div')
    const formBackground = document.createElement('div')
    const newTaskForm = document.createElement('form')
    const formLabels = document.createElement('div')
    const formInputs = document.createElement('div')
    const formBtns = document.createElement('div')
    const submitBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')

    formLabels.innerHTML = `
        <label for="title">Title*:</label>
        <label for="due-date">Due Date:</label>
        <label for="description">Description:</label>
    `
    formInputs.innerHTML = `
        <input id="title" name="title" type="text" required>
        <input id="due-date" name="due-date" type="date">
        <textarea id="description" name="description" cols="30" rows="3" ></textarea>
    `
    newTaskForm.noValidate = true
    formWrapper.classList.add('wrapper', 'hidden')
    formBackground.classList.add('form-screen-background')
    newTaskForm.classList.add('new-task-form')
    formLabels.classList.add('form-labels')
    formInputs.classList.add('form-inputs')
    formBtns.classList.add('form-buttons')
    submitBtn.classList.add('btn')
    cancelBtn.classList.add('btn')
    submitBtn.type = 'button'
    cancelBtn.type = 'button'
    submitBtn.textContent = 'Submit'
    cancelBtn.textContent = 'Cancel'

    formBtns.append(submitBtn, cancelBtn)
    newTaskForm.append(formLabels, formInputs, formBtns)
    formWrapper.append(formBackground, newTaskForm)
    document.querySelector('body').appendChild(formWrapper)

    cancelBtn.addEventListener('click', toggleNewTaskFormVisibility)
    formBackground.addEventListener('click', toggleNewTaskFormVisibility)
}

export { createNewTaskForm }
