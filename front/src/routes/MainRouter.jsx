import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '../app';
import { AuthRoutes } from '../auth';
import { useAuthStore } from '../hooks';




export const MainRouter = () => {

  //const authStatus = 'non-authenticated';
  useEffect(() => {
    checkToken();
  }, [])

  const { status, checkToken } = useAuthStore()





  return (
    <Routes>
      {
        (status === 'non-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<AuthRoutes />}></Route>
              <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
            </>

          )
          : (
            <>
              <Route path="/*" element={<AppRoutes />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </>
          )
      }
    </Routes>
  )
}
