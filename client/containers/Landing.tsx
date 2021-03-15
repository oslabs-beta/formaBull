import React from 'react';
import { LeftSideBar } from '../components/LeftSideBar';
import { RightSideBar } from '../components/RightSideBar';
import { MainCanvas } from '../components/MainCanvas';


export default function Landing (props: any) {
  return (
    <div>
      <div className ='side-bars-and-canvas'>
        <LeftSideBar />
        <MainCanvas />
        <RightSideBar />
      </div>
    </div>
  )
};