import {useState} from 'react';
import AppView from './AppView';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleInputChange(event) {
    setForm(function(currentForm) {
      return {
        ...currentForm,
        [event.target.name]: event.target.value
      };
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    alert(`${form.name} ${form.email} ${form.message}`);
  }

  return (
    <AppView
      form={form}
      onInputChange={handleInputChange}
      onSubmit={onSubmit}
    />
  );
}

export default App;