import React, { useContext }  from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { dracula, nord, monokai, irBlack, a11yDark, a11yLight, anOldHope, androidstudio, arta, atomOneDark, github, monoBlue, obsidian, ocean, rainbow } from 'react-code-blocks';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AppContext } from '../../src/';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 370,
      display: 'flex',
    },
    selectEmpty: {
      marginTop: theme.spacing(6),
    },
  }),
);

const galleryOfThemes = {'dracula': dracula, 'monokai': monokai, 'irBlack': irBlack, 'nord': nord, 'a11yDark': a11yDark, 'a11yLight': a11yLight, 'anOldHope': anOldHope, 'androidstudio': androidstudio, 'arta': arta, 'atomOneDark': atomOneDark, 'github': github, 'monoBlue': monoBlue, 'obsidian': obsidian, 'ocean': ocean, 'rainbow': rainbow };

export const SelectTheme = () => {
  const classes = useStyles();
  const { theme, setTheme }: any = useContext(AppContext)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTheme(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="filled" style = {{ background: galleryOfThemes[theme].backgroundColor }} className={classes.formControl}>
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
          <MenuItem value={'nord'}>nord</MenuItem>
          <MenuItem value={'a11yDark'}>a11yDark</MenuItem>
          <MenuItem value={'a11yLight'}>a11yLight</MenuItem>
          <MenuItem value={'anOldHope'}>anOldHope</MenuItem>
          <MenuItem value={'androidstudio'}>androidstudio</MenuItem>
          <MenuItem value={'arta'}>arta</MenuItem>
          <MenuItem value={'atomOneDark'}>atomOneDark</MenuItem>
          <MenuItem value={'github'}>github</MenuItem>
          <MenuItem value={'monoBlue'}>monoBlue</MenuItem>
          <MenuItem value={'obsidian'}>obsidian</MenuItem>
          <MenuItem value={'ocean'}>ocean</MenuItem>
          <MenuItem value={'rainbow'}>rainbow</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
};
