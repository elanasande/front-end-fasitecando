import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#DCDCDC',
    height: 100,
    position: 'fixed',
    bottom: 0,
  },
});

const Footer = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Users" icon={<AccountCircleIcon />} />
      <p>Fasitecando. Alguns direitos reservados.</p>
    </BottomNavigation>
  );
};

export default Footer;
