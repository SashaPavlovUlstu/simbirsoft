import { DatePicker, Space } from 'antd'
import { useState, type FC } from 'react'
import dayjs from 'dayjs'
import type { DateFilterProps } from './types'

const DateFilter: FC<DateFilterProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null)
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null)

  const handleStartChange = (date: dayjs.Dayjs | null) => {
    setStartDate(date)
    if (date && endDate) {
      onChange([date.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD')])
    } else if (!date) {
      if (endDate) {
        onChange(null)
      } else {
        onChange(null)
      }
    }
  }

  const handleEndChange = (date: dayjs.Dayjs | null) => {
    setEndDate(date)
    if (startDate && date) {
      onChange([startDate.format('YYYY-MM-DD'), date.format('YYYY-MM-DD')])
    } else if (!date) {
      if (startDate) {
        onChange(null)
      } else {
        onChange(null)
      }
    }
  }

  return (
    <Space className="mt-12 mb-5" size={12} align="start">
      <span>Матчи с</span>
      <DatePicker
        value={startDate}
        onChange={handleStartChange}
        placeholder=""
        allowClear
      />

      <span>по</span>
      <DatePicker
        value={endDate}
        onChange={handleEndChange}
        placeholder=""
        allowClear
      />
    </Space>
  )
}

export default DateFilter
