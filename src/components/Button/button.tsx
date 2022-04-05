import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({variant='primary', ...props}: ButtonProps) {
  return (
    <button className={styles.primary} {...props} />
  );
}
