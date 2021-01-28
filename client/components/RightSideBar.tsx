import React from 'react'
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography } from '@material-ui/core/';
import Output from './Output';


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
      marginRight: theme.spacing(1),
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



export const RightSideBar = (props:any) => {
  // This is used to set the hook/set state
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        {/* classes.backgroundColor hook being used for a specific div */}
        <div className={classes.backgroundColor}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="Code" />
            <StyledTab label="CSS" />
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
      </div>
      <Output />
    </div>
  );
}