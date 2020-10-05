import React from 'react';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import { UserContext } from '../../Contexts/UserContext';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';

const UserList = () => {
  const [users, setUsers] = React.useState('');
  const [user, setUser] = React.useState('');
  const { getUser } = React.useContext(UserContext);
  const list = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://reqres.in/api/users?page=2', {
      method: 'GET',
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers({ users: data.data });
      })
      .catch(console.log);
    console.log(users);
  }

  function handleUser(event, list) {
    console.log(list);
    event.preventDefault();
    fetch('https://reqres.in/api/users/' + 1, {
      method: 'GET',
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ user: data.data });
      })
      .catch(console.log);
  }
  if (users) return <UserCard users={users} map={true} />;
  else if (user) return <UserCard user={user} map={false} />;

  return (
    <div>
      <Button onClick={handleSubmit}>Listar todos Usuários</Button>
      <form action="" onSubmit={handleUser}>
        <Input id="list" label="ID do Usuário" type="text" />
        <Button onClick={handleUser}>Buscar Usuário</Button>
      </form>
      <Button>
        <Link className="link" to="/user/create">
          Cadastrar Usuário
        </Link>
      </Button>
    </div>
  );
};

export default UserList;
