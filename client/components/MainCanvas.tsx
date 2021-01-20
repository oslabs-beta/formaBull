import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import DefaultForm from './DefaultForm';

export default function MainCanvas (props:any) {
  //turn canvas into droppable target by using useDrop hook
  //returns addedProps drop will be used as a ref
  const[{ isOver }, drop] = useDrop({
    //need to specify what type of item to accept
    accept: ItemTypes.CARD,
    //drop will only be called during drop event, always takes item and monitor, monitor will pass info about the specific item being dropped. for example item id
    drop: (item, monitor) => console.log(item),
    collect: monitor => ({
        isOver: !!monitor.isOver()
    })
  });

  return (
    <div 
      //attaches the drop ref to the MainCanvas
      ref={drop}
      id={props.id}
      className={'main-canvas'}
    >
      {isOver && (
          <div
           style={{
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
       />)}
       <DefaultForm />
      {/* allows anything that we pass into the Canvas component to be a child of the canvas component */}
      {/* //Ex: <Canvas>...children...</Canvas> */}
      {props.children}
    </div>
  )
}
    
    
