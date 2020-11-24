import PropTypes from 'prop-types';

export default function Button({text, onClick}) {
  return <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  text: 'Púlsame'
}