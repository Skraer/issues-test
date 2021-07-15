import { alertHandlerType, IAlertHandler, msgType } from '../interfaces/alert'

// const showDataNotFound = (): void => {
//   alert('Неверный логин и/или репозиторий')
// }

export class AlertHandler implements IAlertHandler {
  constructor(private _handler: alertHandlerType) {}
  get handler(): alertHandlerType {
    return this._handler
  }
  showAlert(msg: msgType): void {
    // this._handler.last = msg
    this._handler.show(msg)
  }
  // showLastAlert(): void {
  //   if (this._handler.last) {
  //     this._handler.show(this._handler.last)
  //   }
  // }
}
