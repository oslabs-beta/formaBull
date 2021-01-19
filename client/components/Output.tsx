import React from 'react';
import DefaultForm from './DefaultForm';
import { CopyBlock, dracula, nord, monokai } from "react-code-blocks";
import ScrollToBottom from 'react-scroll-to-bottom';

// const example = 

export default function Output() {
  return (
    <ScrollToBottom>
    <div className = 'output'>
      <CopyBlock 
      text={`const fizzbuzzbazz = num => {
        const results = [];
        
        for (let i = 1; i <= num; i++) {
          let str = '';
          if (i % 3 === 0)
            str += 'fizz';
          if (i % 5 === 0)
            str += 'buzz';
          if (i % 7 === 0)
            str += 'bazz';
          
          results.push(str || i);
        }
        
        return results;
      };`}

        // text={DefaultForm}
        showLineNumbers
        codeBlock
        language="tsx"
        theme={dracula}
      />
    </div>
    </ScrollToBottom>
  );
}