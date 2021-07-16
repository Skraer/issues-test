import { IAlertHandler, alertMsgType, alertMsgTypes } from '../interfaces/alert'

// const showDataNotFound = (): void => {
//   alert('Неверный логин и/или репозиторий')
// }
const alertPrefix: { [key: string]: string } = {
  error: '[Ошибка]',
  warning: '[Предупреждение]',
  success: '[Уведомление]',
}

export class AlertHandler implements IAlertHandler {
  constructor(private _lastMsg: alertMsgTypes) {
    this._lastMsg = null
  }
  get lastMsg(): alertMsgTypes {
    return this._lastMsg
  }
  clearLast(): void {
    this._lastMsg = null
  }
  showAlert(msg: alertMsgType): void {
    let text: string = msg.text || ''
    text = `${alertPrefix[msg.type]} ${text}`
    window.alert(text)
    this._lastMsg = msg
  }
  showLast(): void {
    this.lastMsg
      ? this.showAlert(this.lastMsg)
      : console.error('Уведомлений нет')
  }
}
