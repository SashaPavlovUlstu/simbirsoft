import { useState } from 'react'
import { Spin } from 'antd'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { PAGE_SIZE } from '@/constants/const'

import { useSearchFilter } from '@/hooks/useSearchFilter'
import { useTeams } from '@/hooks/useTeams'

import CardGrid from '@/ui_components/CardGrid/CardGrid'
import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'
import SearchBar from '@/ui_components/SearchBar/SearchBar'
import UniqueCard from '@/ui_components/UniqueCard/UniqueCard'

import styles from './TeamsPage.module.css'

const TeamsPage = () => {
  const { teams, isLoading, isError } = useTeams()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filteredTeams = useSearchFilter(teams, search)

  const start = (page - 1) * PAGE_SIZE
  const currentPageData = filteredTeams.slice(start, start + PAGE_SIZE)

  if (isLoading) return <Spin size="large" />
  if (isError) return <ErrorMessage message="Не удалось загрузить команды" />

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
          renderItem={(team) => (
            <UniqueCard
              link={`/team/${team.id}`}
              title={team.name}
              imageSrc={team.crest}
            />
          )}
        />
        <PaginationWrapper
          current={page}
          pageSize={PAGE_SIZE}
          total={filteredTeams.length}
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </PageWrapper>
  )
}

export default TeamsPage
