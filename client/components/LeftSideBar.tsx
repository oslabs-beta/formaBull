import React, { useContext } from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { AppContext } from '../../src/'
import { CardCreator } from './CardCreator';


interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}


// Use withStyles for styling class-based components
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#000000',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


interface StyledTabProps {
  label: string;
}


// Use withStyles for styling class-based components
const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(17),
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);


// makeStyle/useStyle is used at function components as a hook. This is similar to intial state. Any custom material-ui styling can go here and then can be set/invoked inside a div's className
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 0.03,
  },
  padding: {
    padding: theme.spacing(1),
  },
  backgroundColor: {
    backgroundColor: '#F94EB4',
  },
}));


export const LeftSideBar = (props:any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { listOfDraggableElements }: any = useContext(AppContext);

  const output = <div> Hello </div>
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // console.log(listOfDraggableElements[0].id)

  return (
    <div className={classes.root}>
      <div className={classes.backgroundColor}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Edit" />
          <StyledTab label="Add">
            <CardCreator />
          </StyledTab>
          <StyledTab label="Style" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
      <div>
        <Box bgcolor='yellow' height='auto' width='100px'>
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
        </Box>
    </div>
    </div>
  );
}

