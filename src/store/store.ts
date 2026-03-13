import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { competitionsApi } from '@/services/CompetitionsApi'
import { teamsApi } from '@/services/TeamsApi'

export const rootReducer = combineReducers({
  [competitionsApi.reducerPath]: competitionsApi.reducer,
  [teamsApi.reducerPath]: teamsApi.reducer,
})

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(competitionsApi.middleware)
      .concat(teamsApi.middleware),
})

export type AppStore = typeof setupStore
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof setupStore.dispatch
