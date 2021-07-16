import {
  IAlertHandler,
  AlertMsgType,
  AlertMsgTypes,
} from '../interfaces/notice'

// const showDataNotFound = (): void => {
//   alert('Неверный логин и/или репозиторий')
// }
const alertPrefix: { [key: string]: string } = {
  error: '[Ошибка]',
  warning: '[Предупреждение]',
  success: '[Уведомление]',
}

export class AlertHandler implements IAlertHandler {
  constructor(private _lastMsg: AlertMsgTypes) {
    this._lastMsg = null
  }
  get lastMsg(): AlertMsgTypes {
    return this._lastMsg
  }
  clearLast(): void {
    this._lastMsg = null
  }
  showAlert(msg: AlertMsgType): void {
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
