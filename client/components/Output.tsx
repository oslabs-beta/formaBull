import React, {useContext} from 'react';
import DefaultForm from './DefaultForm';
import { CopyBlock, dracula, nord, monokai } from 'react-code-blocks';
import ScrollToBottom from 'react-scroll-to-bottom';
import Navbar from './NavBar';
import { Resizable } from 're-resizable';
// import jsxToString from 'jsx-to-string';
// import ContextProvider from '../../src/ContextProvider';
import ContextProvider from '../containers/ContextProvider';

export default function Output() {
  const state = useContext(ContextProvider);
  console.log(state); // an array of the components

  const injectFunc = (state: any) => {
    const result = [];
    for(let obj of state.componentOptions) {
      // console.log(obj)
      result.push(obj.data);
    }
    return result
  }

  const componentResults = injectFunc(state);
  let cleanedUpResults = ``;
  for (const each of componentResults) {
    cleanedUpResults += `\n\t` + each;
  } 

  const parse =  `
  import React from "react";
  import { useForm } from "react-hook-form";
  
  type Inputs = {
    example: string,
    exampleRequired: string,
  };
  
  export default function DefaultForm() {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    return (
      <div className = 'default-form'>${cleanedUpResults}
      </div>
    );
  };
      
`;

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
            text={parse}
            showLineNumbers={true}
            codeBlock
            language="typescript"
            theme={dracula}
          />
        </div>
      </ScrollToBottom>
    </Resizable>
  );
}