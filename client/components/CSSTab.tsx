import React, { useContext } from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { CopyBlock, dracula, nord, monokai, atomOneDark } from 'react-code-blocks';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Resizable } from 're-resizable';
import { AppContext } from '../../src/'


const defaultCSS = 
`form {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px
}

input, select {
  margin: 20px;
  width: 50%
}`

export const CSSTab = (props:any) => {
  return (
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
            theme={atomOneDark}
            customStyle={{
              overflowY: 'scroll',
              minWidth: '360',
              maxHeight: '700'
            }}
          />
          </div>
  </Resizable>
  );
}