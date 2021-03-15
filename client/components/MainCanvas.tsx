import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ItemTypes } from '../utils/items';
import { CardCreator } from './CardCreator';
import { AppContext } from '../../src/';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    flexGrow: 1,
    boxShadow: '0 3px 5px 7px rgba(255, 105, 135, .3)',
    background: '#fff',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: '89%',
    width: 'auto',
    marginLeft: '50px',
    marginRight: '50px',
    padding: '0 30px',
    textAlign: 'center',
    overflowY: 'scroll',
    minWidth: 400
    },
  })
);

export const MainCanvas = (props:any) => {
  const classes = useStyles();
  
  const { elementDropped }: any = useContext(AppContext);
  
  const { listOfDroppedElements }: any = useContext(AppContext);
  
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any, monitor) => {
      
      elementDropped(item.id)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  });

  const isActive = canDrop && isOver;
  
  const droppedLinkedList = () => {
    const createDroppedItem = (draggableElement: any, i: any) => (
      <div key={i * 100} style={{ width: '500px', margin: 'auto'}} >
        <CardCreator 
        id={draggableElement.id}
        category={draggableElement.category}
        title={draggableElement.title}
        />
      </div>
    );
    let cur = listOfDroppedElements[0].head;
    const arrayOfReactLL = [];
    if (!cur) return 'Drop Here!';
    while (cur) {
      arrayOfReactLL.push(createDroppedItem(cur.val, cur.val.id));
      cur = cur.next;
    };
    return arrayOfReactLL;
  };

  return (
    <div 
    ref={drop}
    className={classes.root}
    >
      {/* TODO this console log pops up a lot, does this mean all of maincanvas is being re-rendered every time I see this log?  */}
      {console.log('list of dropped: ', listOfDroppedElements[0].head)}
      {droppedLinkedList()}
    </div>
  )
};
