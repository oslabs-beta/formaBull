import React from 'react';
import { render } from 'react-dom';
import '../../style.scss'
import Landing from './Landing'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


export default function App () {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
    {/* Use < /> for components invocation and {} for function invocation */}
      <Landing />
      </DndProvider>
    </div>
  )
};

render(<App />, document.getElementById('root'));




