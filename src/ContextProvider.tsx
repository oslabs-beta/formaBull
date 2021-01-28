import React, { useState } from 'react';
import { AppContext } from './index';


//Our provider component takes a value (we’re calling it context, but it can be named anything) and then make it accessible to any of the children components. This value is essentially our global store. 
export const ContextProvider = ({ children }: any) => {

  const elementDropped = (id: any) => {
    //filter over listOfDraggableElements by id, returns an array with one element(object)
    const draggableElementArr = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id === id);
    //clone the array 
    var clonedArr = JSON.parse(JSON.stringify(draggableElementArr))

    clonedArr[0].status = "dropped"
    console.log('clonedArr', clonedArr[0]);

    // Push method for React hooks, you can't use .push() method when using hooks.
    setListOfDroppedElements((oldArr):any => [...oldArr, clonedArr[0]])

    console.log(listOfDraggableElements);
  
    // setListOfDroppedElements(listOfDroppedElements.filter((draggableElement, i) => draggableElement.id !== id).concat(clonedArr[0]));
};


//   const elementCycle = (id: any) => {
//     console.log("element cycle is working!!!")
//     //changed === to !==
//     const draggableElement = listOfDraggableElements.filter((draggableElement, i) => draggableElement.id !== id);

//     console.log(`draggableElement:`, draggableElement);

//     setListOfDraggableElements(listOfDraggableElements.filter((draggableElement, i) => draggableElement.id !== id).concat(draggableElement[0]))

//     console.log("LIST OF DRAGGABLE ELEMENTS", listOfDraggableElements)

//     //This is the push method for setting state that uses an array
//     // setListOfDraggableElements(oldArr => 
//     //     [...oldArr, draggableElement[0]]
//     // )
//     // console.log(listOfDraggableElements);
//   }
    // setListOfDraggableElements(oldArr => 
    //     [...oldArr, draggableElement[0]]
    // )
    // console.log(listOfDraggableElements);
    // }

  //create a function that will make a clone of object(from listofDraggableElements) being dragged
    //u
  //return or pace that clone in our listOfDroppedElements

  const [listOfDraggableElements, setListOfDraggableElements] = useState([
    {
      id: 1,
      status: 'not-dropped',
      title: 'lastName',
      data: `<label>Last Name</label>
      \t<input name="lastName" defaultValue="Bravo" ref={register} />`
    },
    {
      id: 2,
      status: 'not-dropped',
    title: 'age',
data: `<label>Age</label>
\t<input name="age" type="number" defaultValue="22" ref={register} />`
    },
    {
      id: 3,
      status: 'not-dropped',
      title: 'password',
data: `<label>Password</label>
\t<input name="password" type="password" ref="{register} />`
    },
    {
      id: 4,
      status: 'not-dropped',
      title: 'genderBinary',
data: `<label>Gender</label>
\t<input name="gender" type="radio" id="male" value="male" /><label for="male">Male</label><br />
\t<input name="gender" type="radio" id="female" value="female" /><label for="female">Female</label>`
    },
    {
    id: 5,
    status: 'not-dropped',
    title: 'checkBox',
data: `<label>Check Box</label>
\t<input name="checkBox" type="checkbox" id="item1" name="item1" /><label for="item1">Item1</label><br />
\t<input name="checkBox" type="checkbox" id="item2" name="item2" /><label for="item2">Item2</label>`
    },
  ]);


  const [listOfDroppedElements, setListOfDroppedElements] = useState([]);

  ///// here// 
  //Global Store
  const context: any = {
    listOfDraggableElements,
    setListOfDraggableElements,
    listOfDroppedElements,
    setListOfDroppedElements,
    elementDropped,
    // elementCycle
  };

  return (
    // Global Store being passed as value
    <AppContext.Provider  value={context}>
      {children}
    </AppContext.Provider >
  )
};
