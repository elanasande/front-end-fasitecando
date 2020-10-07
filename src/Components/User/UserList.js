import React from 'react';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { ReactComponent as UserF } from '../../Assets/user.svg';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Delete from '@material-ui/icons/Delete';
import Update from '@material-ui/icons/Update';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';
import { Container, Typography, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    height: '100vh',
    width: '96%',
    marginRight: '2%',
    marginLeft: '2%',
  },
  logocontainer: {
    alignSelf: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
  },
  logo: {
    width: '60px',
    height: '60px',
    fill: '#0A0161',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = React.useState('');
  const [user, setUser] = React.useState('');

  const list = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://reqres.in/api/users?page=2', {
      method: 'GET',
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers({ users: data.data });
      })
      .catch(console.log);
    console.log(users);
  }

  function handleUser(event) {
    if (list.validate()) {
      fetch('https://reqres.in/api/users/' + list.value, {
        method: 'GET',
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({ user: data.data });
        })
        .catch(console.log);
    }
  }
  if (users) return <UserCard users={users} map={true} />;
  else if (user) return <UserCard user={user} map={false} />;

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xm">
        <CssBaseline />

        <div className={classes.logocontainer}>
          <UserF className={classes.logo} />
          <Typography component="h1" variant="h5" alignItems="center">
            Usuário
          </Typography>
        </div>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <ListIcon fontSize="large" />
            <Button onClick={handleSubmit} color="primary">
              Listar todos Usuários
            </Button>
            <form action="" onSubmit={handleUser}>
              <Input id="list" label="ID do Usuário" type="text" {...list} />
              <Button onClick={handleUser} color="primary">
                Buscar Usuário
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <PersonAdd fontSize="large" />
            <Button color="primary">
              <Link className="link" to="/user/criar">
                Cadastrar Usuário
              </Link>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Update fontSize="large" />
            <Button color="primary">
              <Link className="link" to="/user/atualizar">
                Atualizar Usuário
              </Link>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Delete fontSize="large" />
            <Button color="primary">
              <Link className="link" to="/user/deletar">
                Deletar Usuário
              </Link>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserList;
