import styles from '../styles/Display.module.css';
import Section from './Section';
import DataContainer from './DataContainer';

export default function Display({ formData, handleEditClick }) {
  return (
    <div className={styles.displayWrapper}>
      <Section title="Submitted Data" helperClass="container">
        <Section title="General Information">
          <DataContainer text="Name"
            data={formData.firstName + " " + formData.lastName} />
          <DataContainer text="Email"
            data={formData.email} />
          <DataContainer text="Phone"
            data={formData.phone} />
        </Section>
        <Section title="Educational Experience">
          <DataContainer text="School"
            data={formData.school} />
          <DataContainer text="Title of study"
            data={formData.studyTitle} />
          <DataContainer text="Date of study"
            data={formData.studyDate} />
        </Section>
        <Section title="Practical Experience">
          <DataContainer text="Company name"
            data={formData.workCompanyName} />
          <DataContainer text="Position Title"
            data={formData.workPositionTitle} />
          <DataContainer text="Work responsibilities"
            data={formData.workResponsibilities} />
          <DataContainer text="Date from"
            data={formData.workDateFrom} />
          <DataContainer text="Date until"
            data={formData.workDateUntil} />
        </Section>
        <button className="btn" onClick={handleEditClick}>Edit</button>
      </Section>
    </div>
  );
}
