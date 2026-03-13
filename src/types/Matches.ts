export interface Team {
  id: number
  name: string
  shortName?: string
  tla?: string
  crest?: string | null
}

export interface Score {
  winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null
  duration: 'REGULAR' | 'EXTRA_TIME' | 'PENALTIES'
  fullTime: {
    home: number | null
    away: number | null
  }
  halfTime: {
    home: number | null
    away: number | null
  }
  extraTime: {
    home: number | null
    away: number | null
  }
  penalties: {
    home: number | null
    away: number | null
  }
}

export interface Match {
  id: number
  season: {
    id: number
    startDate: string
    endDate: string
    currentMatchday: number | null
  }
  utcDate: string
  status: string
  matchday: number | null
  stage: string
  group: string | null
  homeTeam: Team
  awayTeam: Team
  score: Score
  competition: {
    id: number
    name: string
  }
}

export interface MatchesResponse {
  matches: Match[]
}
