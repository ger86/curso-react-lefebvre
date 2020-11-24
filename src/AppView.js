import PropTypes from 'prop-types';
import 'App.css';

export default function AppView({
  name,
  onChangeName,
  email,
  onChangeEmail,
  message,
  onChangeMessage,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <p>
          <label>Nombre</label>
        </p>
        <input type="text" value={name} onChange={onChangeName} />
      </div>
      <div>
        <p>
          <label>Email</label>
        </p>
        <input type="text" value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <p>
          <label>Mensaje</label>
        </p>
        <textarea onChange={onChangeMessage}>{message}</textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

AppView.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
