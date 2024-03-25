import styles from '../styles/InputContainer.module.css';

export default function InputContainer({
  type, text, id, onChange, formData }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{text}</label>
      <input type={type}
        id={id}
        value={formData[id]}
        onChange={onChange}
      />
    </div>
  )
}
