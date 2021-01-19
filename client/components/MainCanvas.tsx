import React from 'react';
import { useDrop } from 'react-dnd';

export default function MainCanvas (props:any) {
    //drop event
    const drop = (el:any) => {
      //cancels the event if it is cancable, meaning that the default action that belongs to the event will not occur.
      el.preventDefault();
      //get form attribute(item to be dropped), pass in a "key" to getData, make sure to use the same when setting the data
      const formButton_id = el.dataTransfer.getData('formButton_id')
      const button = document.getElementById(formButton_id);

    //turn canvas into droppable target by using useDrop hook
      //returns addedProps drop will be used as a ref
    const[{addedProps}, drop] = useDrop({
      //need to specify what type of item to accept
      accept: 
    });
    // //drop event
    // const drop = el => {
    //   //cancels the event if it is cancable, meaning that the default action that belongs to the event will not occur.
    //   el.preventDefault();
    //   //get form attribute(item to be dropped), pass in a "key" to getData, make sure to use the same when setting the data
    //   const formButton_id = el.dataTransfer.getData('formButton_id')
    //   const button = document.getElementById(formButton_id);

    //   //hide the button when first tracking to give appearance of picking up the button
    //   button.style.display = 'block';

    //drag over event
    const dragOver = (el:any) => {
      //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      el.preventDefault()

    // //drag over event
    // const dragOver = el => {
    //   //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    //   el.preventDefault()

    // }


    return (
        <div
          //attaches the drop ref to the MainCanvas
        //   ref={drop}
          id={props.id}
          className={props.className}
        //   //called when the button is dropped onto the canvas
        //   onDrop={drop}
        //   //called when one of the buttons is dragged over canvas
        //   onDragOver={dragOver}
        //   className='main-canvas'
        //   //called when the button is dropped onto the canvas
        //   onDrop={drop}
        //   //called when one of the buttons is dragged over canvas
        //   onDragOver={dragOver}
        >
          MainCanvas
          {/* allows anything that we pass into the Canvas component to be a child of the canvas component */}
          {/* //Ex: <Canvas>...children...</Canvas> */}
          {props.children}
        </div>
    )
}

