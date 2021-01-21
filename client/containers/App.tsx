import React, {useContext} from 'react';
import { render } from 'react-dom';
import '../../style.scss'
import Landing from './Landing'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import AppContext from './ContextProvider';
import DefaultForm from '../components/DefaultForm';

export default function App () {
  const state = useContext(AppContext)
  return (
    <div>
      <AppContext.Provider value={state.componentsToDisplay}>
      <DndProvider backend={HTML5Backend}>
    {/* Use < /> for components invocation and {} for function invocation */}
      <Landing />
      </DndProvider>
      </AppContext.Provider>
    </div>
  )
};

render(<App />, document.getElementById('root'));




