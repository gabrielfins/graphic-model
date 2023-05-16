import { ButtonHTMLAttributes } from 'react';
import styles from './editor-button.module.scss';

export default function EditorButton({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.editorButton} ${className ? className : ''}`} {...props} />
  );
}
