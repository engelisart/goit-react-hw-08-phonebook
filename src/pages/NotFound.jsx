import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const styles = {
  notFound: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const NotFound = () => {
  return (
    <div style={styles.notFound}>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div>
        <h1>Sorry page is not found!</h1>
        <Link to="/">Go to homepage!</Link>
      </div>
    </div>
  );
};
