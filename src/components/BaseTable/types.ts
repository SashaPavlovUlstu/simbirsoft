import type { TableProps } from 'antd'

export type BaseTableRow = {
  id?: number | string
}

export interface BaseTableProps {
  data: BaseTableRow[]
  columns: TableProps<BaseTableRow>['columns']
  loading?: boolean
  pageSize?: number
  rowKey?: string
}
