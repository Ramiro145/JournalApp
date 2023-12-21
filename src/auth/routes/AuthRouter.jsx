import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useCheckAuth'

export const AuthRouter = () => {
  const {status} = useCheckAuth();

  if(status === 'authenticated'){
    return <Navigate to='/'/>
  }
  return <Outlet/>
}
