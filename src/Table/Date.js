
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  calendar  from '../Table/Calendar.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 170,
    
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2022-03-20"
        className={classes.textField}
        InputLabelProps={{
          shrink: false,
        }}
      />
    </form>
  );
}
