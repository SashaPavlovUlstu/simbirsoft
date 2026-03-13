export interface PaginationWrapperProps {
  current: number
  total: number
  pageSize: number
  onChange: (page: number) => void
}
