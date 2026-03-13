import type { Match } from '@/types/Matches'

import dayjs from 'dayjs'

export const STATUSMAP: Record<string, string> = {
  SCHEDULED: 'Запланирован',
  LIVE: 'В прямом эфире',
  IN_PLAY: 'В игре',
  PAUSED: 'Пауза',
  FINISHED: 'Завершен',
  POSTPONED: 'Отложен',
  SUSPENDED: 'Приостановлен',
  CANCELED: 'Отменен',
  TIMED: 'По расписанию',
}

export const MATCHESCOLUMNS = [
  {
    title: 'Дата',
    render: (match: Match) => dayjs(match.utcDate).format('DD.MM.YYYY'),
  },
  {
    title: 'Время',
    render: (match: Match) => dayjs(match.utcDate).format('HH:mm'),
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    render: (status: string) => STATUSMAP[status] || status,
  },
  {
    title: 'Команда A - Команда B',
    render: (match: Match) => `${match.homeTeam.name} - ${match.awayTeam.name}`,
  },
  {
    title: 'Счёт',
    render: (match: Match) => {
      const ft = match.score?.fullTime
      const et = match.score?.extraTime
      const pen = match.score?.penalties

      let result = ''
      if (ft?.home != null) result += `${ft.home}:${ft.away}`
      if (et?.home != null) result += ` (${et.home}:${et.away})`
      if (pen?.home != null) result += ` (${pen.home}:${pen.away})`
      return result || '-'
    },
  },
]

export const TEAMMATCHESCOLUMNS = [
  {
    title: 'Дата',
    render: (match: Match) => dayjs(match.utcDate).format('DD.MM.YYYY'),
  },
  {
    title: 'Время',
    render: (match: Match) => {
      const time = dayjs(match.utcDate).format('HH:mm')
      return time === '00:00' ? '—' : time
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    render: (status: string) => STATUSMAP[status] || status,
  },
  {
    title: 'Матч',
    render: (match: Match) =>
      `${match.homeTeam?.name || '?'} — ${match.awayTeam?.name || '?'}`,
  },
  {
    title: 'Счёт',
    render: (match: Match) => {
      const ft = match.score?.fullTime
      const et = match.score?.extraTime
      const pen = match.score?.penalties

      let result = ''
      if (ft?.home != null) result += `${ft.home}:${ft.away}`
      if (et?.home != null) result += ` (${et.home}:${et.away})`
      if (pen?.home != null) result += ` (${pen.home}:${pen.away})`

      return result || '—'
    },
  },
]
