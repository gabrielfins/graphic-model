import { ButtonHTMLAttributes } from 'react';
import styles from './editor-button.module.scss'

export default function ToolboxButton({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.toolboxButton} ${className ? className : ''}`} {...props} />
  );
}
