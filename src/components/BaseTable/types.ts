export interface BaseTableProps<T> {
  data: T[]
  columns: any
  loading?: boolean
  pageSize?: number
  rowKey?: string
}

export interface Match {
  id: string
  utcDate: string
  status: string
  homeTeam?: { name: string }
  awayTeam?: { name: string }
  score?: {
    fullTime?: { home: number; away: number }
    extraTime?: { home: number; away: number }
    penalties?: { home: number; away: number }
  }
  competition?: { name: string }
  [key: string]: any
}
