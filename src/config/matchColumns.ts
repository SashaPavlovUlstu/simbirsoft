import { MATCH_STATUS_MAP } from '@/constants/matchStatus'
import {
  formatMatchDate,
  formatMatchScore,
  formatMatchTeams,
  formatMatchTime,
  formatTeamMatchTeams,
  formatTeamMatchTime,
} from '@/utils/formatMatch'

import type { Match } from '@/types/Matches'

export const MATCHES_COLUMNS = [
  {
    title: 'Дата',
    render: (match: Match) => formatMatchDate(match.utcDate),
  },
  {
    title: 'Время',
    render: (match: Match) => formatMatchTime(match.utcDate),
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    render: (status: string) => MATCH_STATUS_MAP[status] || status,
  },
  {
    title: 'Команда A - Команда B',
    render: (match: Match) => formatMatchTeams(match),
  },
  {
    title: 'Счёт',
    render: (match: Match) => formatMatchScore(match),
  },
]

export const TEAM_MATCHES_COLUMNS = [
  {
    title: 'Дата',
    render: (match: Match) => formatMatchDate(match.utcDate),
  },
  {
    title: 'Время',
    render: (match: Match) => formatTeamMatchTime(match.utcDate),
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    render: (status: string) => MATCH_STATUS_MAP[status] || status,
  },
  {
    title: 'Матч',
    render: (match: Match) => formatTeamMatchTeams(match),
  },
  {
    title: 'Счёт',
    render: (match: Match) => formatMatchScore(match, '—'),
  },
]
