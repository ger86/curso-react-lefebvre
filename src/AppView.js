import PropTypes from 'prop-types';
import 'App.css';

export default function AppView({
  form: { name, job, message },
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
          <label>Trabajo</label>
        </p>
        <input type="text" value={job} onChange={onInputChange} name="job" />
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
    job: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  onClickUndo: PropTypes.func.isRequired,
};
