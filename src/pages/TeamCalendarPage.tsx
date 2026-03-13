import { useParams } from 'react-router-dom'
import {useState } from 'react'
import {
  useGetTeamByIdQuery,
  useGetTeamMatchesQuery,
} from '@/services/TeamsApi'

import AppBreadcrumb from '@/components/Breadcrumb/Breadcrumb'
import DateFilter from '@/components/DateFilter/DateFilter'
import BaseTable from '@/components/BaseTable/BaseTable'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { TEAMMATCHESCOLUMNS } from '@/constants/matches'

import { teamsBreadcrumb } from '@/utils/breadcrumb'
import { useDateFilteredMatches } from '@/hooks/UseDateFilter'

const TeamCalendarPage = () => {
  const { id } = useParams<{ id: string }>()
  const [dates, setDates] = useState<[string, string] | null>(null)

  const { data: team } = useGetTeamByIdQuery(Number(id))
  const { data: matches = [], isLoading } = useGetTeamMatchesQuery(Number(id), {
    skip: !id,
  })

  const filteredMatches = useDateFilteredMatches(matches, dates)

  return (
    <PageWrapper>
      <AppBreadcrumb items={teamsBreadcrumb(team?.name)} />
      <DateFilter onChange={setDates} />
      <BaseTable
        data={filteredMatches}
        columns={TEAMMATCHESCOLUMNS}
        loading={isLoading}
      />
    </PageWrapper>
  )
}

export default TeamCalendarPage
