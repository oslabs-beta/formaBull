import React, { useContext } from 'react';
import { AppContext } from '../../src/'
import { CardCreator } from '../components/CardCreator'

export const AddTab = (props:any) => {

  const { listOfDraggableElements }: any = useContext(AppContext);

  return (
    <div style={{overflowY: 'scroll', height: '765', background: '#000000'}}>
      {listOfDraggableElements
        .map((draggableElement: any, i: any) => (
          <CardCreator
            key={(Math.random() * 2000) << 0}
            id={draggableElement.id}
            category={draggableElement.category}
            title={draggableElement.title}
          />
        ))
      }
    </div>
  );
}