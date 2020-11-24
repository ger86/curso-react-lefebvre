import {useState} from 'react';
import AppView from './AppView';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeMessage(event) {
    setMessage(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    alert(`${name} ${email} ${message}`);
  }

  return (
    <AppView
      name={name}
      onChangeName={onChangeName}
      email={email}
      onChangeEmail={onChangeEmail}
      message={message}
      onChangeMessage={onChangeMessage}
      onSubmit={onSubmit}
    />
  );
}

export default App;

// Render 1
// count = 0

// Render 2
// count = 1

// Render 3
// count = 2
