import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import User from '../mobX/User';

export type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth = observer(({ children }: RequireAuthProps) => {
  const location = useLocation();

  if (!localStorage.getItem('token')) {
    return <Navigate to='auth' state={{ from: location }} />;
  }

  return children;
});
