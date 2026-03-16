import dayjs from 'dayjs'

import type { Match } from '@/types/Matches'

export const formatMatchDate = (utcDate: string) =>
  dayjs(utcDate).format('DD.MM.YYYY')

export const formatMatchTime = (utcDate: string) =>
  dayjs(utcDate).format('HH:mm')

export const formatTeamMatchTime = (utcDate: string) => {
  const time = formatMatchTime(utcDate)
  return time === '00:00' ? '—' : time
}

export const formatMatchTeams = (match: Match) =>
  `${match.homeTeam.name} - ${match.awayTeam.name}`

export const formatTeamMatchTeams = (match: Match) =>
  `${match.homeTeam?.name || '?'} — ${match.awayTeam?.name || '?'}`

export const formatMatchScore = (match: Match, emptyValue = '-') => {
  const ft = match.score?.fullTime
  const et = match.score?.extraTime
  const pen = match.score?.penalties

  let result = ''

  if (ft?.home != null) result += `${ft.home}:${ft.away}`
  if (et?.home != null) result += ` (${et.home}:${et.away})`
  if (pen?.home != null) result += ` (${pen.home}:${pen.away})`

  return result || emptyValue
}
