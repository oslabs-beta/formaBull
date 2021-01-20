import React from 'react';
import DefaultForm from './DefaultForm';

export default function MainCanvas (props:any) {
 

      return (
        <div 
          //attaches the drop ref to the MainCanvas
          //   ref={drop}
          id={props.id}
          className={'main-canvas'}
        >
          <DefaultForm />
          {/* allows anything that we pass into the Canvas component to be a child of the canvas component */}
          {/* //Ex: <Canvas>...children...</Canvas> */}
          {props.children}
        </div>
    )
    }
