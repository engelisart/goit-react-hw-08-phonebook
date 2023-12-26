import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <div>
        <h1>Sorry page is not found!</h1>
        <NavLink to="/">Go to homepage!</NavLink>
      </div>
    </div>
  );
};
