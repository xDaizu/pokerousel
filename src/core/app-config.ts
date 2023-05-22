interface AppConfig {
  removeFairyType: boolean
  timeStep: number
}

export const APP_CONFIG: AppConfig = Object.freeze({
  removeFairyType: true,
  timeStep: 2000,
})
