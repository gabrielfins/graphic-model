import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './styles.module.scss';

export default function NavButton(props: NavLinkProps) {
  return (
    <NavLink
      className={(d) => d.isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
      {...props}
    />
  );
}
