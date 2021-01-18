import React from 'react';
import { render } from 'react-dom';
import '../../style.scss'
import Landing from './Landing'


const App = () => {
  return (
    <div>
    <Landing />
    </div>
  )
};

render(<App />, document.getElementById('root'));

export default App



