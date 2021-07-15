export type alertType = 'error' | 'warning'

export type msgType = {
  type: alertType
  msg?: string
}

export type alertHandlerType = {
  show: (msg: msgType) => void
  // rmLast: () => void
  // showLast: () => void
  // last?: msgType | undefined | null
}

export interface IAlertHandler {
  handler: alertHandlerType
  showAlert(msg: msgType): void
  // showLastAlert(): void
  // lastMsg?: msgType | undefined | null

  // lastMsg: msgType
}
