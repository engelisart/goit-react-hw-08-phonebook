import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/thunks';

const Login = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogIn = event => {
    event.preventDefault();
    const { email, password } = data;
    dispatch(
      logIn({
        email,
        password,
      })
    );

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

        <form autoComplete="off" onSubmit={handleLogIn}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChangeLogIn}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChangeLogIn}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
