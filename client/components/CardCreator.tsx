import React from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';
import { ItemTypes } from '../utils/items';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#202020',
    width: '300px',
    margin: 'auto',
    height: '8px',
    marginBottom: '15px',
    marginTop: '8px',
    borderStyle: 'solid',
    borderWidth: '1.5px',
    borderColor: '#F94EB4',
    borderRadius: '3px',
    display: 'flex',
  },
  dragIndicator: {
    padding: '0px',
    fontSize: '35px',
    position: 'relative', 
    bottom: '13px',
    display: 'inline-block'
  },
  title: {
    padding: '0px',
    fontSize: '18px',
    position: 'relative', 
    bottom: '10px',
    marginLeft: 'auto',
    color: 'white',
    display: 'inline-block'
  }
}));

interface CardCreatorProps {
  id: number;
  category: string;
  title: string;
};

export const CardCreator = (props: CardCreatorProps) => {
  const classes = useStyles();

  const[{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: props.id,
    }, 
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  });

  return (
    <div ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
      <Box className={classes.root} key={props.id}>
        <DragIndicatorIcon style={{ color: 'white' }} className={classes.dragIndicator}/>
        <Typography className={classes.title}>{props.title}</Typography>
      </ Box>
    </div>
  )
};
