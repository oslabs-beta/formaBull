import React, {useContext, useState} from 'react';
import { CopyBlock, dracula, nord, monokai, irBlack, a11yDark, a11yLight, anOldHope, androidstudio, arta, atomOneDark, github, monoBlue, obsidian, ocean, rainbow } from 'react-code-blocks';
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



//match the theme object with selected string from Context Provider
const galleryOfThemes = {'dracula': dracula, 'monokai': monokai, 'irBlack': irBlack, 'nord': nord, 'a11yDark': a11yDark, 'a11yLight': a11yLight, 'anOldHope': anOldHope, 'androidstudio': androidstudio, 'arta': arta, 'atomOneDark': atomOneDark, 'github': github, 'monoBlue': monoBlue, 'obsidian': obsidian, 'ocean': ocean, 'rainbow': rainbow };
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
      width: 370,
      height: 500,
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
              maxHeight: '765'    
            }}
          />
          </div>
  </Resizable>
  </div>
  );
}