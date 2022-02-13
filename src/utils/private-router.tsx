import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const isAuth = localStorage.getItem('userAuth');

  if (!isAuth) {
    return <Navigate to='/' />;
  }

  return children;
};

export default PrivateRoute;
