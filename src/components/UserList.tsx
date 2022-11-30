import React, { ReactNode } from 'react'
import User from '../models/User';
import { UserRow } from './UserRow';

interface IUserListProps {
  users: User[];
  children: JSX.Element;
}

const UserList: React.FC<IUserListProps> = (props) => {
  const userItems = props.users.map((item) => (<UserRow key={item.id} user={item} />));

  return (<React.Fragment>
    {props.children}
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Is Manager</th>
        </tr>
      </thead>
      <tbody>
        {userItems}
      </tbody>
    </table>
  </React.Fragment>);
}

export default UserList;