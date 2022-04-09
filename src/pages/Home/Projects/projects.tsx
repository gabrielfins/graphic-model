import { FiPlus } from 'react-icons/fi';
import Card from 'components/Home/Card/card';
import Button from 'components/Common/Button/button';
import homeStyles from '../home-pages.module.scss';

export default function Projects() {
  return (
    <div className={homeStyles.wrapper}>
      <div className={homeStyles.titleWrapper}>
        <h1 className={homeStyles.title}>Projetos</h1>
        <Button variant="secondary" hasIcon={true}><FiPlus fontSize="2.4rem" />Novo</Button>
      </div>
      <div className={homeStyles.cards}>
        <Card title="Fodase"></Card>
        <Card title="Fodase"></Card>
        <Card title="Fodase"></Card>
        <Card title="Fodase"></Card>
      </div>
    </div>
  );
}
