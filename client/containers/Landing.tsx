import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideBar from '../components/LeftSideBar';
import MainCanvas from '../components/MainCanvas';
import RightSideBar from '../components/RightSideBar';

export default function Landing (props: any) {

  return (
    <div className = 'Landing'>
      {/* Use < /> for components invocation and {} for function invocation */}
      <NavBar />
      <div className ='sideBarsAndCanvas'>
      <LeftSideBar />
      <MainCanvas id="canvas" className="canvas"/>
      <RightSideBar />
      </div>

    </div>
  )
}