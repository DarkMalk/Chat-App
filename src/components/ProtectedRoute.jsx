import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ isLogged, children, redirectTo = '/' }) => {
  if (!isLogged) return <Navigate to={redirectTo} />
  return children ? children : <Outlet />
}
