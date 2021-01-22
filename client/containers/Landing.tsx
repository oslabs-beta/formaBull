import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideBar from '../components/LeftSideBar';
import MainCanvas from '../components/MainCanvas';
import RightSideBar from '../components/RightSideBar';
import SavedForms from './SavedForms';
import Drafts from './Drafts'
import Contact from './Contact'
import Help from './Help'
import TakeTour from './TakeTour'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

export default function Landing (props: any) {

  return (
    <BrowserRouter>
    <div className = 'landing'>
      <NavBar />
      
      {/* Use < /> for components invocation and {} for function invocation */}
      <Switch>
        <Route exact path='/'>
          <div className ='side-bars-and-canvas'>
            <LeftSideBar />
            <MainCanvas id="canvas" className="canvas" >
              
              <MainCanvas/>
            <RightSideBar />
          </div>
          <div className='cards'>
   
      </div>
        </Route>
        <Route path='/savedforms'>
          <SavedForms />
        </Route>
        <Route path='/drafts'>
          <Drafts />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/take-a-tour'>
          <TakeTour />
        </Route>
      </Switch>

    </div>
    </BrowserRouter>
  )
}