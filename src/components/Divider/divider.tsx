import { HTMLAttributes } from 'react';
import styles from './divider.module.scss';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction: 'vertical' | 'horizontal';
}

export default function Divider({direction, ...props}: DividerProps) {
  return (
    <div className={`${styles.divider} ${styles[direction]}`} {...props}></div>
  );
}
