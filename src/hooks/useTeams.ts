import { useEffect, useState } from 'react'

import TeamsApi from '@/services/TeamsApi'

import type { Team } from '@/types/Teams'

export const useTeams = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await TeamsApi.fetchTeams()
        setTeams(data.teams)
        setIsError(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    void loadTeams()
  }, [])

  return { teams, isLoading, isError }
}
