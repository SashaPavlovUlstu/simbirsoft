import { useMemo, useState, type FC } from 'react'
import { Table } from 'antd'

import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'

import type { BaseTableProps } from './types'

import styles from './BaseTable.module.css'

const BaseTable: FC<BaseTableProps> = ({
  data,
  columns,
  loading = false,
  pageSize = 10,
  rowKey = 'id',
}) => {
  const [page, setPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [data, page, pageSize])

  return (
    <div className={styles.table}>
      <div className={styles.content}>
        <Table
          rowKey={rowKey}
          columns={columns}
          dataSource={paginatedData}
          loading={loading}
          pagination={false}
          showHeader={false}
          locale={{
            emptyText: loading ? 'Загрузка' : 'Данные отсутствуют',
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
