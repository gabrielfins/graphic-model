import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  color?: 'blue' | 'red';
  hasIcon?: boolean;
}

export default function Button({variant='primary', color='blue', hasIcon=false, className, ...props}: ButtonProps) {
  return (
    <button className={`${styles[variant]} ${color} ${hasIcon ? 'icon' : ''} ${className ? className : ''}`} {...props} />
  );
}
