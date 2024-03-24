import { useState } from 'react';
import Form from './components/Form.jsx';
import Display from './components/Display.jsx';
import './styles/App.css';

function App() {
  const [status, setStatus] = useState("editing"); // editing, looking(looking at data after submit)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    studyTitle: "",
    studyDate: "",
    workCompanyName: "",
    workPositionTitle: "",
    workResponsibilities: "",
    workDateFrom: "",
    workDateUntil: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
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
        />
      }

      {status === "looking" &&
        <Display formData={formData} handleEditClick={handleEditClick} />
      }
    </>
  )
}

export default App
