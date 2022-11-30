import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import About from './routes/About';
import Details from './routes/Details';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import "./App.css";
import Admin from './routes/admin/Admin';

const AppRoute = () => {
  return (<BrowserRouter>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <NavLink to="/" className={({ isActive }) => isActive ? "error" : "" }>Home</NavLink>&nbsp;|&nbsp;
          <NavLink to="/team" className={({ isActive }) => isActive ? "error" : "" }>Meet the Team</NavLink>&nbsp;|&nbsp;
          <NavLink to="/admin" className={({ isActive }) => isActive ? "error" : "" }>Admin</NavLink>&nbsp;|&nbsp;
          <NavLink to="/about" className={({ isActive }) => isActive ? "error" : "" }>About</NavLink>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/details/:id" element={ <Details />} />
            <Route path="/admin/*" element={ <Admin />} />
            <Route path="/about" element={ <About /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>);
}


export default AppRoute;