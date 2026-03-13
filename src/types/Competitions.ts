export interface Area {
  id: number
  name: string
  code: string
  flag: string | null
}

export interface Season {
  id: number
  startDate: string
  endDate: string
  currentMatchday: number
  winner: null | string
}

export interface Competition {
  id: number
  area: Area
  name: string
  code: string
  type: string
  emblem: string | null
  plan: string
  currentSeason: Season | null
  numberOfAvailableSeasons: number
  lastUpdated: string
}

export interface CompetitionsResponse {
  competitions: Competition[]
}
