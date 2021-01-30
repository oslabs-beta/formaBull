import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { AppContext } from '../../src/'
import { CardCreator } from '../components/CardCreator'

export const AddTab = (props:any) => {

  const { listOfDraggableElements }: any = useContext(AppContext);

  return (
    <div>
      {/* <Box bgcolor='yellow' height='auto' width='100px'> */}
        {listOfDraggableElements
          // .filter((draggableElement: any, i: any) => draggableElement.status === 'not-dropped')
          .map((draggableElement: any, i: any) => (
            <CardCreator
            //took out draggableElement.id.toString()
              key={(Math.random() * 1000) << 0}
              id={draggableElement.id}
              category={draggableElement.category}
              title={draggableElement.title}
            />
          ))
        }
      {/* </Box> */}
    </div>
  );
}