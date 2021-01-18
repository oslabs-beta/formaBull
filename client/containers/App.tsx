import React from 'react';
import { render } from 'react-dom';
import Landing from './Landing'
import '../../style.scss'


export default function App () {
  return (
    <div>
    {/* Use < /> for components invocation and {} for function invocation */}
      <Landing />
    </div>
  )
  
}

render(<App />, document.getElementById('root'));




