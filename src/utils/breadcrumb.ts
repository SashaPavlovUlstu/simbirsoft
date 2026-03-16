import type { BreadcrumbItem } from '@/components/Breadcrumb/types'

const DEFAULT_BREADCRUMB_TITLE = 'Загрузка...'

export const createBreadcrumb = (
  rootTitle: BreadcrumbItem['title'],
  rootLink: string,
  currentTitle?: BreadcrumbItem['title'],
): BreadcrumbItem[] => [
  { title: rootTitle, link: rootLink },
  { title: currentTitle || DEFAULT_BREADCRUMB_TITLE },
]
