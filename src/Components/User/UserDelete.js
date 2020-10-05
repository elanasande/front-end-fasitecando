import React from 'react';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import { USER_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const UserDelete = (event) => {
  const { loading, request } = useFetch();
  const list = useForm();

  async function handleUser() {
    if (list.validate()) {
      const confirm = window.confirm('Tem certeza que deseja deletar?');
      if (confirm) {
        const { url, options } = USER_DELETE(list.value);
        const { response } = await request(url, options);
        if (response.ok) console.log('ok');
      }
    }
  }
  return (
    <form action="" onSubmit={handleUser}>
      <Input id="list" label="ID do Usuário" type="text" {...list} />
      {loading ? (
        <Button disabled onClick={handleUser}>
          Deletar Usuário
        </Button>
      ) : (
        <Button onClick={handleUser}>Deletar Usuário</Button>
      )}
    </form>
  );
};

export default UserDelete;
