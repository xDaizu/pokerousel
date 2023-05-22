interface AppConfig {
  removeFairyType: boolean
  timeStep: number
  maxPP: number
  maxCP: number
  maxHP: number
}

export const APP_CONFIG: AppConfig = Object.freeze({
  removeFairyType: true,
  timeStep: 2000,
  maxPP: 5,
  maxCP: 5,
  maxHP: 3,
})
