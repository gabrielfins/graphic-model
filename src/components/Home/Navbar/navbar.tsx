import { FiPlus, FiHome, FiFile, FiTrash2, FiSettings, FiInfo, FiSearch } from 'react-icons/fi';
import Button from 'components/Common/Button/button';
import NavButton from 'components/Common/NavButton/nav-button';
import logo from 'assets/images/logo.svg';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo do Graphic Model" draggable={false} />
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.navbarButton} hasIcon={true}><FiPlus fontSize="2.4rem" />Novo</Button>
        </div>
        <div className={styles.navLinks}>
          <NavButton className={styles.navLink} to="/"><FiHome fontSize="2.4rem" />Início</NavButton>
          <NavButton className={styles.navLink} to="/projects"><FiFile fontSize="2.4rem" />Projetos</NavButton>
          <NavButton className={styles.navLink} to="/trash"><FiTrash2 fontSize="2.4rem" />Lixeira</NavButton>
          <NavButton className={styles.navLink} to="/settings"><FiSettings fontSize="2.4rem" />Configurações</NavButton>
          <NavButton className={styles.navLink} to="/about"><FiInfo fontSize="2.4rem" />Sobre</NavButton>
        </div>
      </nav>
      <nav className={styles.navbar}>
        <div className={styles.search}>
          <FiSearch fontSize="2.4rem" />
          <input type="text" placeholder="Buscar projetos" />
        </div>
      </nav>
    </>
  );
}
