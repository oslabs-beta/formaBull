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
            title: 'FirstName',
            data: `<label>First name</label>
            <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
            {errors.firstName && "First name is required"}`
        },
        {
            id: 2,
            status: 'not-dropped',
            title: 'LastName',
            data: `<label>Last name</label>
            <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
            {errors.lastName && "Last name is required"}`
        },
        {
            id: 3,
            status: 'not-dropped',
            title: 'password',
            data: `<label>Password</label>
            <input name="password" type="password" ref="{register} />`
        },
        {
            id: 4,
            status: 'not-dropped',
            title: 'U smoke?',
            data: `<label>U smoke?</label>
            <input name="gender" type="radio" id="yes" value="yes" /><label for="yes">yes</label><br />
            <input name="gender" type="radio" id="no" value="no" /><label for="no">no</label>`
        },
        {
            id: 5,
            status: 'not-dropped',
            title: 'checkBox',
            data: `<label>Check Box</label>
            <input name="checkBox" type="checkbox" id="item1" name="item1" /><label for="item1">Item1</label><br />
            <input name="checkBox" type="checkbox" id="item2" name="item2" /><label for="item2">Item2</label>`
        },
        {
            id: 6,
            status: 'not-dropped',
            title: 'Submit',
            data: `<input type="submit" />`
        },
        {
            id: 7,
            status: 'not-dropped',
            title: 'Gender',
            data: `<label>Gender</label>
            <select name="gender" ref={register}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
            </select>`
      },
      {
            id: 8,
            status: 'not-dropped',
            title: 'Age',
            data: `<label>Age</label>
            <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
            {errors.age && "age must be between 18 and 99"}`
      } 
    ]);


    const [listOfDroppedElements, setListOfDroppedElements] = useState([]);

    ///// LL// 
       // class/function to create linked list on main
const ComponentLinkedList = () => {
  this.head = null;
  this.tail = null;
};
    // class/function to create a node on linked list
const Node = (val) => {
  this.val = val;
  this.next = null;
  this.prev = null;
}
    // function to add to the end of linked list
ComponentLinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  const oldTail = this.tail;
  newNode.prev = oldTail;
  this.tail.next = newNode;
  this.tail = newNode;
};
    // function to remove a node passed in
ComponentLinkedList.prototype.remove = function (val) {
   //traverse the list, starting with head bc why not
  //keep track of the prev,the current and the next
  //if we find a matching value,
    //reassign the prev.next to be next,
    //and reassign next.prev to be prev
  //exit
  let curr = this.head;
  let prev = curr.prev;
  let next = curr.next;
  while (curr.val !== val) {
    next = next.next;
    curr = curr.next;
    prev = prev.next;
  }
  //curr equals val or curr is now null
  //if curr is null, we never found our value,so just return
  if (!curr) return;
  //curr now equals val
  //if prev and next are null, we remove and return an empty list, so make head and tail null
  if (!prev && !next) {
    this.head = null;
    this.tail = null;
    return;
  }
  //if just prev is null, we're removing the head
  if (!prev) {
    next.prev = null;
    this.head = curr.next;
    return;
  }
  //no next means replace tail
  if (!next) {
    prev.next = null
    this.tail = prev;
    return;
  }
  //we now are at the case where curr is the node to remove
  prev.next = next;
  next.prev = prev;
}

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
