import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { REGISTER } from '../../api';

const LoginCreate = () => {
  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      const { url, options } = REGISTER({
        email: email.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(response);
    }
  }

  return (
    <section>
      <h1>Cadastro</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input id="email" label="E-mail" type="text" {...email}></Input>
        <Input
          id="password"
          label="Senha"
          type="password"
          {...password}
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
