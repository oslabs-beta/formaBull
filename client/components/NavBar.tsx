// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// export default function NavBar (props:any) {
  //   const [isOpen, setOpen] = useState(false);
  
  //   return (
    //     <div className="navbar">
    //       <div className="brand">formaBull</div> 
    //       <div className="navlink">
    //         <NavLink className='navlink' to='/'>Create Form</NavLink>
    //       </div>
    //       <div className="navlink">
    //         <NavLink className='navlink' to='/savedforms'>Saved Forms</NavLink>
//       </div>
//       <div className="navlink"><a>Drafts</a></div>
//       <div className="navlink"><a>Take a tour</a></div>
//       <div className="navlink"><a>Settings</a></div>
//       <div className="navlink"><a>Help</a></div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    backgroundColor: {
      backgroundColor: '#F94EB4',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div >
      <AppBar className={classes.backgroundColor} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            formaBull
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}


// Navbar should have links for the landing page to load.  I'm thinking the CreateAForm page would be the main landing page.  Saved Forms loads a different looking landing page, same with Help, TakeATour/Tutorial, etc.  The main app file will determine if a person is logged in. If so, they're directed to the landing page.  If not, they're directed to the Login Page.  From Login page, a person can click "Sign Up", which would take them to a separate, albeit similar looking, page. Sign up routes back to Log in, or automatically to Landing page.
// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <div className="brand">formaBull</div>
//       <div className="navlink">Create Form</div>
//       <div className="navlink">Saved Forms</div>
//       <div className="navlink">Take a Tour</div>
//       <div className="navlink">Settings</div>
//       <div className="navlink">Help</div>
//     </div>
//   )
// }


// export function NavBar (props:any) {};
// export { NavBar as default };
// default keyword was throwing an error, the reasoning I found was this
// You can only augment "exported" declarations. Class Foo is exported as default, and not as Foo. so the name Foo does not exist outside the module.
// It just happens that default is a reserved word, and can not used as an interface declaration name.
// The TS compiler needs to allow export { Foo as default} in module augmentation.