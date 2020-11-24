import React, {useState} from 'react';

function Form() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  function handleChangeName(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      setImagePreview(reader.result);
    };
  }

  function handleSubmit() {
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          <label>Nombre</label>
        </p>
        <input type="text" value={name} onChange={handleChangeName} id="name" />
      </div>
      <div>
        <p>
          <label>Imagen</label>
        </p>
        <input type="file" onChange={handleChangeImage} />
        {imagePreview && <img src={imagePreview} />}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
