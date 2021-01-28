import React from 'react';
import { useDrag } from 'react-dnd';
import { TextField, Card } from '@material-ui/core'
import { ItemTypes } from '../utils/items';


export const inputProps = {
  label : ''
}

export const CardCreator = (props:any) => {
//useDrag returns an array of two things: an object that contains extra props(received from collecting functions), and a ref that binds and tells react-dnd that the result of this hook will be attached to the specific component
  const[{ isDragging }, drag] = useDrag({
  //takes two things: item and that item's type
  //tells useDrag what item will be passed on
  item: {
    //Must specify type of item that will be dragged, this means only this //specific type of item will be allowed to be dragged into the MainCanvas
    type: ItemTypes.CARD,
  //when we have multiple draggable cards/components
  //this will pass the id of the card while it is being dragged
    id: props.id,
  }, 

  end: (item, monitor) => {
    const dropResult = monitor.getDropResult();
    if (item && dropResult) {
      // alert(`You dropped something into canvas!`);
    }
  },
  //collect function - this is basically a way to transform state from the drag-and-drop system into usable props for the items/components
  collect: monitor => ({
    //monitor will return isDragging prop if monitor.isDragging is true and it is only true when the specific item is being dragged
    isDragging: !!monitor.isDragging(),
  })
});
  return (
    <div ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
    <TextField 
    id="standard-basic" 
    label='Name'
    >
    </TextField>
    </div>
    // <Card  
    // style={{opacity: isDragging ? 0.5 : 1, width: '18rem', border: '1px solid black'}}>
    // <Card.Body>
    //     <Card.Title>First Name</Card.Title>
    //     {/* <Card.Text>
    //     All I want is Drag and Drop functionality
    //     </Card.Text> */}
    //     {/* <Button variant="primary">Do Something</Button> */}
    // </Card.Body> 
    // </Card>
    // {/* <> */}
    // {/* <div ref={drag} style={{ fontSize: '14px', width: 'auto', opacity: isDragging ? 0.5 : 1}} > */}
    //     {/* ♘ */}
    //     {/* <DefaultForm /> */}
    // </div>
  )
}