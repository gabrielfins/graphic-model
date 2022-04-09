import Card from 'components/Home/Card/card';
import homeStyles from '../home-pages.module.scss';

export default function Início() {
  return (
    <>
      <div className={homeStyles.wrapper}>
        <div className={homeStyles.titleWrapper}>
          <h1 className={homeStyles.title}>Recentes</h1>
        </div>
        <div className={homeStyles.cards}>
          <Card title="Fodase"></Card>
          <Card title="Fodase"></Card>
          <Card title="Fodase"></Card>
          <Card title="Fodase"></Card>
        </div>
      </div>
      <div className={homeStyles.wrapper}>
        <div className={homeStyles.titleWrapper}>
          <h1 className={homeStyles.title}>Modelos</h1>
        </div>
        <div className={homeStyles.cards}>
          <Card title="Conceitual"></Card>
          <Card title="Lógico"></Card>
          <Card title="Fluxograma"></Card>
          <Card title="Organograma"></Card>
        </div>
      </div>
    </>
  );
}
