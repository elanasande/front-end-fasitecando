import React from 'react';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import { USER_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserDelete = (event) => {
  const { error, loading, request } = useFetch();
  const list = useForm();
  const classes = useStyles();

  async function handleUser() {
    if (list.validate()) {
      const confirm = window.confirm('Tem certeza que deseja deletar?');
      if (confirm) {
        const { url, options } = USER_DELETE(list.value);
        const { response } = await request(url, options);
        if (response.ok) console.log('ok');
      }
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Delete />
        </Avatar>
        <Typography component="h1" variant="h5">
          Deletar Usuário
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input id="list" label="Id Usuário" type="text" {...list}></Input>
            </Grid>
          </Grid>
          {loading ? (
            <Button disabled onClick={handleUser}>
              Deletar Usuário
            </Button>
          ) : (
            <Button onClick={handleUser} color="primary">
              Deletar Usuário
            </Button>
          )}
          <Error error={error} />
        </form>
      </div>
    </Container>
  );
};

export default UserDelete;
