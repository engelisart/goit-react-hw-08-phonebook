import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/thunks';

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
      register({
        name,
        email,
        password,
      })
    );

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
          <title>Registration</title>
        </Helmet>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleData}
              required
              placeholder=""
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleData}
              required
              placeholder=""
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleData}
              required
              placeholder=""
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
