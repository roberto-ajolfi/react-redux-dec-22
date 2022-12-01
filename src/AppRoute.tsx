import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import About from './routes/About';
import Details from './routes/Details';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import "./App.css";
import Admin from './routes/admin/Admin';
import APIDemo from './routes/APIDemo';
import UserForm from './components/forms/UserForm';
import { ReduxTodo } from './routes/ReduxTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeSelector } from './components/DarkModeSelector';

const AppRoute = () => {
  return (<BrowserRouter>
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-10'>
          <NavLink to="/" className={({ isActive }) => isActive ? "error" : "" }>Home</NavLink>&nbsp;|&nbsp;
          <NavLink to="/team" className={({ isActive }) => isActive ? "error" : "" }>Meet the Team</NavLink>&nbsp;|&nbsp;
          <NavLink to="/usersapi" className={({ isActive }) => isActive ? "error" : "" }>Users</NavLink>&nbsp;|&nbsp;
          <NavLink to="/todos" className={({ isActive }) => isActive ? "error" : "" }>Todos</NavLink>&nbsp;|&nbsp;
          <NavLink to="/admin" className={({ isActive }) => isActive ? "error" : "" }>Admin</NavLink>&nbsp;|&nbsp;
          <NavLink to="/about" className={({ isActive }) => isActive ? "error" : "" }>About</NavLink>
        </div>
        <div className='col-2'>
          <DarkModeSelector />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/details/:id" element={ <Details />} />
            <Route path="/admin/*" element={ <Admin />} />
            <Route path="/usersapi" element={ <APIDemo />} />
            <Route path="/adduser" element={ <UserForm />} />
            <Route path="/todos" element={<ReduxTodo />} />
            <Route path="/about" element={ <About /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>);
}


export default AppRoute;