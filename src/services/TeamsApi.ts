import api from '@/services/Api'

import type { MatchesResponse } from '@/types/Matches'
import type { Team, TeamsResponse } from '@/types/Teams'

export default class TeamsApi {
  static async fetchTeams() {
    const response = await api.get<TeamsResponse>('/teams')
    return response.data
  }

  static async fetchTeamById(id: number) {
    const response = await api.get<Team>(`/teams/${id}`)
    return response.data
  }

  static async fetchTeamMatches(id: number) {
    const response = await api.get<MatchesResponse>(`/teams/${id}/matches`)
    return response.data.matches
  }
}
