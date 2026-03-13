import type { BreadcrumbItem } from '@/components/Breadcrumb/types'

export const leaguesBreadcrumb = (
  competitionName?: string,
): BreadcrumbItem[] => [
  { title: 'Лиги', link: '/' },
  { title: competitionName || '...' },
]

export const teamsBreadcrumb = (teamName?: string): BreadcrumbItem[] => [
  { title: 'Команды', link: '/teams' },
  { title: teamName || '...' },
]
