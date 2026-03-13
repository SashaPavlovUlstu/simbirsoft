import { Row, Col } from 'antd'

import type { FC } from 'react'
import type { CardGridProps } from './types'

const CardGrid = <T extends unknown>({
  items,
  renderItem,
  xs = 24,
  sm = 12,
  md = 8,
  lg = 6,
  gutter = [24, 24],
}: CardGridProps<T>): ReturnType<FC> => (
  <Row gutter={gutter}>
    {items.map((item, index) => (
      <Col xs={xs} sm={sm} md={md} lg={lg} key={index}>
        {renderItem(item)}
      </Col>
    ))}
  </Row>
)

export default CardGrid
