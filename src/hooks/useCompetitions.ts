import { useEffect, useState } from 'react'

import CompetitionsApi from '@/services/CompetitionsApi'

import type { Competition } from '@/types/Competitions'

export const useCompetitions = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const data = await CompetitionsApi.fetchCompetitions()
        setCompetitions(data.competitions)
        setIsError(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    void loadCompetitions()
  }, [])

  return { competitions, isLoading, isError }
}
