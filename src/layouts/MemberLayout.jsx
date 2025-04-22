import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MemberLayout = ({ children }) => (
  <div className="layout member">
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  </div>
);

export default MemberLayout;