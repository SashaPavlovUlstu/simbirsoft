import { Card } from 'antd'
import { Link } from 'react-router-dom'

import type { FC } from 'react'
import type { UniqueCardProps } from './types'

const UniqueCard: FC<UniqueCardProps> = ({
  link,
  title,
  description,
  imageSrc,
  children,
}) => {
  return (
    <Link to={link}>
      <Card
        hoverable
        className="text-center p-5"
        cover={
          imageSrc && (
            <div className="p-5">
              <img
                src={imageSrc}
                alt={title}
                className="h-20 object-contain mx-auto"
              />
            </div>
          )
        }
      >
        <Card.Meta title={title} description={description} />
        {children}
      </Card>
    </Link>
  )
}

export default UniqueCard
