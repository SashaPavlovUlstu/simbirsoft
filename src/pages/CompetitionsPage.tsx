import { useGetCompetitionsQuery } from '@/services/CompetitionsApi'
import { useState, useMemo } from 'react'

import { Spin } from 'antd'

import CardGrid from '@/ui_components/CardGrid/CardGrid'
import SearchBar from '@/ui_components/SearchBar/SearchBar'
import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import UniqueCard from '@/ui_components/UniqueCard/UniqueCard'

const PAGE_SIZE = 12

const CompetitionsPage = () => {
  const { data, isLoading, isError } = useGetCompetitionsQuery()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const competitions = data?.competitions ?? []

  const filteredCompetitions = useMemo(() => {
    return competitions.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [competitions, search])

  const start = (page - 1) * PAGE_SIZE
  const currentPageData = filteredCompetitions.slice(start, start + PAGE_SIZE)

  if (isLoading) return <Spin size="large" />
  if (isError) return <ErrorMessage message="Не удалось загрузить лиги" />

  return (
    <PageWrapper>
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
            item={competition}
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
        onChange={(p) => setPage(p)}
      />
    </PageWrapper>
  )
}

export default CompetitionsPage
