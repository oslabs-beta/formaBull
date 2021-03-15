import React, { useState } from 'react';
import { AppContext } from './index';

export const ContextProvider = ({ children }: React) => {
  console.log('context provider children:', children)
  const elementDropped = (id: any) => {
    //check for existing elements to avoid duplicating
      let cur = listOfDroppedElements[0].head;
      while (cur) {
        if (cur.val.id === id) return;
        cur = cur.next;
      };
    //function to deeply clone an object
    const deepCopyFunction = (inObject: any): any => {
      if (typeof inObject !== "object" || inObject === null) {
        return inObject;
      };
      const outObject: object = Array.isArray(inObject) ? [] : {};
      for (const property in inObject) {
        let value = inObject[property];
        outObject[property] = deepCopyFunction(value);
      };
      return outObject;
    };

    //iterate the draggable elements until we find the item we want, then set that onto list of dropped elements
    for (let i = 0; i < listOfDraggableElements.length; i++) {
      if (listOfDraggableElements[i].id === id) {
        const elementToInsert = deepCopyFunction(listOfDraggableElements.slice(i, i+1));
        console.log('element to insert', elementToInsert)
        elementToInsert[0].status = "dropped";
        listOfDroppedElements[0].add(elementToInsert[0]);
        setListOfDroppedElements((listOfDroppedElements: any): any => {
          return [...listOfDroppedElements];
        });
      }
    };
  };

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
  let curr = this.head;
  let prev = curr.prev;
  let next = curr.next;
  while (curr.val !== val) {
    next = next.next;
    curr = curr.next;
    prev = prev.next;
  }
  if (!curr) return;
  if (!prev && !next) {
    this.head = null;
    this.tail = null;
    return;
  }
  if (!prev) {
    next.prev = null;
    this.head = curr.next;
    return;
  }
  if (!next) {
    prev.next = null
    this.tail = prev;
    return;
  }
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
    <input type="password" placeholder="password" name="password" ref={register({required: true, max: 16, min: 8, maxLength: 16, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$/i})} />
      {errors.password && "Password should contain at least 1 number, lowercase letter, uppercase letter, special character between 8 to 16 characters long"}`
  },
  {
    id: 4,
    status: 'not-dropped',
    title: 'Radio',
    data: `<label>Radio</label>
    <input name="radio" type="radio" id="yes" value="yes" /><label for="yes">yes</label><br />
    <input name="radio" type="radio" id="no" value="no" /><label for="no">no</label>`
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

  const [listOfDroppedElements, setListOfDroppedElements] = useState([stateAsLinkedList]);

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
