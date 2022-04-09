import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavButtonProps extends NavLinkProps {
  className?: string;
}

export default function NavButton({className='', draggable=false, ...props}: NavButtonProps) {
  return (
    <NavLink
      className={(d) => d.isActive ? `${className} active` : className}
      draggable={draggable}
      {...props}
    />
  );
}
