import {Module} from "@/core/module";
export class customUserMessage extends Module {
  constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger() {
    const drawInputHTML = () => {
      const container = document.createElement('div')
      const form = document.createElement('form')
      form.className = 'create-time-block'
      const input = document.createElement('input')
      input.className = 'create-time-block-input'
      input.placeholder = 'укажите количество секунд'
      const button = document.createElement('button')
      button.className = 'create-time-block-button'
      button.textContent = 'Запустить'
      const deletePrevResults = document.createElement('button')
      deletePrevResults.className = 'delete-previous-results'
      deletePrevResults.textContent = 'Очистить'
      document.body.append(container)
      container.append(form)
      form.append(input)
      form.append(button)
      form.append(deletePrevResults)
      return container
    }

    const checkErrors = value => {
      return !((!value) || (isNaN(value)) || (value < 1))
    }

    const timer = () => {
      let valueUserInput = null
      let isValid = null
      const deleteResults = document.querySelector('.delete-previous-results')
      const input = document.querySelector('.create-time-block-input')
      const button = document.querySelector('.create-time-block-button')
      input.addEventListener('input', (event) => {
        const {target} = event
        const {value} = target
        isValid = checkErrors(value)
        const errorMessageHTML = document.querySelector('.error-message')
        if (!isValid && !errorMessageHTML) {
          const errorMessage = document.createElement('span')
          errorMessage.className = 'error-message'
          errorMessage.textContent = 'Необходимо ввести положительное целое количество секунд'
          document.body.append(errorMessage)
        }
        if (isValid) {
          valueUserInput = Number(value)
        }
        if (isValid && errorMessageHTML) {
          errorMessageHTML.remove()
        }
        return errorMessageHTML
      })
      button.addEventListener('click', (event) => {
        event.preventDefault()
        if (isValid) {
          const timerForUser = document.createElement('h2')
          timerForUser.className = 'timer-for-user'
          timerForUser.textContent = valueUserInput
          document.body.append(timerForUser)
          const countdown = setInterval(() => {
            --valueUserInput
            timerForUser.textContent = valueUserInput
            if (valueUserInput === 0) {
              timerForUser.textContent = 'Время истекло'
              clearInterval(countdown)
            }
          }, 1000)
          return timerForUser
        }
      })
      deleteResults.addEventListener('click', (event) => {
        const prevResults = document.querySelector('.timer-for-user')
        if (prevResults) {
          prevResults.remove()
        }
      })
    }

    drawInputHTML()
    timer()
  }
}