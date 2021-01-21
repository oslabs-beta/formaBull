import React from 'react';

interface AppContextInterface {
  componentsToDisplay: Symbol,
}

function NameComponent () {
  let name = '';
  const variablename = [3, 'string'];
  const four = 4;
}

/// Initial state////
const AppContext = React.createContext({
  componentsToDisplay: [() => console.log('test'), () => console.log('second test'), NameComponent],
  
});
export default AppContext;