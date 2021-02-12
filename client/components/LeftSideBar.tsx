import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Typography, Container } from '@material-ui/core';
import { AddTab } from '../components/AddTab';
import { EditTab } from '../components/EditTab';
import { StyleTab } from '../components/StyleTab';


interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
};

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
  index: number;
};

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 0.03,
  },
  padding: {
    padding: theme.spacing(1),
  },
  containerPadding: {
    padding: '3px'
  },
  backgroundColor: {
    backgroundColor: '#F94EB4',
  },
}));

export const LeftSideBar = (props:any) => {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
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
        <Container className={classes.containerPadding}>
          <Box >
            {children}
          </Box>
        </Container>
        )}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.backgroundColor}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Add" index={0} />
          <StyledTab label="Style" index={1} />
          <StyledTab label="Edit" index={2} />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <AddTab />
        </TabPanel>
      </div>
      <div>
        <TabPanel value={value} index={1}>
          <StyleTab />
        </TabPanel>
      </div>
      <div>
        <TabPanel value={value} index={2}>
        <EditTab /> 
        </TabPanel>
      </div>
    </div>
  );
};
