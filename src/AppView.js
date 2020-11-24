import PropTypes from 'prop-types';
import 'App.css';

export default function AppView({
  form: { name, email, message },
  onInputChange,
  onSubmit,
  onClickReset,
  onClickUndo
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <p>
          <label>Nombre</label>
        </p>
        <input type="text" value={name} onChange={onInputChange} name="name" />
      </div>
      <div>
        <p>
          <label>Email</label>
        </p>
        <input type="text" value={email} onChange={onInputChange} name="email" />
      </div>
      <div>
        <p>
          <label>Mensaje</label>
        </p>
        <textarea name="message" onChange={onInputChange} value={message} />
      </div>
      <button type="submit">Enviar</button>
      <button onClick={onClickReset}>Resetear</button>
      <button onClick={onClickUndo}>Deshacer</button>
    </form>
  );
}

AppView.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  onClickUndo: PropTypes.func.isRequired,
};
