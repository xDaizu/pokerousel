interface AppConfig {
  removeFairyType: boolean
  timeStep: number
  maxPP: number
  maxCP: number
  maxHP: number
  isTournament: boolean
}

export const APP_CONFIG: AppConfig = Object.freeze({
  removeFairyType: true,
  timeStep: 15000,
  maxPP: 6,
  maxCP: 6,
  maxHP: 4,
  isTournament: true,
})
