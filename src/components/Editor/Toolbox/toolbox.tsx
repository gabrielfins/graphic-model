import EditorButton from 'components/Editor/EditorButton/editor-button';
import * as Icons from 'components/Common/Icons/icons';
import styles from './toolbox.module.scss';

export default function Toolbox() {
  return (
    <div className={styles.toolbox}>
      <EditorButton><Icons.Entity /></EditorButton>
      <EditorButton><Icons.WeakEntity /></EditorButton>
      <EditorButton><Icons.RelationalEntity /></EditorButton>
      <EditorButton><Icons.Relationship /></EditorButton>
      <EditorButton><Icons.SelfRelation /></EditorButton>
      <EditorButton><Icons.CreateRelationship /></EditorButton>
      <EditorButton><Icons.Specialization /></EditorButton>
      <EditorButton><Icons.ExclusiveSpecialization /></EditorButton>
      <EditorButton><Icons.Group /></EditorButton>
      <EditorButton><Icons.KeyAttribute /></EditorButton>
      <EditorButton><Icons.Attribute /></EditorButton>
      <EditorButton><Icons.OptionalAttribute /></EditorButton>
      <EditorButton><Icons.MultivalueAttribute /></EditorButton>
      <EditorButton><Icons.CompositeAttribute /></EditorButton>
      <EditorButton><Icons.Text /></EditorButton>
    </div>
  );
}
