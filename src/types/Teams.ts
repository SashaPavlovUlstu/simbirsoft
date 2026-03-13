export interface Team {
  id: number
  name: string
  crest: string
}

export interface TeamsResponse {
  count: number
  teams: Team[]
}
