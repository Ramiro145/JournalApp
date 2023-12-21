import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useCheckAuth'

export const JournalRouter = () => {
  const {status} = useCheckAuth();
  if(status === 'not-authenticated'){
    return <Navigate to='auth/login'/>
  }
  return <Outlet/>
}
