import React from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core'
import { ItemTypes } from '../utils/items';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#202020',
    width: '300px',
    margin: 'auto',
    height: '8px',
    marginBottom: '15px',
    marginTop: '8px',
    borderStyle: 'solid',
    borderWidth: '1.5px',
    borderColor: '#F94EB4',
    borderRadius: '3px',
    display: 'flex',
  },
  dragIndicator: {
    padding: '0px',
    fontSize: '35px',
    // marginRight: '0.2em',
    // marginLeft: '10px',
    // margin: 'auto',
    position: 'relative', 
    bottom: '13px',
    display: 'inline-block'
  },
  title: {
    padding: '0px',
    fontSize: '18px',
    // marginRight: '9.9em',
    position: 'relative', 
    bottom: '10px',
    marginLeft: 'auto',
    // margin: 'auto',
    // textAlign: 'center',
    color: 'white',
    display: 'inline-block'
  }
}));


export const CardCreator = (props:any) => {
  const classes = useStyles();

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
      <Box className={classes.root} >
        <DragIndicatorIcon style={{ color: 'white' }} className={classes.dragIndicator}/>
        <Typography className={classes.title}>{props.title}</Typography>
      </ Box>
    </div>
  )
}