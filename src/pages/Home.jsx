import { Helmet } from 'react-helmet';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 100,
    fontSize: 60,
    textAlign: 'center',
    color: '#1f1f1f',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 style={styles.title}>
        Welcome to contact manager
        <span role="img" aria-label="Greeting icon">
          🤳
        </span>
      </h1>
    </div>
  );
};
export default Home;
