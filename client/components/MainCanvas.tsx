import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ItemTypes } from '../utils/items';
import { CardCreator } from './CardCreator';
import { AppContext } from '../../src/'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    flexGrow: 1,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 7px rgba(255, 105, 135, .3)',
    background: 'transparent',
    // boxShadow: 'none',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: '139%',
    width: 'auto',
    marginLeft: '50px',
    marginRight: '50px',
    // mx: "auto",
    padding: '0 30px',
    textAlign: 'center'
    },
  }));


export const MainCanvas = (props:any) => {
  const classes = useStyles();
  //turn canvas into droppable target by using useDrop hook
  //returns addedProps drop will be used as a ref
  // const { elementDropped, elementCycle } = useContext(CardContext);
  const { elementDropped }: any = useContext(AppContext);
  const { listOfDroppedElements }: any = useContext(AppContext);
  
  const[{ isOver, canDrop }, drop] = useDrop({
    //need to specify what type of item to accept
    accept: ItemTypes.CARD,

    //drop will only be called during drop event, always takes item and monitor,monitor will pass info about the specific item being dropped. for example item id
    drop: (item: any, monitor) => {
      elementDropped(item.id)
      // elementCycle(item.id)
    },  
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  })
    
    // console.log(listOfDroppedElements[0].id)

  const isActive = canDrop && isOver;

  return (
    <div 
    //attaches the drop ref to the MainCanvas
    ref={drop}
    className={classes.root}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
      <div>
        <Box>

        </Box>
      </div>
      {listOfDroppedElements
        // .filter((draggableElement: any, i: any) => draggableElement.status === 'dropped')
        .map((draggableElement: any, i: any) => (
          <CardCreator
          //took out draggableElement.id.toString()
            key={(Math.random() * 1000) << 0}
            id={draggableElement.id}
            category={draggableElement.category}
            title={draggableElement.title}
          />
        ))
      }
    {props.children}
    </div>
  )
}
