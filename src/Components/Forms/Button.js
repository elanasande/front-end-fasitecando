import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonM from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Button = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonM {...props} variant="contained">
        {children}
      </ButtonM>
    </div>
  );
};

export default Button;
