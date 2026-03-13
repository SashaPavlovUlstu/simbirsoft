import { Route, Routes } from 'react-router-dom'
import { navigateRouter } from './Routes'
import AppLayout from '@/components/AppLayout/AppLayout'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
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
