import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

// /admin /*
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />}>
        <Route index element={<AdminUsers />} />
        <Route path="computers" element={<AdminComputers />} />
      </Route>
    </Routes>
  );
};

export default Admin;

const AdminHome: React.FC = () => {
  return (
    <div>
      <NavLink
        to="/admin"
        end
        className={({ isActive }) => (isActive ? "error" : "")}
      >
        Users
      </NavLink>
      &nbsp;|&nbsp;
      <NavLink
        to="/admin/computers"
        className={({ isActive }) => (isActive ? "error" : "")}
      >
        Computers
      </NavLink>
      <hr />
      <Outlet />
    </div>
  );
};

const AdminUsers: React.FC = () => {
  return <h3>Amministro Utenti</h3>;
};

const AdminComputers: React.FC = () => {
  return <h3>Amministro Computer</h3>;
};
