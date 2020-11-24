import React, {useState} from 'react';

function Form() {
  const [name, setName] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleSubmit() {
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Nombre</label>
      </p>
      <input type="text" value={name} onChange={handleChange} id="name" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
