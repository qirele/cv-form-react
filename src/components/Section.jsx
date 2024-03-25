import styles from '../styles/Section.module.css';

export default function Section({ title, children, helperClass }) {
  return (
    <section className={styles.section + " "
      + (helperClass ? helperClass : "")} >
      <h1>{title}</h1>
      {children}
    </section>
  );
}
