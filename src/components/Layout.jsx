import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <div style={styles.layout}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
