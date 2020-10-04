import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
const Login = () => {
  return (
    <div>
      <Input label="Nome"></Input>
      <Input label="Senha"></Input>
      <Button>Entrar</Button>
    </div>
  );
};

export default Login;
