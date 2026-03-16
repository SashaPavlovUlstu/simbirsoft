import { Route, Routes } from 'react-router-dom'

import AppLayout from '@/components/AppLayout/AppLayout'
import CompetitionsPage from '@/pages/CompetitionsPage/CompetitionsPage'

import { navigateRouter } from './Routes'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<CompetitionsPage />} />
          {navigateRouter.map((router) => (
            <Route
              key={router.path}
              path={router.path}
              element={router.element}
            />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes
