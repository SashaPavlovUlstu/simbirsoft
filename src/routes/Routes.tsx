import CompetitionsPage from '@/pages/CompetitionsPage'
import CompetitionPage from '@/pages/CompetitionPage'
import TeamCalendarPage from '@/pages/TeamCalendarPage'
import TeamsPage from '@/pages/TeamsPage'

import type { IRoute } from './types'

export const navigateRouter: IRoute[] = [
  {
    path: '/',
    element: <CompetitionsPage />,
  },
  {
    path: '/competition/:id',
    element: <CompetitionPage />,
  },
  {
    path: '/teams',
    element: <TeamsPage />,
  },
  {
    path: '/team/:id',
    element: <TeamCalendarPage />,
  },
]
