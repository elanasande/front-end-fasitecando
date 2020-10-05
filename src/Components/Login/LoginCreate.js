import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { REGISTER } from '../../api';

const LoginCreate = () => {
  const email = useForm('email');
  const password = useForm();

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
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
