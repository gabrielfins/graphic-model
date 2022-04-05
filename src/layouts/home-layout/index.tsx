import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import styles from './styles.module.scss';

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