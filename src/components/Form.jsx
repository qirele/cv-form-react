import Section from "./Section"
import InputContainer from "./InputContainer";
import styles from '../styles/Form.module.css';

export default function Form({ onSubmit, onInputChange, formData }) {

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmit} className="container">
        <Section title="General Information">
          <InputContainer
            type="text"
            text="First Name"
            id="firstName"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="text"
            text="Last Name"
            id="lastName"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="email"
            text="Email"
            id="email"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="tel"
            text="Phone number"
            id="phone"
            formData={formData}
            onChange={onInputChange}
          />
        </Section>
        <Section title="Educational Experience">
          <InputContainer
            type="text"
            text="School name"
            id="school"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="text"
            text="Title of study"
            id="studyTitle"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="date"
            text="Date of study"
            id="studyDate"
            formData={formData}
            onChange={onInputChange}
          />
        </Section>
        <Section title="Practical Experience">
          <InputContainer
            type="text"
            text="Company name"
            id="workCompanyName"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="text"
            text="Position title"
            id="workPositionTitle"
            formData={formData}
            onChange={onInputChange}
          />
          {/* todo: add a button to add responsibilities to array*/}
          <InputContainer
            type="text"
            text="Work responsibilities"
            id="workResponsibilities"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="date"
            text="Date from"
            id="workDateFrom"
            formData={formData}
            onChange={onInputChange}
          />
          <InputContainer
            type="date"
            text="Date until"
            id="workDateUntil"
            formData={formData}
            onChange={onInputChange}
          />
        </Section>
        <div>
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>

    </div>
  )
}
