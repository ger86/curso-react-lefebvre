import {useReducer} from 'react';
import AppView from './AppView';

function reducer(state, action) {
  const {type, payload} = action;
  if (type === 'ON_CHANGE_INPUT') {
    const lastForm = state[state.length - 1];
    return [
      ...state,
      {
        ...lastForm,
        [payload.target.name]: payload.target.value
      }
    ];
  } else if (type === 'RESET_FORM') {
    return [
      {
        name: '',
        job: '',
        message: ''
      }
    ];
  } else if (type === 'UNDO') {
    return state.slice(0, state.length - 1);
  }
  return state;
}

function App() {
  const [form, dispatch] = useReducer(reducer, [
    {
      name: '',
      job: '',
      message: ''
    }
  ]);

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

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form[form.length - 1])
      });
      alert(response.status);
    } catch (error) {
      alert(error);
    }
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
