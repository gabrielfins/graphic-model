import { Outlet } from 'react-router-dom';
import Navbar from 'components/Home/Navbar/navbar';
import styles from './home-layout.module.scss';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
