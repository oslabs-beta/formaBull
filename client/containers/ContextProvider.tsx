import React from 'react';

interface AppContextInterface {
  componentsToDisplay: Symbol,
}
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

//define components that we want to drag from LeftSideBar
const compOptions = [ //DnDComponents
  // function NameComponent () {
  //   let firstName = '';
  // },
  // function AgeComponent () {
  //   let age = 20;
  // }, 
  // {
  //   id: 'input',
  //   view: 'Input',
  //   output: `import React from "react";
  //   import { useForm } from "react-hook-form";
  //   type Inputs = {
  //     example: string,
  //     exampleRequired: string,
  //   };
    
  //   export default function DefaultForm() {
  //     const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  //     const onSubmit = data => console.log(data);
  //     return (
  //       <div className = 'default-form'>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //       <label>Name </label>
  //         <input name="firstName" defaultValue="test" ref={register} />
  //       </form>
  //       <div>
  //       );
  //     }`
  // },
	
	{
		id: 'firstName',
data: `<label>First Name</label><input name="firstName" defaultValue="Jonny" ref={register} />`
	},
	{
		id: 'lastName',
data: `<label>Last Name</label>
\t<input name="lastName" defaultValue="Bravo" ref={register} />`
	},
  {
    id: 'age',
data: `<label>Age</label>
\t<input name="age" type="number" defaultValue="22" ref={register} />`
  },
  {
    id: 'password',
data: `<label>Password</label>
\t<input name="password" type="password" ref="{register} />`
  },
  {
    id: 'genderBinary',
data: `<label>Gender</label>
\t<input name="gender" type="radio" id="male" value="male" /><label for="male">Male</label><br />
\t<input name="gender" type="radio" id="female" value="female" /><label for="female">Female</label>`
  },
  {
    id: 'checkBox',
data: `<label>Check Box</label>
\t<input name="checkBox" type="checkbox" id="item1" name="item1" /><label for="item1">Item1</label><br />
\t<input name="checkBox" type="checkbox" id="item2" name="item2" /><label for="item2">Item2</label>`
  },
  
]

/// Initial state////
const AppContext = React.createContext({
  componentsToDisplay: [compOptions[0]],
  componentOptions: [...compOptions],
});
export default AppContext;