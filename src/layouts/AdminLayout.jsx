import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Admin.css'

const AdminLayout = ({ children }) => (
  <div className="admin-layout">
    <div className="main-content">
      <Navbar />
      <section className="content p-4">{children}</section>
    </div>
  </div>
);

export default AdminLayout;
