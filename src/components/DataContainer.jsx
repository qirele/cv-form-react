import styles from '../styles/DataContainer.module.css';

export default function DataContainer({ text, data }) {
  return (
    <div className={styles.dataWrapper}>
      <p>{text}</p>
      <p>{data}</p>
    </div>
  );
}
