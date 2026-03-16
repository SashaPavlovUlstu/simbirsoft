import api from '@/services/Api'

import type { CompetitionsResponse } from '@/types/Competitions'
import type { MatchesResponse } from '@/types/Matches'

type CompetitionMatchesParams = {
  id: string
  dateFrom?: string
  dateTo?: string
}

export default class CompetitionsApi {
  static async fetchCompetitions() {
    const response = await api.get<CompetitionsResponse>('/competitions')
    return response.data
  }

  static async fetchCompetitionMatches({
    id,
    dateFrom,
    dateTo,
  }: CompetitionMatchesParams) {
    const params: Record<string, string> = {}

    if (dateFrom) {
      params.dateFrom = dateFrom
    }

    if (dateTo) {
      params.dateTo = dateTo
    }

    const response = await api.get<MatchesResponse>(
      `/competitions/${id}/matches`,
      { params },
    )

    return response.data.matches
  }
}
