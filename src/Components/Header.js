import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../Assets/user.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { UserContext } from '../Contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  left: {
    right: '24px',
    position: 'absolute',
  },
  navbar: {
    background: '#2E3B55',
  },
  logo: {
    width: '30px',
    height: '30px',
    fill: '#fff',
    alignSelf: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  const context = React.useContext(UserContext);
  console.log(context);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              <User className={classes.logo} />
            </Typography>
          </Link>
          <Link to="/login" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
          </Link>
          <Link to="/user" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              User
            </Typography>
          </Link>
          <div className={classes.left}>
            <Button color="inherit"> Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
