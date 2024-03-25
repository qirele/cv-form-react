import { useState } from 'react';
import Form from './components/Form.jsx';
import Display from './components/Display.jsx';
import './styles/App.css';

function App() {
  // editing, looking(looking at data after submit)
  const [status, setStatus] = useState("editing");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Barlow",
    email: "johnboarlow@gmail.com",
    phone: "502-213-1337",
    school: "Technical school",
    studyTitle: "Programister",
    studyDate: `${new Date(Date.now()).toISOString().split("T")[0]}`,
    workCompanyName: "The business company enterprises esquire",
    workPositionTitle: "Presser of keys",
    workResponsibilities: "Punching, destroying the keyboard",
    workDateFrom: `${new Date(Date.now()).toISOString().split("T")[0]}`,
    workDateUntil: `${new Date(Date.now()).toISOString().split("T")[0]}`,
  });

  const requiredEmpty = formData.firstName === "" || formData.lastName === ""
    || formData.email === "" || formData.phone === "";

  function handleFormSubmit(e) {
    e.preventDefault();
    if (requiredEmpty) {
      return;
    }
    setStatus("looking");
  }

  function handleEditClick() {
    setStatus("editing");
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <>
      {status === "editing" &&
        <Form onSubmit={handleFormSubmit}
          onInputChange={handleInputChange}
          formData={formData}
          shouldSubmit={!requiredEmpty}
        />
      }

      {status === "looking" &&
        <Display formData={formData} handleEditClick={handleEditClick} />
      }
    </>
  )
}

export default App
