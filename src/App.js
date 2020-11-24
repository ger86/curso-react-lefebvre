import {useState} from 'react';
import AppView from './AppView';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('placeholder');

  function handleClick() {
    setCount(count + 1);
  }

  function onChangeText(event) {
    setText(event.target.value);
  }

  return (
    <AppView handleClick={handleClick} count={count} onChangeText={onChangeText} text={text} />
  );
}

export default App;
