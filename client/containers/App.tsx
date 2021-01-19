import React from 'react';
import { render } from 'react-dom';
import '../../style.scss'
import Landing from './Landing'


export default function App () {
  return (
    <div>
    {/* Use < /> for components invocation and {} for function invocation */}
      <Landing />
    </div>
  )
};

render(<App />, document.getElementById('root'));




