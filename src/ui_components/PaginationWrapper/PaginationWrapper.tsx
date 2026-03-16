import type { FC } from 'react'
import { ConfigProvider, Pagination } from 'antd'

import { paginationStyles, paginationTheme } from './config'
import type { PaginationWrapperProps } from './types'

import styles from './PaginationWrapper.module.css'

const jumpEllipsis = <span className={styles.jumpEllipsis}>•••</span>

const PaginationWrapper: FC<PaginationWrapperProps> = ({
  current,
  total,
  pageSize,
  onChange,
}) => {
  if (Math.ceil(total / pageSize) <= 1) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <ConfigProvider theme={paginationTheme}>
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
          rootClassName={styles.pagination}
          styles={paginationStyles}
          jumpPrevIcon={jumpEllipsis}
          jumpNextIcon={jumpEllipsis}
          showSizeChanger={false}
          showLessItems
          size="small"
        />
      </ConfigProvider>
    </div>
  )
}

export default PaginationWrapper
