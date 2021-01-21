import React from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import DefaultForm from './DefaultForm';


export default function MainCanvas () {
  //turn canvas into droppable target by using useDrop hook
  //returns addedProps drop will be used as a ref
  
    const[{ isOver, canDrop }, drop] = useDrop({
      //need to specify what type of item to accept
      accept: ItemTypes.CARD,
      //drop will only be called during drop event, always takes item and monitor, monitor will pass info about the specific item being dropped. for example item id
      // drop: () => { //item, monitor: DropTargetMonitor
      
      //   //returns false for direct drop target
      //   // const didDrop = monitor.didDrop();
      //   console.log(item)
      //   // if (didDrop) {
        //   //   return;
        //   // }
        // },
        // canDrop(props){
          //   return true;
          // }, 
          
          drop: (item, monitor: DropTargetMonitor) => (console.log(item)),      // name: 'Canvas'
          // console.log(item)
  
          
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  })
  
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  }
  else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  
// console.log(children)

  return (
    <div 
    //attaches the drop ref to the MainCanvas
    ref={drop}
    className={'main-canvas'}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
      <DefaultForm />
    {/* {children} */}
    </div>
  )
 }

    










{/* {isOver && (
          <div
          style={{
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />)} */}
       {/* <DefaultForm /> */}
      {/* allows anything that we pass into the Canvas component to be a child of the canvas component */}
      {/* //Ex: <Canvas>...children...</Canvas> */}