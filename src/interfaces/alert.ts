export type alertType = 'error' | 'warning' | 'success'

export type alertMsgType = {
  type: alertType
  text?: string
}
export type alertMsgTypes = alertMsgType | null | undefined

// export type alertHandlerType = {
//   show: (msg: msgType) => void
// rmLast: () => void
// showLast: () => void
// last?: msgType | undefined | null
// }

export interface IAlertHandler {
  // handler: alertHandlerType
  showAlert(msg: alertMsgType): void
  clearLast(): void
  showLast(): void
  lastMsg: alertMsgTypes
  // showLastAlert(): void
  // lastMsg?: msgType | undefined | null

  // lastMsg: msgType
}
