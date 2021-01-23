import React from 'react';

interface AppContextInterface {
  componentsToDisplay: Symbol,
}

//define components that we want to drag from LeftSideBar
const compOptions = [
  // function NameComponent () {
  //   let firstName = '';
  // },
  // function AgeComponent () {
  //   let age = 20;
	// }, 
	// {
	// 	id: 'input',
	// 	data: `<input name="example" defaultValue="test" ref={register} />`,
	// },
	{
		id: 'firstName',
data: `<label>First Name</label>
\t<input name="firstName" defaultValue="Jonny" ref={register} />`
	},
	{
		id: 'lastName',
data: `<label>Last Name</label>
\t<input name="lastName" defaultValue="Bravo" ref={register} />`
	},
  {
    id: 'age',
data: `<label>Age</label>
\t<input name="age" type="number" defaultValue="22" ref={register} />`
  },
  {
    id: `password`,
data: `<label>Password</label>
\t<input name="password" type="password" ref="{register} />`
  },


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