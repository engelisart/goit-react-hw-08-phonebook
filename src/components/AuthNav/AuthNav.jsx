import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.navLinkHome} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.navLinkHome} to="/register">
        Register
      </NavLink>
    </div>
  );
};
