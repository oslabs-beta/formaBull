import React, { useState } from 'react';
import { AppContext } from './index';
import { SelectTheme } from '../client/components/SelectTheme';
import { MuiThemeProvider } from '@material-ui/core';


//Our provider component takes a value (we’re calling it context, but it can be named anything) and then make it accessible to any of the children components. This value is essentially our global store. 
export const ContextProvider = ({ children }: any) => {
  console.log('context provider children:', children)
  const elementDropped = (id: any) => {
    //we can first check if this element has already been added to our form.
    //for current simplicity, I'm going to assume we want no duplicates
    //iterating through the array of dropped items to see if we already have an element like this.

    //check for existing elements to avoid duplicating
    // for (let dropEle of listOfDroppedElements) {
    //   if (dropEle.id === id) return;
    // }
    //deeply clone an object function
    const deepCopyFunction = (inObject: any): any => {
      if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
      };
      // Create an array or object to hold the values
      const outObject: object = Array.isArray(inObject) ? [] : {};
      for (const property in inObject) {
        let value = inObject[property];
        // Recursively (deep) copy for nested objects, including arrays
        outObject[property] = deepCopyFunction(value);
      };
      return outObject;
    };

    //iterate the draggable elements until we find the item we want, then set that onto list of dropped elements
    for (let i = 0; i < listOfDraggableElements.length; i++) {
      if (listOfDraggableElements[i].id === id) {
        //we have the item
        const elementToInsert = deepCopyFunction(listOfDraggableElements.slice(i, i+1));
        console.log('element to insert', elementToInsert)
        elementToInsert[0].status = "dropped";
        //setList is our way of pushing to the list 
        // setListOfDroppedElements((oldArr):any => [...oldArr, elementToInsert[0]]);
        //from the code block below, I copied this line.  I don't understand why it's needed after setting the list of dropped elements
        // setListOfDroppedElements(listOfDroppedElements.filter((draggableElement, i) => draggableElement.id !== id).concat(elementToInsert));
        
        // WHAT IF ... setListOfDroppedElements wants to be an array of iterable elements, but I want to use a LinkedList.  If I add a LinkedList as a single object in the array ListOfDroppedElements, React will want to iterate through (there's only one object) and execute functionality on that object as if it's going to be the new React component.
        //However, I'm hoping to have React parse through the LL after it knowingly iterated over only one item in the droppedElements array.
        //setListofDroppedElements(LinkedList)
        //iterate ListOfDropped,and for each iteration (there's only one) iterate through a given linkedlist.  It looks like O(N^2), but we'll only ever have one object in the array, so it's 1*whatever the length of the LL, which reduces to O(N)
        //let's get to work...  after Hack Hour
        
        //time to iterate/traverse the linkedlist, so only the first array item.
        // const mainCanvasLinkedList = listOfDroppedElements[0]; //object with nodes of values we want to check for id on
        listOfDroppedElements[0].add(elementToInsert[0]);
        //call our add function
        // mainCanvasLinkedList.add(elementToInsert[0])
        setListOfDroppedElements((listOfDroppedElements: any): any => {
          return [...listOfDroppedElements];
        });
        
      }
    };
  };  // <-- end of elementDropped function

//filter over listOfDraggableElements by id, returns an array with one element(object)
// const draggableElementArr = listOfDraggableElements.filter((draggableElement) => draggableElement.id === id);
// //clone the array returned from filter() method 
// console.log('draggable element array', draggableElementArr)
// let clonedArr = JSON.parse(JSON.stringify(draggableElementArr));
// clonedArr[0].status = "dropped"
// // console.log('clonedArr', clonedArr[0]);
// // Push method for React hooks, you can't use .push() method when using hooks.
// setListOfDroppedElements((oldArr):any => [...oldArr, clonedArr[0]])
//  console.log(listOfDraggableElements);
// setListOfDroppedElements(listOfDroppedElements.filter((draggableElement, i) => draggableElement.id !== id).concat(clonedArr[0]));

