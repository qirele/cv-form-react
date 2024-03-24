import Section from './Section';

export default function Display({ formData, handleEditClick }) {
  return (
    <Section title="Submitted Data">
      <div>
        <p>Name: {formData.firstName + " " + formData.lastName}</p>
      </div>
      <div>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <p>School: {formData.school}</p>
      </div>
      <div>
        <p>Title of study: {formData.studyTitle}</p>
      </div>
      <div>
        <p>Date of study: {formData.studyDate}</p>
      </div>
      {Object.keys(formData).map(el => {
        return <p key={el}>{el}: {formData[el]}</p>
      })}
      <button className="btn" onClick={handleEditClick}>Edit</button>
    </Section>
  );
}
