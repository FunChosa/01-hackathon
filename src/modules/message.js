export const messages = [ // массив фраз
  'London is the capital of Great Britain',
  'Change your mind',
  'Why not?',
]
export const formCustomMessageDrawHTML = () => { // функция отрисовки формы, в которую пользователь вводит своё число
  const customMessagesBlock = document.createElement('div')
  const customMessagesForm = document.createElement('form')
  customMessagesForm.className = 'custom-messages-block'
  const input = document.createElement('input')
  input.className = 'custom-messages-block-input'
  input.placeholder = 'введите число от 1 до 3'
  const button = document.createElement('button')
  button.className = 'custom-messages-block-button'
  button.textContent = 'Запустить'
  document.body.append(customMessagesBlock)
  customMessagesBlock.append(customMessagesForm)
  customMessagesForm.append(input)
  customMessagesForm.append(button)
  return customMessagesBlock
}

export const checkHasErrors = value => { // вспомогательная функция выдачи ошибки
  return !((!value) || (isNaN(value)) || (value > 3 || value < 1))
}
export const customMessage = () => { // выдача ошибки
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
      errorMessage.textContent = 'Необходимо ввести число от 1 до 3'
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
    messageForUser.className = 'message-for-user'
    messageForUser.textContent = messages[valueUserInput - 1]
    setInterval(() => {
      messageForUser.remove()
    }, 3000)
    document.body.append(messageForUser)
    return messageForUser
  })
}
