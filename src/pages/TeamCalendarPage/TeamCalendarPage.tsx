import { useState } from 'react'
import { useParams } from 'react-router-dom'

import AppBreadcrumb from '@/components/Breadcrumb/Breadcrumb'
import BaseTable from '@/components/BaseTable/BaseTable'
import DateFilter from '@/components/DateFilter/DateFilter'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { TEAM_MATCHES_COLUMNS } from '@/config/matchColumns'

import { useDateFilteredMatches } from '@/hooks/UseDateFilter'
import { useTeamCalendar } from '@/hooks/useTeamCalendar'

import { createBreadcrumb } from '@/utils/breadcrumb'

import styles from './TeamCalendarPage.module.css'

const TeamCalendarPage = () => {
  const { id } = useParams<{ id: string }>()
  const [dates, setDates] = useState<[string, string] | null>(null)

  const { team, matches, isLoading } = useTeamCalendar(id)
  const filteredMatches = useDateFilteredMatches(matches, dates)

  return (
    <PageWrapper>
      <AppBreadcrumb
        className={styles.breadcrumb}
        items={createBreadcrumb('Команды', '/teams', team?.name)}
      />
      <DateFilter onChange={setDates} />
      <BaseTable
        data={filteredMatches}
        columns={TEAM_MATCHES_COLUMNS}
        loading={isLoading}
      />
    </PageWrapper>
  )
}

export default TeamCalendarPage
