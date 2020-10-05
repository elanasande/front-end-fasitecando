import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { USER_UPDATE } from '../../api';

const UserUpdate = () => {
  const name = useForm();
  const job = useForm();
  const list = useForm();

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
    <div>
      <form action="" onSubmit={handleUser}>
        <Input id="list" label="Id Usuário" type="text" {...list}></Input>
        <Input id="name" label="Nome" type="text" {...name}></Input>
        <Input id="job" label="Job" type="text" {...job}></Input>
        {loading ? (
          <Button disabled>Atualizando...</Button>
        ) : (
          <Button type="submit">Atualizar Usuário</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default UserUpdate;
