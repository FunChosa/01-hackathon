import {Module} from "@/core/module";
import * as HelpUtils from '../utils';

export class customUserMessage extends Module{
  constructor(type, text){
    super(type, text);
    this.type = type;
    this.text = text;
  }
  trigger() {
    HelpUtils.check();

    const messages = [ // массив фраз
      'London is the capital of Great Britain',
      'Change your mind',
      'Why not?',
    ]
    const formCustomMessageDrawHTML = () => { // функция отрисовки формы, в которую пользователь вводит своё число
      const customMessagesBlock = document.createElement('div')

      customMessagesBlock.classList.add('customMessage'); //
      customMessagesBlock.setAttribute('id', 'customBlock')

      const customMessagesForm = document.createElement('form')
      customMessagesForm.className = 'custom-messages-block'
      const input = document.createElement('input')
      input.className = 'custom-messages-block-input'
      input.placeholder = 'enter a number from 1 to 3'
      const button = document.createElement('button')
      button.className = 'custom-messages-block-button'
      button.textContent = 'Start'
      document.body.append(customMessagesBlock)
      customMessagesBlock.append(customMessagesForm)
      customMessagesForm.append(input)
      customMessagesForm.append(button)
      return customMessagesBlock
    }

    const checkHasErrors = value => { // вспомогательная функция выдачи ошибки
      return !((!value) || (isNaN(value)) || (value > 3 || value < 1))
    }
    const customMessage = () => { // выдача ошибки
      let valueUserInput = null
      const button = document.querySelector('.custom-messages-block-button')
      const input = document.querySelector('.custom-messages-block-input')
      input.addEventListener('input', (event) => {
        const {target} = event
        const {value} = target
        const isValid = checkHasErrors(value)
        const errorMessageHTML = document.querySelector('.error-message')
        if (!isValid && !errorMessageHTML) { // выдаём ошибку, если надо
          const errorMessage = document.createElement('span')
          errorMessage.className = 'error-message'
          errorMessage.textContent = 'You must enter a number from 1 to 3'
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

      button.addEventListener('click', (event) => { // если пользователь ввёл правильное число
        event.preventDefault()
        const messageForUser = document.createElement('h2')
        const mainContainer = document.querySelector('.customMessage');

        messageForUser.className = 'message-for-user'
        messageForUser.textContent = messages[valueUserInput - 1]
        setInterval(() => {
          messageForUser.remove()
        }, 3000)
        mainContainer.append(messageForUser)
        return messageForUser
      })
    }
    formCustomMessageDrawHTML()
    checkHasErrors()
    customMessage()

    const mainContainer = document.querySelector('.customMessage');
    HelpUtils.removeBlock(mainContainer);
  }
}

