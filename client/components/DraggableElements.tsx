import React, { createContext, useState } from 'react';
import { Box } from '@material-ui/core';
import { CardCreator, inputProps } from './CardCreator';
import { MainCanvas } from './MainCanvas';

export const CardContext = createContext({
    elementDropped: null,
    elementCycle: null
})


export const DraggableElements = () => {
  const [listOfDraggableElements, setListOfDraggableElements] = useState([
    {
      id: 1,
      status: 'not-dropped',
      category: 'input-field',
      title: ' First Name',
    },
    {
      id: 2,
      status: 'not-dropped',
      category: 'input-field',
      title: 'Last Name', 
    },
    { id: 3,
      status: 'not-dropped',
      category: 'input-field',
      title: 'Email',
    }
  ]);


  const [listOfDroppedElements, setListOfDroppedElements] = useState([
    { id: 0,
      status: '',
      category: '',
      title: '',
    }
  ]);


  const elementDropped = (id:any) => {
    const draggableElement = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id === id);
    // console.log(draggableElement[0])
    draggableElement[0].status = 'dropped'
    setListOfDroppedElements(listOfDroppedElements.filter((draggableElement, i) => draggableElement.id === id).concat(draggableElement[0]));
    console.log(listOfDroppedElements);
  }
  
  const elementCycle = (id:any) => {
    console.log("element cycle is working!!!")
    const draggableElement = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id === id);
    setListOfDraggableElements(listOfDraggableElements.filter((draggableElement, i) => draggableElement.id !== id).concat(draggableElement[0]))
    console.log(listOfDraggableElements);
  }


  // console.log(inputProps)


  return (
       <CardContext.Provider value={{elementDropped, elementCycle}}>
    <div>
     <Box bgcolor='yellow' height='auto' width='100px'>
       {listOfDraggableElements
        .filter((draggableElement, i) => draggableElement.status === 'not-dropped')
        .map((draggableElement, i) => (
          <CardCreator
          key={draggableElement.id.toString()}
          id={draggableElement.id}
          category={draggableElement.category}
          title={draggableElement.title}
          />
        ))
       }
     </Box>
     <MainCanvas>
        {listOfDroppedElements
        .filter((draggableElement, i) => draggableElement.status === 'dropped')
        .map((draggableElement, i) => (
          <CardCreator
          key={draggableElement.id.toString()}
          id={draggableElement.id}
          category={draggableElement.category}
          title={inputProps.label += draggableElement.title}
          />
        ))
        }
       </MainCanvas>
       </div>
       </CardContext.Provider>
  )
}