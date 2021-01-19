
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar (props:any) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="navbar">
      <div className="brand">formaBull</div> 
      <div className="navlink">
        <NavLink className='navlink' to='/'>Create Form</NavLink>
      </div>
      <div className="navlink">
        <NavLink className='navlink' to='/savedforms'>Saved Forms</NavLink>
      </div>
      <div className="navlink"><a>Drafts</a></div>
      <div className="navlink"><a>Take a tour</a></div>
      <div className="navlink"><a>Settings</a></div>
      <div className="navlink"><a>Help</a></div>
    </div>
  )
}

// import ToolbarComponent from "./components/Toolbar/Toolbar";
// import DrawerComponent from "./components/Drawer/Drawer";

// export default function NavBar (props:any) {
//   state = {
//     left: false
//   };

//   toggleDrawer = () => {
//     // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//     //   return;
//     // }

//     this.setState({ left: false });
//   };

//   openDrawer = () => {
//     this.setState({
//       left: true
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <ToolbarComponent openDrawerHandler={this.openDrawer} />
//         <DrawerComponent
//           left={this.state.left}
//           toggleDrawerHandler={this.toggleDrawer}
//         />
//       </div>
//     );
//   }
// }







// Navbar should have links for the landing page to load.  I'm thinking the CreateAForm page would be the main landing page.  Saved Forms loads a different looking landing page, same with Help, TakeATour/Tutorial, etc.  The main app file will determine if a person is logged in. If so, they're directed to the landing page.  If not, they're directed to the Login Page.  From Login page, a person can click "Sign Up", which would take them to a separate, albeit similar looking, page. Sign up routes back to Log in, or automatically to Landing page.
// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <div className="brand">formaBull</div>
//       <div className="navlink">Create Form</div>
//       <div className="navlink">Saved Forms</div>
//       <div className="navlink">Take a Tour</div>
//       <div className="navlink">Settings</div>
//       <div className="navlink">Help</div>
//     </div>
//   )
// }


// export function NavBar (props:any) {};
// export { NavBar as default };
// default keyword was throwing an error, the reasoning I found was this
// You can only augment "exported" declarations. Class Foo is exported as default, and not as Foo. so the name Foo does not exist outside the module.
// It just happens that default is a reserved word, and can not used as an interface declaration name.
// The TS compiler needs to allow export { Foo as default} in module augmentation.