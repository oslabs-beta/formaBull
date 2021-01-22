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

/**
 * Form elements
	⁃	<input type="button">
	⁃	<input type="checkbox">
	•	<input type="color">
	•	<input type="date">
	•	<input type="datetime-local">
	⁃	<input type="email">
	⁃	<input type="file">
	•	<input type="hidden">
	•	<input type="image">
	•	<input type="month">
	•	<input type="number">
	⁃	<input type="password">
	⁃	<input type="radio">
	•	<input type="range">
	•	<input type="reset">
	•	<input type="search">
	⁃	<input type="submit">
	•	<input type="tel">
	⁃	<input type="text">
	•	<input type="time">
	•	<input type="url">
	•	<input type="week">

input type text: firstName, lastName
input type number: age
input type email
input type password

 * 
 * 
 * 
 */