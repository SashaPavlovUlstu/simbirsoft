import { useGetCompetitionMatchesQuery } from '@/services/CompetitionsApi'
import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'

import DateFilter from '@/components/DateFilter/DateFilter'
import AppBreadcrumb from '@/components/Breadcrumb/Breadcrumb'
import BaseTable from '@/components/BaseTable/BaseTable'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { leaguesBreadcrumb } from '@/utils/breadcrumb'

import { MATCHESCOLUMNS } from '@/constants/matches'
import { useDateFilteredMatches } from '@/hooks/UseDateFilter'

const CompetitionPage = () => {
  const { id } = useParams<{ id: string }>()
  const [dates, setDates] = useState<[string, string] | null>(null)

  const { data: matches = [], isLoading } = useGetCompetitionMatchesQuery({
    id: id!,
    dateFrom: dates?.[0],
    dateTo: dates?.[1],
  })

  const filteredMatches = useDateFilteredMatches(matches, dates)

  const competitionName = matches[0]?.competition?.name

  return (
    <PageWrapper>
      <AppBreadcrumb
        className="mb-5"
        items={leaguesBreadcrumb(competitionName)}
      />
      <DateFilter onChange={setDates} />
      <BaseTable
        data={filteredMatches}
        columns={MATCHESCOLUMNS}
        loading={isLoading}
      />
    </PageWrapper>
  )
}

export default CompetitionPage
