import styles from '../styles/InputContainer.module.css';

export default function InputContainer({
  type, text, id, onChange, formData, required }) {
  const isEmpty = formData[id] === "";

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{text}</label>
      <input type={type}
        id={id}
        value={formData[id]}
        onChange={onChange}
        className={isEmpty ? styles.error : ""}
      />
      {isEmpty &&
        <p className={styles.error}>I think you haven't typed anything yet</p>
      }

      {required &&
        <span className={styles.required}>Required field</span>
      }
    </div>
  )
}
