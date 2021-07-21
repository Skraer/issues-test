export type AlertType = 'error' | 'warning' | 'success'

export enum ErrorTextType {
  USER_NOT_FOUND = 'Пользователь с таким логином не найден',
  REPO_NOT_FOUND = 'Репозиторий не найден',
}

export type AlertMsgType = {
  type: AlertType
  text?: string
}
export type AlertMsgTypes = AlertMsgType | null | undefined

// export type alertHandlerType = {
//   show: (msg: msgType) => void
// rmLast: () => void
// showLast: () => void
// last?: msgType | undefined | null
// }

export interface IAlertHandler {
  // handler: alertHandlerType
  showAlert(msg: AlertMsgType): void
  clearLast(): void
  showLast(): void
  lastMsg: AlertMsgTypes
  // showLastAlert(): void
  // lastMsg?: msgType | undefined | null

  // lastMsg: msgType
}
