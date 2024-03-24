import Section from "./Section"

export default function Form({ onSubmit, onInputChange, formData }) {

  return (
    <form onSubmit={onSubmit}>
      <Section title="General Information">
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName"
            value={formData.firstName}
            onChange={onInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName"
            value={formData.lastName}
            onChange={onInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
            value={formData.email}
            onChange={onInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone"
            value={formData.phone}
            onChange={onInputChange} />
        </div>
      </Section>
      <Section title="Educational Experience">
        <div className="input-wrapper">
          <label htmlFor="school">School name</label>
          <input type="text" id="school"
            value={formData.school}
            onChange={onInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="studyTitle">Title of study</label>
          <input type="text" id="studyTitle"
            value={formData.studyTitle}
            onChange={onInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="studyDate">Date of study</label>
          <input type="date" id="studyDate"
            value={formData.studyDate}
            onChange={onInputChange} />
        </div>
      </Section>
      <Section title="Practical Experience">
        <div>
          <label htmlFor="workCompanyName">Company name</label>
          <input type="text" id="workCompanyName"
            value={formData.workCompanyName}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="workPositionTitle">Position title</label>
          <input type="text" id="workPositionTitle"
            value={formData.workPositionTitle}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="workResponsibilities">Work responsibilities</label>

          {/* todo: add a button to add responsibilities to array*/}
          <input type="text" id="workResponsibilities"
            value={formData.workResponsibilities}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="workDateFrom">Date from</label>
          <input type="text" id="workDateFrom"
            value={formData.workDateFrom}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="workDateUntil">Date until</label>
          <input type="text" id="workDateUntil"
            value={formData.workDateUntil}
            onChange={onInputChange}
          />
        </div>
      </Section>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
