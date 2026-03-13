import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/services/Api'

import type { CompetitionsResponse } from '@/types/Competitions'
import type { Match, MatchesResponse } from '@/types/Matches'

export const competitionsApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Competition'],
  endpoints: (builder) => ({
    getCompetitions: builder.query<CompetitionsResponse, void>({
      query: () => ({
        url: '/competitions',
        method: 'GET',
      }),
      providesTags: ['Competition'],
    }),

    getCompetitionMatches: builder.query<
      Match[],
      { id: string; dateFrom?: string; dateTo?: string }
    >({
      query: ({ id, dateFrom, dateTo }) => {
        const params: Record<string, string> = {}
        if (dateFrom) params.dateFrom = dateFrom
        if (dateTo) params.dateTo = dateTo

        return {
          url: `/competitions/${id}/matches`,
          method: 'GET',
          params,
        }
      },
      transformResponse: (response: MatchesResponse) => response.matches,
      providesTags: ['Competition'],
    }),
  }),
})

export const { useGetCompetitionsQuery, useGetCompetitionMatchesQuery } =
  competitionsApi
