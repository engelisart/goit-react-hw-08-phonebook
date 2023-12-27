import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logInThunk } from 'store/auth/thunks';

import css from '../components/pages.css/Login.module.css';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Login = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogIn = event => {
    event.preventDefault();
    const { email, password } = data;
    dispatch(logInThunk({ email, password }))
      .unwrap()
      .then(data => {
        toast.success(`Welcome ${data.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });

    setData({
      email: '',
      password: '',
    });
  };

  const handleChangeLogIn = event => {
    setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <form
          className={css.formaLogin}
          autoComplete="off"
          onSubmit={handleLogIn}
        >
          <label className={css.labelLogin}>
            Email
            <input
              className={css.inputLogin}
              type="email"
              name="email"
              placeholder="Enter the Email"
              value={data.email}
              onChange={handleChangeLogIn}
            />
          </label>
          <label className={css.labelLogin}>
            Password
            <input
              className={css.inputLogin}
              type="password"
              name="password"
              placeholder="Enter the Password"
              value={data.password}
              onChange={handleChangeLogIn}
            />
          </label>
          <button className={css.buttonLogin} type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
