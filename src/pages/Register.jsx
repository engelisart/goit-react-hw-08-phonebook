import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { registerThunk } from 'store/auth/thunks';

import css from '../components/pages.css/Register.module.css';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = data;
    dispatch(
      registerThunk({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(data => {
        toast.success(`Welcome ${data.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });

    setData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleData = e => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <form
          className={css.formRegister}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label className={css.ladelRegister}>
            Name
            <input
              className={css.inputRegister}
              type="text"
              name="name"
              value={data.name}
              onChange={handleData}
              required
              placeholder="Enter the Name"
            />
          </label>
          <label className={css.ladelRegister}>
            Email
            <input
              className={css.inputRegister}
              type="email"
              name="email"
              value={data.email}
              onChange={handleData}
              required
              placeholder="Enter the Email"
            />
          </label>
          <label className={css.ladelRegister}>
            Password
            <input
              className={css.inputRegister}
              type="password"
              name="password"
              value={data.password}
              onChange={handleData}
              required
              placeholder="Enter the Password"
            />
          </label>
          <button className={css.buttonRegister} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
