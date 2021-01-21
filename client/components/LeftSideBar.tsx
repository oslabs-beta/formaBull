import React from 'react'
import Card from '../components/Cards';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import AppContext from '../containers/ContextProvider';


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
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  backgroundColor: {
    backgroundColor: '#F94EB4',
  },
}));


export default function LeftSideBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.backgroundColor}>
     
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Edit" />
          <StyledTab label="Add" />
          <StyledTab label="Style" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
      <div>
      <Card />
      </div>
    </div>
  );
}



// // Override style by adding to the withStyles() higher-order component to inject custom styles into the DOM, and to pass the class name to the ClassNames component via its classes property.
// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1, //From material-ui.com
//     // backgroundColor: '#000000',
//     color: '#00000',
//     // marginRight: theme.spacing(1),
//   },
// }));


// // const Tab = withStyles((theme: Theme) =>
// //   createStyles({
// //     root: {
// //       textTransform: 'none',
// //       minWidth: 72,
// //       fontWeight: theme.typography.fontWeightRegular,
// //       marginRight: theme.spacing(4)
// //     }
// //   })
// // )

// export default function LeftSideBar () {

//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//       <div className = 'left-side-bar'>
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="Edit" />

//         <Tab label="Add" />
        
//         <Tab label="Style" />
//       </Tabs>
//     </Paper>

//       </div>
//   );
// }
