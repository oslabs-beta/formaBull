import React from 'react'
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Override style by adding to the withStyles() higher-order component to inject custom styles into the DOM, and to pass the class name to the ClassNames component via its classes property.
const useStyles = makeStyles({
  root: {
    flexGrow: 1, //From material-ui.com
    // width: '80%',
    minWidth: 20,
    // marginRight: theme.spacing(4)
  },
});

// const Tab = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       textTransform: 'none',
//       minWidth: 72,
//       fontWeight: theme.typography.fontWeightRegular,
//       marginRight: theme.spacing(4)
//     }
//   })
// )

export default function LeftSideBar () {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className = 'side-bars-and-canvas'>
      <div className = 'left-side-bar'>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
      </div>
    </div>
  );
}




