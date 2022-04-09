import { AlignLeft, AlignHorizontalCenter, AlignRight, AlignTop, AlignVerticalCenter, AlignBottom } from 'akar-icons';
import { FiUpload } from 'react-icons/fi';
import Button from 'components/Common/Button/button';
import EditorButton from 'components/Editor/EditorButton/editor-button';
import styles from './menu-strip.module.scss';

export default function MenuStrip() {
  return (
    <div className={styles.menuStrip}>
      <div className={styles.alignmentContainer}>
        <p>Alinhar</p>
        <div className={styles.alignment}>
          <EditorButton><AlignLeft fontSize="2.4rem" /></EditorButton>
          <EditorButton><AlignHorizontalCenter fontSize="2.4rem" /></EditorButton>
          <EditorButton><AlignRight fontSize="2.4rem" /></EditorButton>
          <EditorButton><AlignTop fontSize="2.4rem" /></EditorButton>
          <EditorButton><AlignVerticalCenter fontSize="2.4rem" /></EditorButton>
          <EditorButton><AlignBottom fontSize="2.4rem" /></EditorButton>
        </div>
      </div>
      <Button variant="secondary"><FiUpload fontSize="1.8rem" />Exportar</Button>
    </div>
  );
}
