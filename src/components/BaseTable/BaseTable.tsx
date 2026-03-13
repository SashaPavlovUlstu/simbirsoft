import { Table } from 'antd'
import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'

import { useMemo, useState} from 'react'

import type { BaseTableProps } from './types'


const BaseTable = <T extends { id: number | string }>({
  data,
  columns,
  loading = false,
  pageSize = 10,
  rowKey = 'id',
}: BaseTableProps<T>) => {
  const [page, setPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [data, page, pageSize])

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 overflow-auto">
        <Table
          rowKey={rowKey}
          columns={columns}
          dataSource={paginatedData}
          loading={loading}
          pagination={false}
          showHeader={false}
          locale={{
            emptyText: loading ? 'Загрузка...' : 'Данные отсутствуют',
          }}
        />
      </div>

      <PaginationWrapper
        current={page}
        pageSize={pageSize}
        total={data.length}
        onChange={setPage}
      />
    </div>
  )
}

export default BaseTable
