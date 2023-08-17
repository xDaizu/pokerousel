interface AppConfig {
  removeFairyType: boolean
  timeStep: number
  maxPP: number
  maxCP: number
  maxHP: number
}

export const APP_CONFIG: AppConfig = Object.freeze({
  removeFairyType: true,
  timeStep: 1000,
  maxPP: 6,
  maxCP: 6,
  maxHP: 4,
})
