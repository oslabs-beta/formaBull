import React from 'react';
import NavBar from '../components/NavBar';
import MainCanvas from '../components/MainCanvas';
export default function Landing (props: any) {
  return (
    <div>
      {/* Use < /> for components invocation and {} for function invocation */}
      <NavBar />
      <MainCanvas id="canvas" className="canvas" />
    </div>
  )
}