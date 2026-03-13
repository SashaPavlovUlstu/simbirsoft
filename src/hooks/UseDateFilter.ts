import { useMemo } from 'react'

export const useDateFilteredMatches = <T extends { utcDate: string }>(
  matches: T[],
  dates: [string, string] | null,
) => {
  return useMemo(() => {
    if (!dates) return matches
    const [start, end] = dates
    return matches.filter((match) => {
      const matchDate = match.utcDate.slice(0, 10)
      return matchDate >= start && matchDate <= end
    })
  }, [matches, dates])
}
