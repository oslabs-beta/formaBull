import React from 'react';

interface AppContextInterface {
  componentsToDisplay: Symbol,
}

//define components that we want to drag from LeftSideBar
const compOptions = [
  function NameComponent () {
    let firstName = '';
  },
  function AgeComponent () {
    let age = 20;
  }

]

/// Initial state////
const AppContext = React.createContext({
  componentsToDisplay: [compOptions[0]],
  componentOptions: [...compOptions],
});
export default AppContext;