import { Pagination } from 'antd'

import type { FC } from 'react'

import type { PaginationWrapperProps } from './types'

const PaginationWrapper: FC<PaginationWrapperProps> = ({
  current,
  total,
  pageSize,
  onChange,
}) => (
  <div className="mt-10 flex justify-center">
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      showSizeChanger={false}
    />
  </div>
)

export default PaginationWrapper
