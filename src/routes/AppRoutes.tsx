import { Route, Routes } from 'react-router-dom'
import { navigateRouter } from './Routes'
import AppLayout from '@/components/AppLayout/AppLayout'
import CompetitionsPage from '@/pages/CompetitionsPage'

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
