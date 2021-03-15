import React, {useContext, useState} from 'react';
import { CopyBlock, dracula, nord, monokai, irBlack, a11yDark, a11yLight, anOldHope, androidstudio, arta, atomOneDark, github, monoBlue, obsidian, ocean, rainbow } from 'react-code-blocks';
import { Resizable } from 're-resizable';
import { AppContext } from '../../src/';
import { SelectTheme } from './SelectTheme';


export const CodeTab = () => {
  const { listOfDroppedElements }: any = useContext(AppContext);

  const {theme, setTheme }:any = useContext(AppContext);

  const galleryOfThemes: any = {'dracula': dracula, 'monokai': monokai, 'irBlack': irBlack, 'nord': nord, 'a11yDark': a11yDark, 'a11yLight': a11yLight, 'anOldHope': anOldHope, 'androidstudio': androidstudio, 'arta': arta, 'atomOneDark': atomOneDark, 'github': github, 'monoBlue': monoBlue, 'obsidian': obsidian, 'ocean': ocean, 'rainbow': rainbow };

  const selectedTheme: object = galleryOfThemes[theme];

  const injectFunc = (listofDraggableElements: any) => {
    const result: string[] = [];
    const linkedListCode = listOfDroppedElements[0];
    let cur = linkedListCode.head;
    while (cur) {
      result.push(cur.val.data);
      cur = cur.next;
    };
    let cleanedUpResults = ``;
    for (const each of result) cleanedUpResults += `\n\t` + each;
    return cleanedUpResults;
  };

  const parse = `import React from "react";
import { useForm } from "react-hook-form";
  

  export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>${injectFunc(listOfDroppedElements)}
      </form>
    );
  };`;

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
              maxHeight: '715'   
            }}
          />
        </div>
      </Resizable>
    </div>
  );
};
