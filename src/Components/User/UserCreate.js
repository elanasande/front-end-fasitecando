import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { REGISTER_USER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PersonAdd from '@material-ui/icons/PersonAdd';
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

const UserCreate = () => {
  const name = useForm();
  const job = useForm();
  const classes = useStyles();
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && job.validate()) {
      const { url, options } = REGISTER_USER({
        name: name.value,
        job: job.value,
      });

      const { response } = await request(url, options);
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
          Cadastrar Usuário
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input id="name" label="Nome" type="text" {...name}></Input>
            </Grid>
            <Grid item xs={12}>
              <Input id="job" label="Job" type="text" {...job}></Input>
            </Grid>
          </Grid>
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button type="submit" color="primary">
              Cadastrar
            </Button>
          )}
          <Error error={error} />
        </form>
      </div>
    </Container>
  );
};

export default UserCreate;
