import { useState } from 'react';
import styles from './properties-tab.module.scss';

export default function PropertiesTab() {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.properties}>
      <div className={styles.tabSelectors}>
        <button className={`${styles.tabButton} ${selected === 0 ? 'selected' : ''}`} onClick={() => setSelected(0)}>Edição</button>
        <button className={`${styles.tabButton} ${selected === 1 ? 'selected' : ''}`} onClick={() => setSelected(1)}>Configurações</button>
      </div>
    </div>
  );
}
