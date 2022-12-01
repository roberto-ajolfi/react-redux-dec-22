import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import UserList from '../components/UserList';
import User from '../models/User';
import UserDataService from '../services/UserDataService';

const APIDemo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
      (async () => {
      const svc = new UserDataService("http://localhost:3001/users");
      const data = await svc.fetchAllUsers();
      setUsers(data);
      setLoading(false);
    })(); 
  }, []);

  return (<div className='container'>
    <div className='row mt-2'>
      <div className='col-12'>
      <NavLink className="btn btn-primary" to="/adduser">Add New</NavLink>
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-12'>
        <UserList users={users}>
          { loading ? <div>LOADING ...</div> : <h3>Users from API</h3> }
        </UserList>
      </div>
    </div>
  </div>);
}

export default APIDemo;