//const elementCycle = (id: any) => {
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
////return or place that clone in our listOfDroppedElements

    ///// LL// 
    // class/function to create linked list on main
  class ComponentLinkedList {
    head: any;
    tail: any;
    add: any;
    remove: any;
    constructor() {
      this.head = null;
      this.tail = null;
    };
  };
  // const ComponentLinkedList = (): any => {
  //   this.head = null;
  //   this.tail = null;
  // };
  // class/function to create a node on linked list
  class Node {
    val: object;
    next: any;
    prev: any;
    constructor(val: object) {
      this.val = val;
      this.next = null;
      this.prev = null;
    };
  };
  // const Node = (val: object) => {
  // this.val = val;
  // this.next = null;
  // this.prev = null;
  // }
  // function to add to the end of linked list
  ComponentLinkedList.prototype.add = function (val: object) {
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
  ComponentLinkedList.prototype.remove = function (val: object) {
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

  const stateAsLinkedList = new ComponentLinkedList;

  const [listOfDraggableElements, setListOfDraggableElements] = useState([
  {
    id: 1,
    status: 'not-dropped',
    title: 'First Name',
    data: `<label>Firstname</label>
    <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
    {errors.firstName && "First name is required"}`
  },
  {
    id: 2,
    status: 'not-dropped',
    title: 'Last Name',
    data: `<label>Lastname</label>
    <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
    {errors.lastName && "Last name is required"}`
  },
  {
    id: 3,
    status: 'not-dropped',
    title: 'Password',
    data: `<label>Password</label>
    <input name="password" type="password" ref="{register({required: true, pattern ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,16}$})} />`
  },
  {
    id: 4,
    status: 'not-dropped',
    title: 'Radio',
    data: `<label>Radio</label>
    <input name="gender" type="radio" id="yes" value="yes" /><label for="yes">yes</label><br />
    <input name="gender" type="radio" id="no" value="no" /><label for="no">no</label>`
  },
  {
    id: 5,
    status: 'not-dropped',
    title: 'Check Box',
    data: `<label>Checkbox</label>
    <input name="check-box" type="checkbox" id="item1" name="item1" /><label for="item1">Item1</label><br />
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
  },
  {
    id: 9,
    status: 'not-dropped',
    title: 'Email',
    data: `<input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />`
  },
  {
    id: 10,
    status: 'not-dropped',
    title: 'Text Area',
    data: `<label>Textarea</label>
    <textarea name="text-area" ref={register({required: true, min: 1, maxLength: 100})} />`
  },
  {
    id: 11,
    status: 'not-dropped',
    title: 'Range',
    data: `<label>Range</label>
    <input type="range" placeholder="range" name="range" ref={register} />`
  },
  {
    id: 12,
    status: 'not-dropped',
    title: 'Time',
    data: `<label>Time</label>
    <input type="time" placeholder="time" name="time" ref={register} />`
  },
  {
    id: 13,
    status: 'not-dropped',
    title: 'Search',
    data: `<label>Search</label>
    <input type="search" placeholder="search" name="search" ref={register} />`
  },
  {
    id: 14,
    status: 'not-dropped',
    title: 'Tel',
    data: `<label>Tel</label>
    <input type="tel" placeholder="Tel" name="Tel" ref={register} />`
  },
  {
    id: 15,
    status: 'not-dropped',
    title: 'Datetime',
    data: `<label>Datetime</label>
    <input type="datetime" placeholder="datetime" name="datetime" ref={register} />`
  },
  {
    id: 16,
    status: 'not-dropped',
    title: 'Datetime-local',
    data: `<label>Datetime-local</label>
    <input type="datetime-local" placeholder="datetime-local" name="datetime-local" ref={register} />`
  },
  {
    id: 17,
    status: 'not-dropped',
    title: 'Week',
    data: `<label>Week</label>
    <input type="week" placeholder="week" name="week" ref={register} />`
  },
  {
    id: 18,
    status: 'not-dropped',
    title: 'Month',
    data: `<label>Month</label>
    <input type="month" placeholder="month" name="month" ref={register} />`
  },
]);

//if we set our state for the list of dropped elements to be not an empty array, but an array with an empty LL, we can edit the LL later
  const [listOfDroppedElements, setListOfDroppedElements] = useState([stateAsLinkedList]);
  // set initial state for SelectTheme component
  const [theme, setTheme] = useState('dracula'); 


  //Global Store
  const context: any = {
    listOfDraggableElements,
    setListOfDraggableElements,
    listOfDroppedElements,
    setListOfDroppedElements,
    elementDropped,
    theme,
    setTheme
  };

console.log('LIST OF DRAGGABLES', listOfDraggableElements);

  return (
    // Global Store being passed as value
    <AppContext.Provider value={context} >
      {children}
    </AppContext.Provider >
  )
};
