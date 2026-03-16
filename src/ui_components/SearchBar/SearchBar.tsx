import type { FC } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import type { SearchBarProps } from './types'

import styles from './SearchBar.module.css'

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => (
  <Input
    placeholder="Поиск"
    allowClear
    size="large"
    className={styles.searchBar}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    prefix={<SearchOutlined className={styles.icon} />}
  />
)

export default SearchBar
