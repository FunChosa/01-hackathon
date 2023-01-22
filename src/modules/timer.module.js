import {Module} from "@/core/module";
import * as HelpUtils from '../utils';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger() {
    HelpUtils.check();
    
    const drawInputHTML = () => {
      const container = document.createElement('div')
      container.classList.add('customTimer'); //
      container.setAttribute('id', 'customBlock')
      const form = document.createElement('form')
      form.className = 'create-time-block'
      const input = document.createElement('input')
      input.className = 'create-time-block-input'
      input.placeholder = 'укажите количество секунд'
      const button = document.createElement('button')
      button.className = 'create-time-block-button'
      button.textContent = 'Запустить'
      document.body.append(container)
      container.append(form)
      form.append(input)
      form.append(button)
      return container
    }

    const checkErrors = value => {
      return !((!value) || (isNaN(value)) || (value < 1))
    }
    
    const timer = () => {
      let valueUserInput = null
      let isValid = null
      const input = document.querySelector('.create-time-block-input')
      const button = document.querySelector('.create-time-block-button')
      input.addEventListener('input', (event) => {
        const {target} = event
        const {value} = target
        isValid = checkErrors(value)
        const errorMessageHTML = document.querySelector('.error-message')
        if (!isValid && !errorMessageHTML) {
          const mainContainer = document.querySelector('.customTimer');
          const errorMessage = document.createElement('span')
          errorMessage.className = 'error-message'
          errorMessage.textContent = 'Необходимо ввести положительное целое количество секунд'

          mainContainer.append(errorMessage)
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

          mainContainer.append(timerForUser)
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
    }

    drawInputHTML()
    timer()

    const mainContainer = document.querySelector('.customTimer');
    HelpUtils.removeBlock(mainContainer);
  }
}
