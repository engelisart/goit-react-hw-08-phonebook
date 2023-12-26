import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/thunks';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <div>
        <p>{user.name}</p>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
