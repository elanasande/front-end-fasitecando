import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  error: {
    color: '#f31',
    fontSize: '0.875rem',
    margin: '0 10px',
    paddingBottom: '8px',
  },
}));

const Input = ({ id, label, type, onChange, value, error, onBlur }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        className={classes.root}
        id={id}
        label={label}
        variant="outlined"
        onChange={onChange}
        value={value}
        type={type}
        onBlur={onBlur}
      />
      {error && <p className={classes.error}>{error}</p>}
    </React.Fragment>
  );
};

export default Input;
