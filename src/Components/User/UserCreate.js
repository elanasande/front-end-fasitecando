import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { REGISTER_USER } from '../../api';

const UserCreate = () => {
  const name = useForm();
  const job = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && job.validate()) {
      const { url, options } = REGISTER_USER({
        name: name.value,
        job: job.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input id="name" label="Nome" type="text"></Input>
        <Input id="job" label="Job" type="text"></Input>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};

export default UserCreate;
