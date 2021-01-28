import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import CodeIcon from '@material-ui/icons/Code'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/icons/Menu';
import{ navLinks } from '../../routes/Routes'


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

type Anchor = 'left';


export const MenuDrawer = (props:any) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" aria-labelledby="main navigation">
      {navLinks.map(({ title, path }, index) => (
        <a href={path} key={title} style={{ color: 'inherit',textDecoration: 'none' }}>
          <ListItem button key={title}>
          <ListItemIcon>{index % 2 === 0 ? <CodeIcon /> : <BookmarkIcon />}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </a>
      ))}
      </List>
    </div>
  );

  
  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            // edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
          {anchor}
          <MenuIcon />
          </IconButton>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




// import React from 'react';
// import clsx from 'clsx';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';


// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// type Anchor = 'left';

// export default function MenuDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState(
//     // top: false,
//     false
//     // bottom: false,
//     // right: false,
//   );

//   const toggleDrawer = (open: boolean) => (
//     event: React.KeyboardEvent | React.MouseEvent,
//   ) => {
//     if (
//       event.type === 'keydown' &&
//       ((event as React.KeyboardEvent).key === 'Tab' ||
//         (event as React.KeyboardEvent).key === 'Shift')
//     ) {
//       return;
//     }

//     setState( open );
//   };

//   const list = (anchor: Anchor) => (
//     <div
//       className={clsx(classes.list)}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {['Create Form', 'Saved Forms', 'Drafts', 'Take a Tour', 'Settings', 'Help'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     // <div>
//     //   {/* <MenuIcon /> */}
//     //   {(['left'] as Anchor[]).map((anchor) => (
//     //     <React.Fragment key={anchor}>
//     //       <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//     //       <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//     //         {list(anchor)}
//     //       </Drawer>
//     //     </React.Fragment>
//     //   ))}
//     // </div>
//     <Drawer/>
//   // </Drawer>
//   );
// }