import PropTypes from "prop-types";

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  company: PropTypes.string,
});
