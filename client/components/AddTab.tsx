import React, { useContext } from 'react';
import { AppContext } from '../../src/';
import { CardCreator } from '../components/CardCreator';


export const AddTab = (props:any) => {
  type ArrayOfDraggables = Array<{
    id: number;
    status: string;
    title: string;
    data: string;
  }>;
  interface DraggableElementsArray {
  };

  const { listOfDraggableElements }: ArrayOfDraggables = useContext(AppContext);

  return (
    <div style={{overflowY: 'scroll', height: '765', background: '#000000'}}>
      {listOfDraggableElements
        .map((draggableElement: any, i: any) => (
          <CardCreator
            // need to set key as something consistently relatable
            key={ draggableElement.id + i }
            id={draggableElement.id}
            category={draggableElement.category}
            title={draggableElement.title}
          />
        ))
      }
    </div>
  );
};
