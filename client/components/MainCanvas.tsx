import React from 'react';
import DefaultForm from './DefaultForm';

export default function MainCanvas (props:any) {
    //drop event
    const drop = el => {
      //cancels the event if it is cancable, meaning that the default action that belongs to the event will not occur.
      el.preventDefault();
      //get form attribute(item to be dropped), pass in a "key" to getData, make sure to use the same when setting the data
      const formButton_id = el.dataTransfer.getData('formButton_id')
      const button = document.getElementById(formButton_id);

      //hide the button when first tracking to give appearance of picking up the button
      button.style.display = 'block';

      //target is the canvas, allows button to be appended to canvas
      el.target.appendChild(button);
    }

    //drag over event
    const dragOver = el => {
      //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      el.preventDefault()

    }


    return (
        <div 
          id={props.id}
          className='main-canvas'
          //called when the button is dropped onto the canvas
          onDrop={drop}
          //called when one of the buttons is dragged over canvas
          onDragOver={dragOver}
        >
          <DefaultForm />
          {/* allows anything that we pass into the Canvas component to be a child of the canvas component */}
          {/* //Ex: <Canvas>...children...</Canvas> */}
          {props.children}
        </div>
    )
}

