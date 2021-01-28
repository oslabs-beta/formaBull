import React from 'react'
import { render } from 'react-dom'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContextProvider } from './ContextProvider'
import App from '../client/containers/App'

export const AppContext = React.createContext([])

render(
  // Any child component of our ContextProvider component will have access to the store.
  <ContextProvider>
    <DndProvider backend={HTML5Backend}>
      <App />,
    </ DndProvider>
  </ContextProvider>,
  document.getElementById('root')
);
