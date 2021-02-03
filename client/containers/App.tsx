import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import { NavBar } from '../components/NavBar';
import SavedForms from './SavedForms';
import Drafts from './Drafts';
import Contact from './Contact';
import Help from './Help';
import TakeTour from './TakeTour';
import '../../style.scss';


export default function App(props: any) {
  return (
    <div>
    <div>
      <NavBar />
    </div>
    <BrowserRouter>
    <div>
      <div className = 'landing'>
      <Switch>
        <Route exact path='/'>
      <Landing />
        </Route>
        <Route exact path='/savedforms'>
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
    </div>
    </BrowserRouter>
    </div>
  )
};
