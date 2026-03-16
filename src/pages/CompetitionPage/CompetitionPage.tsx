import { useState } from 'react'
import { useParams } from 'react-router-dom'

import AppBreadcrumb from '@/components/Breadcrumb/Breadcrumb'
import BaseTable from '@/components/BaseTable/BaseTable'
import DateFilter from '@/components/DateFilter/DateFilter'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

import { MATCHES_COLUMNS } from '@/config/matchColumns'

import { useCompetitionMatches } from '@/hooks/useCompetitionMatches'
import { useDateFilteredMatches } from '@/hooks/UseDateFilter'

import { createBreadcrumb } from '@/utils/breadcrumb'

import styles from './CompetitionPage.module.css'

const CompetitionPage = () => {
  const { id } = useParams<{ id: string }>()
  const [dates, setDates] = useState<[string, string] | null>(null)

  const { matches, isLoading } = useCompetitionMatches({
    id,
    dateFrom: dates?.[0],
    dateTo: dates?.[1],
  })

  const filteredMatches = useDateFilteredMatches(matches, dates)
  const competitionName = matches[0]?.competition?.name

  return (
    <PageWrapper>
      <AppBreadcrumb
        className={styles.breadcrumb}
        items={createBreadcrumb('Лиги', '/', competitionName)}
      />
      <DateFilter onChange={setDates} />
      <BaseTable
        data={filteredMatches}
        columns={MATCHES_COLUMNS}
        loading={isLoading}
      />
    </PageWrapper>
  )
}

export default CompetitionPage
