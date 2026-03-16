import { useEffect, useState } from 'react'

import CompetitionsApi from '@/services/CompetitionsApi'

import type { Match } from '@/types/Matches'

type UseCompetitionMatchesParams = {
  id?: string
  dateFrom?: string
  dateTo?: string
}

export const useCompetitionMatches = ({
  id,
  dateFrom,
  dateTo,
}: UseCompetitionMatchesParams) => {
  const [matches, setMatches] = useState<Match[]>([])
  const [isLoading, setIsLoading] = useState(Boolean(id))
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!id) {
      setIsLoading(false)
      return
    }

    const loadMatches = async () => {
      setIsLoading(true)

      try {
        const data = await CompetitionsApi.fetchCompetitionMatches({
          id,
          dateFrom,
          dateTo,
        })
        setMatches(data)
        setIsError(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    void loadMatches()
  }, [id, dateFrom, dateTo])

  return { matches, isLoading, isError }
}
