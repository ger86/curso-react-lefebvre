import {useReducer} from 'react';
import AppView from './AppView';

function reducer(state, action) {
  const {type, payload} = action;
  if (type === 'ON_CHANGE_INPUT') {
    const lastForm = state[state.length -1];
    return [
      ...state,
      {
        ...lastForm,
        [payload.target.name]: payload.target.value
      }
    ];
  } else if (type === 'RESET_FORM') {
    return [{
      name: '',
      email: '',
      message: ''
    }];
  } else if(type === 'UNDO') {
    return state.slice(0, state.length - 1);
  }
  return state;
}

function App() {
  const [form, dispatch] = useReducer(reducer, [{
    name: '',
    email: '',
    message: ''
  }]);

  function handleInputChange(event) {
    dispatch({
      type: 'ON_CHANGE_INPUT',
      payload: event
    });
  }

  function resetForm(event) {
    event.preventDefault();
    dispatch({
      type: 'RESET_FORM',
      payload: null
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    alert(`${form.name} ${form.email} ${form.message}`);
  }

  function undo(event) {
    event.preventDefault();
    dispatch({
      type: 'UNDO',
      payload: null
    });
  }

  return (
    <AppView
      form={form[form.length - 1]}
      onInputChange={handleInputChange}
      onSubmit={onSubmit}
      onClickReset={resetForm}
      onClickUndo={undo}
    />
  );
}

export default App;