import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
}

export default function Button({variant='primary', ...props}: ButtonProps) {
  return (
    <button className={styles[variant]} {...props} />
  );
}