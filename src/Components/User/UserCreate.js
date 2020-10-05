import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { REGISTER_USER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const UserCreate = () => {
  const name = useForm();
  const job = useForm();
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input id="name" label="Nome" type="text" {...name}></Input>
        <Input id="job" label="Job" type="text" {...job}></Input>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default UserCreate;
