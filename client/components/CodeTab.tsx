import React, {useContext, useState} from 'react';
import { CopyBlock, dracula, nord, monokai, irBlack } from 'react-code-blocks';
import { Resizable } from 're-resizable';
import { AppContext } from '../../src/'
import { SelectTheme } from './SelectTheme'

export const CodeTab = () => {
  /// use hook to check the current elements dropped on canva 
  const { listOfDroppedElements }: any = useContext(AppContext);
  const {theme, setTheme }:any = useContext(AppContext);
  // get all output strings in an array
  const injectFunc = (listofDraggableElements:any) => {
    const result = [];
    for(let obj of listOfDroppedElements) {
      result.push(obj.data);
    }
    return result
  }



console.log(dracula)
const galleryOfThemes = {'dracula': dracula, 'monokai': monokai, 'irBlack': irBlack}
const selectedTheme = galleryOfThemes[theme];

  //display each output string on a separate line in right order
  const componentResults = injectFunc(listOfDroppedElements);
  let cleanedUpResults = ``;
  for (const each of componentResults) {
    cleanedUpResults += `\n\t` + each;
  } 

  const parse = `import React from "react";
import { useForm } from "react-hook-form";
  

  export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>${cleanedUpResults}
      </form>
    );
  };`

  return (
    <div>
    <SelectTheme />
    <Resizable
      defaultSize={{
      width: 360,
      height: 500
      }}
    >
      <div className = 'output'>
          <CopyBlock 
            text={parse}
            showLineNumbers={true}
            codeBlock
            language="typescript"
            theme={selectedTheme}
            customStyle={{
              overflowY: 'scroll',
              minWidth: '360',
              maxHeight: '650'
            }}
          />
          </div>
  </Resizable>
  </div>
  );
}