import { NavLink } from 'react-router-dom';
import styles from './card.module.scss';

interface CardProps {
  sourceFile?: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <NavLink className={styles.card} to={`/editor/project/${props.title}`} draggable={false}>
      <div className={styles.preview}></div>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
    </NavLink>
  );
}
