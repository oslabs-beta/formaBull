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
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 7px rgba(255, 105, 135, .3)',
    background: '#fff',
    // boxShadow: 'none',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: '89%',
    width: 'auto',
    marginLeft: '50px',
    marginRight: '50px',
    // mx: "auto",
    padding: '0 30px',
    textAlign: 'center',
    overflowY: 'scroll',
    minWidth: 400
    },
  })
);

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
  //define a function we can use in the return statement
  //function needs to take in a linked list, and iterate/traverse list, while rendering the value of each node with the anonymous function
  const droppedLinkedList = (linkedList) => {
    const createDroppedItem = (draggableElement: any, i: any) => (
      <div key={'dropped'+ Math.floor(Math.random()*100000)} style={{ width: '500px', margin: 'auto'}} >
        <CardCreator 
        id={draggableElement.id}
        category={draggableElement.category}
        title={draggableElement.title}
        />
      </div>
    );
      //start a current Node with head of list
    let cur = listOfDroppedElements[0].head;
      //push created items to an array bc I think React needs it that way for rendering
    const arrayOfReactLL = [];
      //if head is null, we haven't added anything so display a message
    if (!cur) return 'Drop Here!';
    while (cur) {
      //run the createDroppedItem function on each node, and update cur to be the next node
      arrayOfReactLL.push(createDroppedItem(cur.val, cur.val.id));
      cur = cur.next;
    }
    return arrayOfReactLL;
  }

  return (
    <div 
    //attaches the drop ref to the MainCanvas
    ref={drop}
    className={classes.root}
    >
      {/* {isActive ? 'Let it drop!' : 'Drop things here!'} */}
      {console.log('list of dropped: ', listOfDroppedElements[0].head)}
      {/* this is where we need to iterate over the LinkedList in the listofDroppedElements array */}
      {/* so, instead of mapping the anonymous function below to each value of the array, apply this function to each node in the LL of which we'll iterate */}
      {droppedLinkedList(listOfDroppedElements[0])}
      {/* {listOfDroppedElements
        .map((draggableElement: any, i: any) => (
          <div key={'dropped'+Math.floor(Math.random()*100000)} style={{ width: '500px', margin: 'auto'}} >
            <CardCreator 
            id={draggableElement.id}
            category={draggableElement.category}
            title={draggableElement.title}     
            />
          </div>
        ))
      } */}
    </div>
  )
};
