import React, {useContext} from 'react';
import DefaultForm from './DefaultForm';
import { CopyBlock, dracula, nord, monokai } from 'react-code-blocks';
import ScrollToBottom from 'react-scroll-to-bottom';
import TestRenderer from 'react-test-renderer';
import Test from './Test';
import { Resizable } from 're-resizable';
import ContextProvider from '../containers/ContextProvider';


const sampleJSX = `import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function DefaultForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className = 'default-form'>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <label>Name</label>
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <label>Last Name</label>
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      <label>Age</label>
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
}
`


const sampleWithImports = `import React from "react"; \nimport { useForm } from "react-hook-form"; \n\n${DefaultForm}`;
export default function Output() {
  const state = useContext(ContextProvider);
  console.log(state); // an array of the components
  let test = '';
  //do logic to turn state into a string.
  for (let i = 0; i < state.componentsToDisplay.length; i++) {
    test += state.componentsToDisplay[i] + '\n\n';
  };

  return (
    <Resizable
  defaultSize={{
  width: 325,
  height: 700
  }}
>
    <ScrollToBottom>
    <div className = 'output'>
      <CopyBlock 
        text={test}
        showLineNumbers={true}
        codeBlock
        language= "tsx"
        theme={dracula}
        highlight = {true}
      />
    </div>
    </ScrollToBottom>
    </Resizable>
  );
}



