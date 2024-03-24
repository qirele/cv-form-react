import { useState } from 'react';
import Section from './components/Section.jsx';
import Form from './components/Form.jsx';
import './App.css'

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
        <>
          <h1>Data submitted</h1>
          <button className="btn" onClick={handleEditClick}>Edit</button>
        </>
      }
    </>
  )
}

export default App
