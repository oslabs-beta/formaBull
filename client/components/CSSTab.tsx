import React, { useContext, useState } from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { CopyBlock, dracula, nord, monokai, irBlack, a11yDark, a11yLight, anOldHope, androidstudio, arta, atomOneDark, github, monoBlue, obsidian, ocean, rainbow } from 'react-code-blocks';
import { Resizable } from 're-resizable';
import { AppContext } from '../../src/';
import { SelectTheme } from './SelectTheme';

const defaultCSS = `html {
  height: 100%;
}

body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  color: white
}

form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

input[type="submit"] {
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  font-weight: lighter;
}
input[type="submit"] {
  padding: 5px;
  background: #516391;
  color: white;
  letter-spacing: 0px;
  text-transform: none;
  padding: 10px;
  letter-spacing: 2px;
}
  
input[type="submit"]:hover {
  background: #ec5990;
  color: white;
}
`;

export const CSSTab = (props:any) => {
  const {theme, setTheme }:any = useContext(AppContext);

  const galleryOfThemes:any = {'dracula': dracula, 'monokai': monokai, 'irBlack': irBlack, 'nord': nord, 'a11yDark': a11yDark, 'a11yLight': a11yLight, 'anOldHope': anOldHope, 'androidstudio': androidstudio, 'arta': arta, 'atomOneDark': atomOneDark, 'github': github, 'monoBlue': monoBlue, 'obsidian': obsidian, 'ocean': ocean, 'rainbow': rainbow };

  const selectedTheme = galleryOfThemes[theme];

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
            text={defaultCSS}
            showLineNumbers={true}
            codeBlock
            language="css"
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
