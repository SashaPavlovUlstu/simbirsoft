import { useGetTeamsQuery } from '@/services/TeamsApi'
import { useState, useMemo } from 'react'

import { Spin } from 'antd'

import CardGrid from '@/ui_components/CardGrid/CardGrid'
import SearchBar from '@/ui_components/SearchBar/SearchBar'
import PaginationWrapper from '@/ui_components/PaginationWrapper/PaginationWrapper'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import UniqueCard from '@/ui_components/UniqueCard/UniqueCard'

const PAGE_SIZE = 12

const TeamsPage = () => {
  const { data, isLoading, isError } = useGetTeamsQuery()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const teams = data?.teams ?? []

  const filteredTeams = useMemo(() => {
    return teams.filter((team) =>
      team.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [teams, search])

  const start = (page - 1) * PAGE_SIZE
  const currentPageData = filteredTeams.slice(start, start + PAGE_SIZE)

  if (isLoading) return <Spin size="large" />
  if (isError) return <ErrorMessage message="Не удалось загрузить команды" />

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
        renderItem={(team) => (
          <UniqueCard
            item={team}
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
        onChange={(p) => setPage(p)}
      />
    </PageWrapper>
  )
}

export default TeamsPage
