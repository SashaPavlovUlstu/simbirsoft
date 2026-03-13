import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import type { SearchBarProps } from './types'

import type { FC } from 'react'

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => (
  <Input
    placeholder="Поиск"
    allowClear
    size="large"
    className="mb-8"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    prefix={<SearchOutlined className="text-gray-400" />}
  />
)

export default SearchBar
