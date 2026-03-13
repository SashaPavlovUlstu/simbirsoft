import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/services/Api'

import type { TeamsResponse, Team } from '@/types/Teams'
import type { Match, MatchesResponse } from '@/types/Matches'

export const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Team'],
  endpoints: (builder) => ({
    getTeams: builder.query<TeamsResponse, void>({
      query: () => ({
        url: '/teams',
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),

    getTeamById: builder.query<Team, number>({
      query: (id) => ({
        url: `/teams/${id}`,
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),

    getTeamMatches: builder.query<Match[], number>({
      query: (id) => ({
        url: `/teams/${id}/matches`,
        method: 'GET',
      }),
      transformResponse: (response: MatchesResponse) => response.matches,
      providesTags: ['Team'],
    }),
  }),
})

export const { useGetTeamsQuery, useGetTeamByIdQuery, useGetTeamMatchesQuery } =
  teamsApi
