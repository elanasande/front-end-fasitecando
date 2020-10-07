import React from 'react';
import {
  BottomNavigation,
  Box,
  Typography,
  Link,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Alguns direitos reservados.'}
      <Link color="inherit" href="#">
        {' '}
        Fasitecando.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  footer: {
    height: '160px',
    padding: theme.spacing(3, 3),
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
          showLabels
        >
          <BottomNavigationAction
            label="Usuário"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>{' '}
        <Container maxWidth="sm">
          <p></p>
          <Copyright />
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
