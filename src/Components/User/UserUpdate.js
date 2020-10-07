import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { USER_UPDATE } from '../../api';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PersonAdd from '@material-ui/icons/Update';
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

const UserUpdate = () => {
  const name = useForm();
  const job = useForm();
  const list = useForm();
  const classes = useStyles();

  const { error, loading, request } = useFetch();

  async function handleUser(event) {
    if (list.validate() && job.validate() && name.validate()) {
      const { url, options } = USER_UPDATE(list.value, {
        name: name.value,
        job: job.value,
      });
      const { response } = await request(url, options);
      console.log('res update', response);
      if (response.ok) console.log('ok');
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Atualizar Usuário
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input id="list" label="Id Usuário" type="text" {...list}></Input>
            </Grid>
            <Grid item xs={12}>
              <Input id="name" label="Nome" type="text" {...name}></Input>
            </Grid>
            <Grid item xs={12}>
              <Input id="job" label="Job" type="text" {...job}></Input>
            </Grid>
          </Grid>
          {loading ? (
            <Button disabled>Atualizando...</Button>
          ) : (
            <Button type="submit" color="primary">
              Atualizar Usuário
            </Button>
          )}
          <Error error={error} />
        </form>
      </div>
    </Container>
  );
};

export default UserUpdate;
