import { useEffect, useState } from 'react';
import { BsFillCursorFill } from 'react-icons/bs'
import EditorButton from 'components/Editor/EditorButton/editor-button';
import * as Icons from 'components/Common/Icons/icons';
import styles from './toolbox.module.scss';

export default function Toolbox() {
  const [activeButton, setActiveButton] = useState('b');

  useEffect(() => {
    const possibleKeys = ['b', 'e', 'f', 'y', 'r', 'z', 'n', 's', 'x', 'g', 'a', 'o', 'm', 'c', 't'];
    const handleKeypress = (e: KeyboardEvent) => {
      if (possibleKeys.includes(e.key)) {
        setActiveButton(e.key)
      }
    }

    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    }
  }, []);

  const handleClick = (key: string): void => {
    setActiveButton(key);
  }

  return (
    <div className={styles.toolbox}>
      <EditorButton className={activeButton === 'b' ? styles.selected : ''} onMouseDown={() => handleClick('b')}><BsFillCursorFill fontSize="2.4rem" /></EditorButton>
      <EditorButton className={activeButton === 'e' ? styles.selected : ''} onMouseDown={() => handleClick('e')}><Icons.Entity /></EditorButton>
      <EditorButton className={activeButton === 'f' ? styles.selected : ''} onMouseDown={() => handleClick('f')}><Icons.WeakEntity /></EditorButton>
      <EditorButton className={activeButton === 'y' ? styles.selected : ''} onMouseDown={() => handleClick('y')}><Icons.RelationalEntity /></EditorButton>
      <EditorButton className={activeButton === 'r' ? styles.selected : ''} onMouseDown={() => handleClick('r')}><Icons.Relationship /></EditorButton>
      <EditorButton className={activeButton === 'z' ? styles.selected : ''} onMouseDown={() => handleClick('z')}><Icons.SelfRelation /></EditorButton>
      <EditorButton className={activeButton === 'n' ? styles.selected : ''} onMouseDown={() => handleClick('n')}><Icons.CreateRelationship /></EditorButton>
      <EditorButton className={activeButton === 's' ? styles.selected : ''} onMouseDown={() => handleClick('s')}><Icons.Specialization /></EditorButton>
      <EditorButton className={activeButton === 'x' ? styles.selected : ''} onMouseDown={() => handleClick('x')}><Icons.ExclusiveSpecialization /></EditorButton>
      <EditorButton className={activeButton === 'g' ? styles.selected : ''} onMouseDown={() => handleClick('g')}><Icons.Group /></EditorButton>
      <EditorButton className={activeButton === 'k' ? styles.selected : ''} onMouseDown={() => handleClick('k')}><Icons.KeyAttribute /></EditorButton>
      <EditorButton className={activeButton === 'a' ? styles.selected : ''} onMouseDown={() => handleClick('a')}><Icons.Attribute /></EditorButton>
      <EditorButton className={activeButton === 'o' ? styles.selected : ''} onMouseDown={() => handleClick('o')}><Icons.OptionalAttribute /></EditorButton>
      <EditorButton className={activeButton === 'm' ? styles.selected : ''} onMouseDown={() => handleClick('m')}><Icons.MultivalueAttribute /></EditorButton>
      <EditorButton className={activeButton === 'c' ? styles.selected : ''} onMouseDown={() => handleClick('c')}><Icons.CompositeAttribute /></EditorButton>
      <EditorButton className={activeButton === 't' ? styles.selected : ''} onMouseDown={() => handleClick('t')}><Icons.Text /></EditorButton>
    </div>
  );
}
