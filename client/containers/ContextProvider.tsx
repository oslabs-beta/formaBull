import React from 'react';

interface AppContextInterface {
  componentsToDisplay: Symbol,
}

//define components that we want to drag from LeftSideBar
const compOptions = [ //DnDComponents
  // function NameComponent () {
  //   let firstName = '';
  // },
  // function AgeComponent () {
  //   let age = 20;
  // }, 
  // {
  //   id: 'input',
  //   view: 'Input',
  //   output: `import React from "react";
  //   import { useForm } from "react-hook-form";
  //   type Inputs = {
  //     example: string,
  //     exampleRequired: string,
  //   };
    
  //   export default function DefaultForm() {
  //     const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  //     const onSubmit = data => console.log(data);
  //     return (
  //       <div className = 'default-form'>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //       <label>Name </label>
  //         <input name="firstName" defaultValue="test" ref={register} />
  //       </form>
  //       <div>
  //       );
  //     }`
  // },
	
	{
		id: 'firstName',
data: `<label>First Name</label><input name="firstName" defaultValue="Jonny" ref={register} />`
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
    id: 'password',
data: `<label>Password</label>
\t<input name="password" type="password" ref="{register} />`
  },
  {
    id: 'genderBinary',
data: `<label>Gender</label>
\t<input name="gender" type="radio" id="male" value="male" /><label for="male">Male</label><br />
\t<input name="gender" type="radio" id="female" value="female" /><label for="female">Female</label>`
  },
  {
    id: 'checkBox',
data: `<label>Check Box</label>
\t<input name="checkBox" type="checkbox" id="item1" name="item1" /><label for="item1">Item1</label><br />
\t<input name="checkBox" type="checkbox" id="item2" name="item2" /><label for="item2">Item2</label>`
  },
  
]

/// Initial state////
const AppContext = React.createContext({
  componentsToDisplay: [compOptions[0]],
  componentOptions: [...compOptions],
});
export default AppContext;