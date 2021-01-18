import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideBar from '../components/LeftSideBar';
import MainCanvas from '../components/MainCanvas';
import RightSideBar from '../components/RightSideBar';
import SavedForms from './SavedForms';
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
            <MainCanvas id="canvas" className="canvas"/>
            <RightSideBar />
          </div>
        </Route>
        <Route path='/savedforms'>
          <SavedForms />
        </Route>
      </Switch>

    </div>
    </BrowserRouter>
  )
}