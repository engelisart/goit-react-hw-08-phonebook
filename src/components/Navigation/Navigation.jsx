import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.navLinkHome} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLinkHome} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
