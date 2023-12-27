import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'store/auth/thunks';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutThunk());

  return (
    <>
      <div className={css.containerUserMenu}>
        <p className={css.userName}>Welcom {user.name}</p>
        <button
          className={css.buttonUserMenu}
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </>
  );
};
