import PropTypes from 'prop-types';
import 'App.css';
import Button from 'components/UI/Button';

export default function AppView({handleClick, count, onChangeText, text}) {
  return (
    <div className="App">
      <Button onClick={handleClick} text="Incrementar" />
      <p>Mi contador: {count}</p>
      <input type="text" value={text} onChange={onChangeText} id="input" />
      <p>Texto: {text}</p>
    </div>
  );
}

AppView.propTypes = {
  handleClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  onChangeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};