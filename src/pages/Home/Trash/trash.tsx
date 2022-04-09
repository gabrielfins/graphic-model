import { FiTrash2 } from 'react-icons/fi';
import Card from 'components/Home/Card/card';
import Button from 'components/Common/Button/button';
import homeStyles from '../home-pages.module.scss';

export default function Trash() {
  return (
    <div className={homeStyles.wrapper}>
      <div className={homeStyles.titleWrapper}>
        <h1 className={homeStyles.title}>Lixeira</h1>
        <Button variant="secondary" color="red"><FiTrash2 fontSize="2.4rem" />Excluir Permanentemente</Button>
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
