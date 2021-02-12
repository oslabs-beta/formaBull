import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box, Container } from '@material-ui/core/';
import { CodeTab } from './CodeTab';
import { CSSTab } from './CSSTab';


interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
};

// Use withStyles for styling class-based components
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    position: 'absolute',
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
  index: number;
};

// Use withStyles for styling class-based components
const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(17),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(2),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

// makeStyle/useStyle is used at function components
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    border: '10px',
  },
  padding: {
    padding: theme.spacing(1),
  },
  backgroundColor: {
    backgroundColor: '#F94EB4',
  },
}));


export const RightSideBar = (props:any) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            {children}
          </Box>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.backgroundColor}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" >
            <StyledTab label="Code" index={0} />
            <StyledTab label="CSS" index={1} />
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
      </div>
        <TabPanel value={value} index={0}>
          <CodeTab />
        </TabPanel>
      <div>
        <TabPanel value={value} index={1}>
          <CSSTab />
        </TabPanel>
      </div>
    </div>
  );
};