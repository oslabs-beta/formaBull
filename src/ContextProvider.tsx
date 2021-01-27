import React, { useState } from 'react';
import { AppContext } from './index'


//Our provider component takes a value (we’re calling it context, but it can be named anything) and then make it accessible to any of the children components. This value is essentially our global store. 
export const ContextProvider = ({ children }: any) => {

  const elementDropped = (id: any) => {

    const draggableElement = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id === id);

    draggableElement[0].status = 'dropped'
    // draggableElement[0].id =  (Math.random() * 1000) << 0
    console.log(draggableElement[0].id)

    setListOfDroppedElements(listOfDroppedElements.filter((draggableElement, i) => draggableElement.id !== id).concat(draggableElement[0]));
    // console.log(listOfDroppedElements);
  }


  const elementCycle = (id: any) => {
    console.log("element cycle is working!!!")
    //changed === to !==
    const draggableElement = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id !== id);

    setListOfDraggableElements(listOfDraggableElements.filter((draggableElement, i) => draggableElement.id !== id).concat(draggableElement[0]))

    // setListOfDraggableElements(oldArr => 
    //     [...oldArr, draggableElement[0]]
    // )
    // console.log(listOfDraggableElements);
  }


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
        {
            id: 3,
            status: 'not-dropped',
            category: 'input-field',
            title: 'Email',
        }
    ]);


    const [listOfDroppedElements, setListOfDroppedElements] = useState([
        {
            id: 0,
            status: '',
            category: '',
            title: '',
        }
    ]);


    //Global Store
    const context: any = {
        listOfDraggableElements,
        setListOfDraggableElements,
        listOfDroppedElements,
        setListOfDroppedElements,
        elementDropped,
        elementCycle
    };

    return (
        // Global Store being passed as value
        <AppContext.Provider  value={context}>
            {children}
        </AppContext.Provider >
    )
};