import { useEffect, useState } from 'react'

import TeamsApi from '@/services/TeamsApi'

import type { Match } from '@/types/Matches'
import type { Team } from '@/types/Teams'

export const useTeamCalendar = (id?: string) => {
  const [team, setTeam] = useState<Team>()
  const [matches, setMatches] = useState<Match[]>([])
  const [isLoading, setIsLoading] = useState(Boolean(id))
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!id) {
      setIsLoading(false)
      return
    }

    const loadTeamCalendar = async () => {
      setIsLoading(true)

      try {
        const [teamData, matchesData] = await Promise.all([
          TeamsApi.fetchTeamById(Number(id)),
          TeamsApi.fetchTeamMatches(Number(id)),
        ])
        setTeam(teamData)
        setMatches(matchesData)
        setIsError(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    void loadTeamCalendar()
  }, [id])

  return { team, matches, isLoading, isError }
}
