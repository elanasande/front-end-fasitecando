import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { REGISTER } from '../../api';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
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

const LoginCreate = () => {
  const email = useForm('email');
  const password = useForm();
  const classes = useStyles();
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      const { url, options } = REGISTER({
        email: email.value,
        password: password.value,
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input id="email" label="E-mail" type="text" {...email}></Input>
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                label="Senha"
                type="password"
                {...password}
              ></Input>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quero receber atualizações via email."
              />
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Já tem uma conta? Faça o login aqui.</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginCreate;
