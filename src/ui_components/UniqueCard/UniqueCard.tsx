import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

import type { UniqueCardProps } from './types'

import styles from './UniqueCard.module.css'

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
        className={styles.card}
        cover={
          imageSrc && (
            <div className={styles.cover}>
              <img src={imageSrc} alt={title} className={styles.image} />
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
