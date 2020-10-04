import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';

const Login = () => {
  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input id="email" label="E-mail" type="text" {...email}></Input>
        <Input
          id="password"
          label="Senha"
          type="password"
          {...password}
        ></Input>
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastre-se</Link>
      <Link to="/login/perdi">Perdeu a senha?</Link>
    </section>
  );
};

export default Login;
