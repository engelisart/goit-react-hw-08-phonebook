import { Layout } from 'components/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUserThunk } from 'store/auth/thunks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { NotFound } from 'pages/NotFound';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
