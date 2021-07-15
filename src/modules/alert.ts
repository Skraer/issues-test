import { AlertHandler } from '../domains/alert'
import { msgType } from '../interfaces/alert'

const showAlert = (msg: msgType): void => {
  let text = msg.msg
  if (msg.type === 'warning') {
    text = '[Предупреждение] ' + text
  } else if (msg.type === 'error') {
    text = '[Ошибка] ' + text
  }
  alert(text)
}

export const alertHandler = new AlertHandler({
  show: showAlert,
})
