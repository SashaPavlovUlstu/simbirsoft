import { useState } from 'react'
import { Spin } from 'antd'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { PAGE_SIZE } from '@/constants/const'

import { useCompetitions } from '@/hooks/useCompetitions'
import { useSearchFilter } from '@/hooks/useSearchFilter'

import CardGrid from '@/ui_components/CardGrid/CardGrid'
import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'
import SearchBar from '@/ui_components/SearchBar/SearchBar'
import UniqueCard from '@/ui_components/UniqueCard/UniqueCard'

import styles from './CompetitionsPage.module.css'

const CompetitionsPage = () => {
  const { competitions, isLoading, isError } = useCompetitions()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filteredCompetitions = useSearchFilter(competitions, search)

  const start = (page - 1) * PAGE_SIZE
  const currentPageData = filteredCompetitions.slice(start, start + PAGE_SIZE)

  if (isLoading) return <Spin size="large" />
  if (isError) return <ErrorMessage message="Не удалось загрузить лиги" />

  return (
    <PageWrapper>
      <div className={styles.content}>
        <SearchBar
          value={search}
          onChange={(value) => {
            setSearch(value)
            setPage(1)
          }}
        />

        <CardGrid
          items={currentPageData}
          renderItem={(competition) => (
            <UniqueCard
              link={`/competition/${competition.id}`}
              title={competition.name}
              description={competition.area.name}
              imageSrc={competition.emblem || ''}
            />
          )}
        />

        <PaginationWrapper
          current={page}
          pageSize={PAGE_SIZE}
          total={filteredCompetitions.length}
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </PageWrapper>
  )
}

export default CompetitionsPage
