import { Outlet } from 'react-router-dom';
import Toolbox from 'components/Editor/Toolbox/toolbox';
import MenuStrip from 'components/Editor/MenuStrip/menu-strip';
import PropertiesTab from 'components/Editor/PropertiesTab/properties-tab';
import styles from './editor-layout.module.scss';

export default function EditorLayout() {
  return (
    <>
      <Toolbox />
      <MenuStrip />
      <main className={styles.main}>
        <Outlet />
      </main>
      <PropertiesTab />
    </>
  );
}
