import { FiPlus, FiHome, FiFile, FiTrash2, FiSettings, FiInfo, FiSearch } from 'react-icons/fi';
import NavButton from 'components/NavButton';
import Divider from 'components/Divider';
import Button from 'components/Button';
import logo from 'assets/graphic-model-logo.svg';
import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={`${styles.wrapper} ${styles.vertical}`}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo do Graphic Model" />
          </div>
          <div className={styles.buttonContainer}>
            <Button><FiPlus fontSize="2.4rem" />Novo</Button>
          </div>
          <div className={styles.navLinks}>
            <NavButton to="/"><FiHome fontSize="2.4rem" />Início</NavButton>
            <NavButton to="/projects"><FiFile fontSize="2.4rem" />Projetos</NavButton>
            <NavButton to="/trash"><FiTrash2 fontSize="2.4rem" />Lixeira</NavButton>
            <NavButton to="/settings"><FiSettings fontSize="2.4rem" />Configurações</NavButton>
            <NavButton to="/about"><FiInfo fontSize="2.4rem" />Sobre</NavButton>
          </div>
        </div>
        <Divider direction="vertical" />
      </div>
      <nav className={styles.navbar}>
        <div className={`${styles.wrapper} ${styles.nav}`}>
          <div className={styles.search}>
            <FiSearch fontSize="2.4rem" />
            <input type="text" placeholder="Buscar projetos" />
          </div>
        </div>
        <Divider direction="horizontal" />
      </nav>
    </>
  );
}