import React, {useContext, useState}  from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AppContext } from '../../src/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 370,
      display: 'flex',
      background: '#282A36',
    },
    selectEmpty: {
      marginTop: theme.spacing(6),
    },
  }),
);

export const SelectTheme = () => {
  const classes = useStyles();
  const { theme, setTheme }: any = useContext(AppContext)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTheme(event.target.value as string);
  };

  return (
    <div>
       <FormControl variant="filled" className={classes.formControl}>
        <InputLabel style = {{color:'white'}} id="demo-simple-select-filled-label">Select theme</InputLabel>
        <Select style = {{color:'white'}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={theme}
          onChange={handleChange}
        >
          <MenuItem value="dracula">
            <em>dracula</em>
          </MenuItem>
          <MenuItem value={'irBlack'}>irBlack</MenuItem>
          <MenuItem value={'monokai'}>monokai</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  )
}