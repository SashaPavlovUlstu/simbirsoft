import CompetitionPage from '@/pages/CompetitionPage/CompetitionPage'
import CompetitionsPage from '@/pages/CompetitionsPage/CompetitionsPage'
import TeamCalendarPage from '@/pages/TeamCalendarPage/TeamCalendarPage'
import TeamsPage from '@/pages/TeamsPage/TeamsPage'

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
